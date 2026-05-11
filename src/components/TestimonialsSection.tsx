import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rohit Sharma",
    role: "Product Manager",
    company: "Domis Tech",
    initials: "RS",
    quote:
      "Prabeen has a rare ability to translate complex industrial workflows into clean, intuitive interfaces. Our predictive maintenance dashboard wouldn't be what it is without him.",
    color: "from-orange-500/30 to-amber-400/10",
  },
  {
    name: "Ananya Verma",
    role: "Founder",
    company: "Kyaari Foods",
    initials: "AV",
    quote:
      "From brand storytelling to checkout flow, Prabeen designed an e-commerce experience that genuinely reflects who we are. Conversions went up within the first month of launch.",
    color: "from-emerald-500/30 to-lime-400/10",
  },
  {
    name: "Karthik Reddy",
    role: "CTO",
    company: "Infixor",
    initials: "KR",
    quote:
      "Detail-obsessed and incredibly fast. Prabeen owns problems end-to-end — from research and wireframes to pixel-perfect handoff and frontend implementation.",
    color: "from-indigo-500/30 to-violet-400/10",
  },
  {
    name: "Sneha Patil",
    role: "Engineering Lead",
    company: "TurningCloud Solutions",
    initials: "SP",
    quote:
      "One of the most collaborative designers I've worked with. He thinks like a developer, designs like an artist, and ships like a founder.",
    color: "from-pink-500/30 to-rose-400/10",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="testimonials" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-3"
        >
          <span className="inline-flex items-center gap-2 glass-card px-4 py-1.5 text-xs sm:text-sm text-muted-foreground">
            <Star size={14} className="text-primary fill-primary" /> Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Kind words from <span className="gradient-text">collaborators</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            What founders, engineers and product managers I've worked with have to say.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card p-6 md:p-8 hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
            >
              <div
                className={`absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br ${t.color} blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500`}
              />
              <Quote className="text-primary/40 mb-4" size={28} />
              <p className="text-sm md:text-base text-foreground/90 leading-relaxed mb-6 relative">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 relative">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-amber-400 flex items-center justify-center text-primary-foreground font-heading font-bold text-sm shrink-0">
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-heading font-semibold text-sm truncate">{t.name}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {t.role} · <span className="text-primary/80">{t.company}</span>
                  </p>
                </div>
                <div className="ml-auto flex gap-0.5 shrink-0">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={12} className="text-primary fill-primary" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
