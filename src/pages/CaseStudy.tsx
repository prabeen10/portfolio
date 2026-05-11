import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Calendar, User, Clock, Target, Lightbulb, BarChart3, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import casePredictiveHero from "@/assets/case-predictive-hero.jpg";
import caseEcommerceHero from "@/assets/case-ecommerce-hero.jpg";
import caseSupplychainHero from "@/assets/case-supplychain-hero.jpg";

import projectPredictive from "@/assets/project-predictive.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectSupplychain from "@/assets/project-supplychain.jpg";

const caseStudies: Record<string, any> = {
  "predictive-maintenance": {
    title: "Predictive Maintenance System",
    subtitle: "Industrial SaaS Dashboard",
    heroImage: casePredictiveHero,
    galleryImages: [projectPredictive],
    overview: {
      role: "UI/UX Designer",
      company: "Domis Tech Pvt. Ltd.",
      duration: "3 Months",
      tools: "Figma, UIkit, Adobe Illustrator",
    },
    problem: "Industrial equipment operators lacked a unified platform to monitor machine health in real-time. Maintenance teams relied on reactive approaches, leading to costly unplanned downtime and safety risks. The existing systems were fragmented — alerts from different machines went to different dashboards, making it nearly impossible to prioritize issues.",
    solution: "I designed a comprehensive SaaS dashboard that consolidates real-time sensor data, predictive analytics, and alert management into a single interface. The design features intuitive data visualizations, a traffic-light alert system, and drill-down capabilities so operators can quickly assess machine health and schedule maintenance proactively.",
    process: [
      "Conducted user interviews with maintenance engineers to map pain points",
      "Created detailed user flows and information architecture for multi-level dashboards",
      "Designed wireframes in Figma, iterating through 3 rounds of feedback",
      "Built high-fidelity prototypes with real-time data visualization patterns",
      "Usability tested with 8 operators, refined interaction patterns based on findings",
    ],
    impact: [
      { metric: "40%", label: "Reduction in unplanned downtime" },
      { metric: "3x", label: "Faster issue identification" },
      { metric: "95%", label: "User satisfaction score" },
      { metric: "20%", label: "Increase in maintenance efficiency" },
    ],
    nextProject: { slug: "ecommerce-platform", title: "E-commerce Platform" },
  },
  "ecommerce-platform": {
    title: "E-commerce Platform",
    subtitle: "Conversion-Focused UX Design",
    heroImage: caseEcommerceHero,
    galleryImages: [projectEcommerce],
    overview: {
      role: "UI/UX Designer",
      company: "Domis Tech Pvt. Ltd.",
      duration: "4 Months",
      tools: "Figma, Photoshop, UIkit",
    },
    problem: "A masala & spices brand needed an online presence but faced challenges with high cart abandonment rates in their initial prototype. Product discovery was poor — users couldn't find products by category, and the checkout process had too many friction points. Mobile experience was particularly broken, with 70% of traffic coming from mobile devices.",
    solution: "I redesigned the entire shopping experience with a mobile-first approach. Created intuitive product category navigation (top categories, reviews, blog pages), streamlined the checkout to 3 steps, and added trust signals throughout. The design emphasized rich product imagery and clear calls-to-action to drive conversions.",
    process: [
      "Analyzed competitor e-commerce platforms and identified UX best practices",
      "Mapped the complete customer journey from discovery to post-purchase",
      "Designed responsive wireframes for mobile, tablet, and desktop breakpoints",
      "Created a visual design system with brand-consistent components",
      "Conducted A/B tests on checkout flow variations with real users",
    ],
    impact: [
      { metric: "35%", label: "Increase in conversion rate" },
      { metric: "50%", label: "Reduction in cart abandonment" },
      { metric: "2x", label: "Mobile engagement improvement" },
      { metric: "20%", label: "Customer satisfaction boost" },
    ],
    nextProject: { slug: "supply-chain", title: "Supply Chain System" },
  },
  "supply-chain": {
    title: "Supply Chain System",
    subtitle: "Enterprise Workflow Design",
    heroImage: caseSupplychainHero,
    galleryImages: [projectSupplychain],
    overview: {
      role: "Associate Software Engineer / UI Designer",
      company: "TurningCloud Solutions Pvt. Ltd.",
      duration: "6 Months",
      tools: "Figma, Photoshop, HTML, SCSS",
    },
    problem: "Enterprise clients managing complex supply chains struggled with disconnected tools for inventory tracking, procurement, and logistics. The existing system had poor usability — users needed extensive training, and data entry errors were common. The dashboard failed to surface critical insights, making decision-making slow and error-prone.",
    solution: "I designed and developed scalable UI components for a unified supply chain management platform. The solution included inventory dashboards with real-time stock levels, procurement workflow automation, audit logs for compliance, and logistics tracking with map-based visualization. The interface was designed for complex business flows including warehouse and sales systems.",
    process: [
      "Researched enterprise supply chain workflows through stakeholder interviews",
      "Developed information architecture for multi-module enterprise system",
      "Created component library in Figma for consistent design across modules",
      "Built responsive UI using HTML, SCSS, and modern frontend practices",
      "Integrated latest UI trends through ongoing research and testing",
    ],
    impact: [
      { metric: "60%", label: "Faster inventory look-up" },
      { metric: "45%", label: "Reduction in data entry errors" },
      { metric: "3x", label: "Faster procurement workflows" },
      { metric: "90%", label: "User adoption rate" },
    ],
    nextProject: { slug: "predictive-maintenance", title: "Predictive Maintenance System" },
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const CaseStudy = () => {
  const { slug } = useParams();
  const study = caseStudies[slug || ""];

  if (!study) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-heading font-bold">Case Study Not Found</h1>
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative noise-overlay">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <motion.div {...fadeUp} className="mb-8">
            <Link to="/#projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft size={16} /> Back to Projects
            </Link>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="space-y-4 mb-12">
            <p className="text-sm text-primary font-medium uppercase tracking-widest">{study.subtitle}</p>
            <h1 className="text-4xl md:text-6xl font-heading font-bold">{study.title}</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-blue-500/10 blur-3xl opacity-50" />
            <img
              src={study.heroImage}
              alt={study.title}
              className="relative w-full rounded-3xl border border-white/10"
              width={1920}
              height={1080}
            />
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: User, label: "Role", value: study.overview.role },
              { icon: Calendar, label: "Company", value: study.overview.company },
              { icon: Clock, label: "Duration", value: study.overview.duration },
              { icon: Layers, label: "Tools", value: study.overview.tools },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="glass-card p-5 space-y-2"
              >
                <item.icon size={18} className="text-primary" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</p>
                <p className="text-sm font-medium">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-destructive/10 flex items-center justify-center">
                <Target size={20} className="text-destructive" />
              </div>
              <h2 className="text-2xl font-heading font-bold">The Problem</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">{study.problem}</p>
          </motion.div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Lightbulb size={20} className="text-primary" />
              </div>
              <h2 className="text-2xl font-heading font-bold">The Solution</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">{study.solution}</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid gap-6">
            {study.galleryImages.map((img: string, i: number) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="rounded-2xl overflow-hidden border border-white/10"
              >
                <img src={img} alt={`${study.title} design ${i + 1}`} className="w-full" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Layers size={20} className="text-primary" />
              </div>
              <h2 className="text-2xl font-heading font-bold">Design Process</h2>
            </div>
            <div className="space-y-4">
              {study.process.map((step: string, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 glass-card p-4"
                >
                  <span className="w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </span>
                  <p className="text-muted-foreground text-sm leading-relaxed pt-1">{step}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center">
                <BarChart3 size={20} className="text-green-400" />
              </div>
              <h2 className="text-2xl font-heading font-bold">Impact & Results</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {study.impact.map((item: any, i: number) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6 text-center glow-hover"
                >
                  <div className="text-3xl font-heading font-bold gradient-text">{item.metric}</div>
                  <p className="text-xs text-muted-foreground mt-2">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 text-center">
          <p className="text-sm text-muted-foreground mb-4">Next Case Study</p>
          <Link
            to={`/case-study/${study.nextProject.slug}`}
            className="inline-flex items-center gap-3 text-2xl md:text-4xl font-heading font-bold hover:text-primary transition-colors group"
          >
            {study.nextProject.title}
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={28} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseStudy;
