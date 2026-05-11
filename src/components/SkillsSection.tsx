import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Code, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "UI/UX Tools",
    icon: Palette,
    skills: ["Figma", "Photoshop", "Sketch", "Adobe Illustrator", "Adobe XD", "CorelDRAW"],
  },
  {
    title: "Frontend Technologies",
    icon: Code,
    skills: ["HTML", "CSS", "SCSS", "Bootstrap", "UIkit", "TailwindCSS", "JavaScript", "ReactJS", "jQuery"],
  },
  {
    title: "Version Control & Tools",
    icon: Wrench,
    skills: ["Git", "Bitbucket", "Jira", "User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-heading font-semibold text-primary uppercase tracking-widest mb-4">
            Skills & Tools
          </h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold">
            My <span className="gradient-text">Toolkit</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="glass-card p-6 space-y-5 glow-hover"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <cat.icon size={20} className="text-primary" />
                </div>
                <h4 className="font-heading font-semibold">{cat.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.3 + catIdx * 0.1 + i * 0.03 }}
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
