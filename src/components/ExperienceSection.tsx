import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Domis Tech Pvt. Ltd.",
    role: "UI/UX Designer",
    period: "Aug 2024 — Present",
    highlights: [
      "Designed new UI components including tabs, cards, and animations using Figma and UIkit",
      "Created wireframes, mockups, and interactive prototypes for company website features",
      "Designed product sections such as top categories, reviews, and blog pages for a masala & spices website",
      "Produced branding and visual assets using Adobe Illustrator, enhancing visual identity",
      "Led design initiatives that improved user journey and boosted customer satisfaction by 20%",
      "Collaborated with developers and project managers to align design goals with business requirements",
    ],
  },
  {
    company: "TurningCloud Solutions Pvt. Ltd.",
    role: "Associate Software Engineer",
    period: "Jan 2023 — Aug 2024",
    highlights: [
      "Resolved front-end bugs and developed web pages using HTML, SCSS, and CSS",
      "Designed user interfaces in Figma and Photoshop based on specific client needs",
      "Developed scalable UI components for dashboards, audit logs, product catalogues, and more",
      "Created user-centered experiences for complex business flows including warehouse and sales systems",
      "Conducted ongoing research to integrate the latest trends into modern UI development",
    ],
  },
  {
    company: "Pearnode Technology Solutions",
    role: "Web Developer",
    period: "Apr 2021 — Feb 2022",
    highlights: [
      "Developed responsive front-end applications using HTML, CSS, Bootstrap, and JavaScript",
      "Created a billing tool for the Tally Plug project and authored a comprehensive user guide",
      "Worked collaboratively with stakeholders to align interface designs with business requirements",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-4">
            Experience
          </h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold">
            Work <span className="gradient-text">Timeline</span>
          </h3>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative pl-8 border-l-2 border-primary/30"
            >
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary animate-glow-pulse" />
              <div className="glass-card p-6 space-y-4 glow-hover">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-heading font-semibold text-lg flex items-center gap-2">
                    <Building2 size={18} className="text-primary" />
                    {exp.company}
                  </h4>
                  <span className="text-xs text-primary font-medium px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                    {exp.period}
                  </span>
                </div>
                <p className="text-primary/80 text-sm font-medium">{exp.role}</p>
                <ul className="space-y-2">
                  {exp.highlights.map((h) => (
                    <li
                      key={h}
                      className="text-sm text-muted-foreground flex items-start gap-2"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
