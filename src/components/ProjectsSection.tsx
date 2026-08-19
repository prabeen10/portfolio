import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import projectPredictive from "@/assets/project-predictive.jpg";
import projectEcommerce from "@/assets/project-ecommerce.jpg";
import projectSupplychain from "@/assets/project-supplychain.jpg";

const projects = [
  {
    title: "Predictive Maintenance System",
    category: "Industrial SaaS Dashboard",
    description: "Real-time analytics, alerts, and machine health monitoring for industrial equipment. Designed at Domis Tech.",
    image: projectPredictive,
    tags: ["Dashboard", "Analytics", "IoT", "Figma"],
    slug: "predictive-maintenance",
  },
  {
    title: "E-commerce Platform",
    category: "Conversion-Focused UX",
    description: "Product discovery and checkout flow designed to maximize conversions and reduce cart abandonment for a masala & spices brand.",
    image: projectEcommerce,
    tags: ["E-commerce", "UX Research", "Mobile", "UIkit"],
    slug: "ecommerce-platform",
  },
  {
    title: "Supply Chain System",
    category: "Enterprise Workflows",
    description: "Inventory management, procurement dashboards, and logistics tracking for enterprise operations at TurningCloud.",
    image: projectSupplychain,
    tags: ["Enterprise", "Data Viz", "Workflows", "SCSS"],
    slug: "supply-chain",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-4">
            Featured Projects
          </h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold">
            Selected <span className="gradient-text">Case Studies</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <Link
                to={`/case-study/${project.slug}`}
                className="group glass-card overflow-hidden glow-hover cursor-pointer block h-full"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="inline-flex items-center gap-1 text-primary font-medium text-sm bg-background/60 backdrop-blur-sm px-3 py-1.5 rounded-lg">
                      View Case Study <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <p className="text-xs text-primary font-medium uppercase tracking-wider">
                    {project.category}
                  </p>
                  <h4 className="text-lg font-heading font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
