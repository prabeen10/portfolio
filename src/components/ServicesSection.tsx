import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layout, Palette, Code2, Smartphone } from "lucide-react";
import illustration from "@/assets/services-illustration.jpg";

const services = [
  {
    icon: Palette,
    title: "UX Design",
    description:
      "Crafting seamless, user-centric experiences. From research and journey mapping to wireframes and prototypes — turning ideas into intuitive designs.",
  },
  {
    icon: Layout,
    title: "UI Design",
    description:
      "Building responsive, adaptive interfaces with strong visual hierarchy, accessible color systems, and refined typography across devices.",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Translating designs into clean, scalable code using React, TailwindCSS, SCSS, and modern frontend best-practices.",
  },
  {
    icon: Smartphone,
    title: "Design Systems",
    description:
      "Designing reusable component libraries and tokens in Figma & code — keeping product teams shipping faster with consistency.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-xs sm:text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-3 sm:mb-4">
            What I Do
          </h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold">
            My <span className="gradient-text">Services</span>
          </h3>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 order-last lg:order-first"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/30 to-purple-500/20 blur-3xl opacity-60" />
              <img
                src={illustration}
                alt="Designer workspace illustration"
                width={1024}
                height={1024}
                loading="lazy"
                className="relative rounded-3xl border border-white/10 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Service cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4 sm:gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card p-5 sm:p-6 space-y-3 glow-hover group"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <s.icon size={20} className="text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-base sm:text-lg">{s.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
