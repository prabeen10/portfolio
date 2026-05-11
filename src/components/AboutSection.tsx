import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Briefcase, Code2, Sparkles, Target, Users, Zap } from "lucide-react";

const stats = [
  { value: "3+", label: "Years Experience", icon: Briefcase },
  { value: "20+", label: "Projects Delivered", icon: Code2 },
  { value: "15+", label: "Happy Clients", icon: Award },
];

const domains = ["SaaS", "Supply Chain", "E-commerce", "Enterprise", "Dashboards"];

const highlights = [
  { icon: Target, title: "User-Centric", desc: "Design decisions backed by research & data" },
  { icon: Zap, title: "Fast Delivery", desc: "Agile workflow with rapid prototyping" },
  { icon: Users, title: "Collaborative", desc: "Close partnership with devs & PMs" },
  { icon: Sparkles, title: "Pixel Perfect", desc: "Attention to every micro-detail" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden" ref={ref}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      <div className="absolute top-20 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-32 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 space-y-4"
        >
          <h2 className="text-sm font-heading font-semibold text-primary uppercase tracking-widest">
            About Me
          </h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold max-w-3xl mx-auto leading-tight">
            Crafting interfaces that{" "}
            <span className="gradient-text">users love</span>
          </h3>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left - Bio + highlights */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-card p-6 md:p-8 space-y-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
              <p className="text-base md:text-lg text-foreground/90 leading-relaxed relative">
                I'm <span className="text-primary font-semibold">Prabeen Kumar Panda</span>, a UI/UX Designer with{" "}
                <span className="text-primary font-semibold">3+ years</span> of experience crafting user-centric
                interfaces and scalable digital products.
              </p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed relative">
                I specialize in designing SaaS platforms, enterprise dashboards, and e-commerce experiences —
                with a strong foundation in frontend development using React, TailwindCSS, and modern web technologies.
                I've led design initiatives that improved user journeys and boosted customer satisfaction by{" "}
                <span className="text-primary font-semibold">20%</span>.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={h.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                  className="glass-card p-4 flex gap-3 items-start glow-hover group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <h.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm">{h.title}</p>
                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{h.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Domains */}
            <div className="space-y-3">
              <p className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-widest">
                Domains I work in
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {domains.map((d, i) => (
                  <motion.span
                    key={d}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className="glass-card px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-muted-foreground hover:text-primary hover:border-primary/40 hover:scale-105 transition-all cursor-default"
                  >
                    {d}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Stats + Education + Cert */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="glass-card p-4 sm:p-5 text-center glow-hover group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <s.icon className="mx-auto mb-2 text-primary group-hover:scale-110 transition-transform relative" size={20} />
                  <div className="text-2xl sm:text-3xl font-heading font-bold gradient-text relative">
                    {s.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 relative leading-tight">
                    {s.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 }}
              className="glass-card p-5 sm:p-6 space-y-3 glow-hover"
            >
              <h4 className="text-xs font-heading font-semibold text-primary uppercase tracking-widest flex items-center gap-2">
                <GraduationCap size={16} /> Education
              </h4>
              <div className="space-y-2">
                <p className="font-heading font-semibold text-sm sm:text-base">Vignan Institute of Technology and Management</p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                  <span className="text-muted-foreground">Bachelor of Technology</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                  <span className="text-muted-foreground">CGPA: 8.67</span>
                </div>
                <p className="text-xs text-primary">2016 — 2020</p>
              </div>
            </motion.div>

            {/* Certificate */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass-card p-5 sm:p-6 space-y-3 glow-hover relative overflow-hidden"
            >
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <h4 className="text-xs font-heading font-semibold text-primary uppercase tracking-widest flex items-center gap-2 relative">
                <Award size={16} /> Certification
              </h4>
              <div className="relative">
                <p className="font-heading font-semibold text-sm sm:text-base">UI/UX Design — Kyaari Product</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  Full-cycle UI/UX design including customer flow mapping, responsive UI design,
                  usability enhancements, and cross-functional collaboration.
                </p>
                <p className="text-xs text-primary mt-2">March 2025</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
