import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Globe } from "lucide-react";
import domis from "@/assets/site-domistech.jpg";
import kyaari from "@/assets/site-kyaari.jpg";
import infixor from "@/assets/site-infixor.jpg";

const websites = [
  {
    name: "Domis Tech",
    url: "https://domistech.com",
    domain: "domistech.com",
    image: domis,
    tagline: "Industrial IoT & Predictive Maintenance",
    description:
      "Designed and shipped the marketing site and product UI for an industrial SaaS platform delivering real-time machine analytics, predictive maintenance and intelligent alerting for manufacturing teams.",
    tags: ["SaaS", "IoT Dashboard", "B2B"],
    accent: "from-orange-500/30 to-amber-400/10",
  },
  {
    name: "Kyaari Foods",
    url: "https://kyaarifoods.com",
    domain: "kyaarifoods.com",
    image: kyaari,
    tagline: "Organic D2C E-commerce Brand",
    description:
      "Crafted a warm, story-led e-commerce experience for a homegrown organic foods brand — from product discovery to checkout — built around clean typography, earthy visuals and conversion-first UX.",
    tags: ["E-commerce", "D2C", "Branding"],
    accent: "from-emerald-500/30 to-lime-400/10",
  },
  {
    name: "Infixor",
    url: "https://infixor.com",
    domain: "infixor.com",
    image: infixor,
    tagline: "Software Consulting & Digital Solutions",
    description:
      "Designed a modern, futuristic web presence for a software consulting agency — pairing bold typography with glassmorphism and motion to communicate trust, scale and engineering depth.",
    tags: ["Agency", "Corporate", "Web Design"],
    accent: "from-indigo-500/30 to-violet-400/10",
  },
];

const WebsitesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="websites" className="section-padding relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-3"
        >
          <span className="inline-flex items-center gap-2 glass-card px-4 py-1.5 text-xs sm:text-sm text-muted-foreground">
            <Globe size={14} className="text-primary" /> Live On The Web
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold">
            Websites I've <span className="gradient-text">Shipped</span>
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Real products, real users, real URLs — designed end-to-end and currently live in production.
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {websites.map((site, i) => (
            <motion.a
              key={site.name}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`group glass-card overflow-hidden grid md:grid-cols-2 gap-0 hover:border-primary/40 transition-all duration-500 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10] md:aspect-auto md:min-h-[320px]">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${site.accent} opacity-60 group-hover:opacity-30 transition-opacity duration-500 z-10 pointer-events-none`}
                />
                <img
                  src={site.image}
                  alt={`${site.name} website preview`}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center gap-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Globe size={12} className="text-primary" />
                  <span className="font-mono">{site.domain}</span>
                  <span className="ml-auto inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-400/10 text-green-400 text-[10px] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Live
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold group-hover:text-primary transition-colors">
                    {site.name}
                  </h3>
                  <p className="text-sm text-primary/90 font-medium">{site.tagline}</p>
                </div>

                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {site.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {site.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] sm:text-xs px-2.5 py-1 rounded-full bg-secondary/60 border border-white/5 text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-2">
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    Visit Website
                    <ExternalLink
                      size={16}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebsitesSection;
