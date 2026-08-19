import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Building2, ChevronDown } from "lucide-react";

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
  const [open, setOpen] = useState<number | null>(0);

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

        {/* Vertical timeline */}
        <ol className="max-w-3xl mx-auto relative pl-8 sm:pl-10">
          <div
            aria-hidden
            className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/25 to-transparent"
          />
          {experiences.map((exp, i) => {
            const isOpen = open === i;
            return (
              <motion.li
                key={exp.company}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                className="relative pb-8 last:pb-0"
              >
                <span
                  aria-hidden
                  className="absolute -left-8 sm:-left-10 top-4 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/15"
                />
                <div className="rounded-2xl border border-white/10 bg-card/30 backdrop-blur-sm transition-colors hover:border-primary/40">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full text-left p-5 sm:p-6 flex flex-wrap items-center gap-3"
                  >
                    <div className="min-w-0 flex-1 space-y-1">
                      <h4 className="font-heading font-semibold text-base sm:text-lg flex items-center gap-2">
                        <Building2 size={18} className="text-primary shrink-0" />
                        <span className="truncate">{exp.company}</span>
                      </h4>
                      <p className="text-primary/80 text-sm font-medium">{exp.role}</p>
                    </div>
                    <span className="text-xs text-primary font-medium px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                      {exp.period}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-muted-foreground transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-2 px-5 sm:px-6 pb-6 pt-1 border-t border-white/5">
                          {exp.highlights.map((h) => (
                            <li key={h} className="text-sm text-muted-foreground flex items-start gap-2 pt-2">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                              {h}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default ExperienceSection;
