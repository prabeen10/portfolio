import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

/**
 * Feedback highlights — role-only attribution (no invented names).
 * To add a real testimonial later, fill in `name` and `avatar` on an item
 * and the card will render them automatically.
 */
type Feedback = {
  quote: string;
  attribution: string;
  name?: string;
  avatar?: string;
};

const feedback: Feedback[] = [
  {
    quote:
      "Complex industrial workflows were translated into clean, intuitive dashboard interfaces that the team could actually use day to day.",
    attribution: "Product Manager, Domis Tech",
  },
  {
    quote:
      "From brand storytelling to the checkout flow, the e-commerce experience genuinely reflects the product and reads clearly on every device.",
    attribution: "Client feedback, Kyaari Foods",
  },
  {
    quote:
      "Detail-obsessed and fast — problems are owned end-to-end, from research and wireframes to pixel-perfect handoff and frontend implementation.",
    attribution: "Engineering stakeholder, Infixor",
  },
  {
    quote:
      "A highly collaborative designer: thinks like a developer, designs like an artist, and keeps delivery moving.",
    attribution: "Engineering Lead, TurningCloud Solutions",
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
            <Star size={14} className="text-primary fill-primary" /> Feedback
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Feedback <span className="gradient-text">Highlights</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Recurring themes from teams and clients I've worked with, shared without attribution to individuals.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {feedback.map((t, i) => (
            <motion.div
              key={t.attribution}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass-card p-6 md:p-8 hover:border-primary/40 transition-all duration-500 relative overflow-hidden"
            >
              <div
                aria-hidden
                className="absolute -top-16 -right-16 w-48 h-48 rounded-full bg-gradient-to-br from-primary/30 to-amber-400/10 blur-3xl opacity-50 group-hover:opacity-80 transition-opacity duration-500"
              />
              <Quote className="text-primary/40 mb-4" size={28} />
              <blockquote className="text-sm md:text-base text-foreground/90 leading-relaxed mb-6 relative">
                "{t.quote}"
              </blockquote>
              <div className="flex items-center gap-3 relative">
                {t.avatar && (
                  <img src={t.avatar} alt="" className="w-11 h-11 rounded-full object-cover shrink-0" />
                )}
                <div className="min-w-0">
                  {t.name && <p className="font-heading font-semibold text-sm truncate">{t.name}</p>}
                  <p className="text-xs text-muted-foreground truncate">— {t.attribution}</p>
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
