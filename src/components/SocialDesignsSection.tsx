import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import ig1 from "@/assets/social-instagram-1.jpg";
import ig2 from "@/assets/social-instagram-2.jpg";
import ig3 from "@/assets/social-instagram-3.jpg";
import fb1 from "@/assets/social-facebook-1.jpg";
import li1 from "@/assets/social-linkedin-1.jpg";
import st1 from "@/assets/social-story-1.jpg";

const posts = [
  { src: ig1, client: "Lurex Fashion", platform: "Instagram", icon: Instagram, type: "Feed Post", color: "from-pink-500 to-orange-500" },
  { src: fb1, client: "SaaSly", platform: "Facebook", icon: Facebook, type: "Ad Creative", color: "from-blue-500 to-cyan-500" },
  { src: st1, client: "NeonTech", platform: "Instagram", icon: Instagram, type: "Story", color: "from-purple-500 to-pink-500", tall: true },
  { src: ig2, client: "Kyaari Foods", platform: "Instagram", icon: Instagram, type: "Carousel", color: "from-green-500 to-lime-500" },
  { src: li1, client: "Domis Tech", platform: "LinkedIn", icon: Linkedin, type: "Announcement", color: "from-blue-600 to-indigo-500" },
  { src: ig3, client: "ChargeFit", platform: "Instagram", icon: Instagram, type: "Promo Post", color: "from-red-500 to-rose-500" },
];

const SocialDesignsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="social" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute top-1/2 -left-32 w-72 h-72 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-32 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 space-y-4"
        >
          <h2 className="text-sm font-heading font-semibold text-primary uppercase tracking-widest">
            Social Media Designs
          </h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold max-w-3xl mx-auto leading-tight">
            Scroll-stopping creatives for{" "}
            <span className="gradient-text">brands</span>
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            A selection of post, ad and story designs crafted for client campaigns
            across Instagram, Facebook and LinkedIn.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 [grid-auto-rows:1fr]">
          {posts.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl glass-card glow-hover ${p.tall ? "row-span-2" : ""}`}
            >
              <div className={`relative ${p.tall ? "aspect-[9/16]" : "aspect-square"} overflow-hidden`}>
                <img
                  src={p.src}
                  alt={`${p.client} ${p.platform} ${p.type}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                <div className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gradient-to-r ${p.color} text-white text-[10px] font-semibold shadow-lg`}>
                  <p.icon size={11} />
                  {p.platform}
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                <p className="text-[10px] uppercase tracking-widest text-primary font-semibold">{p.type}</p>
                <p className="text-sm sm:text-base font-heading font-bold mt-0.5 truncate">{p.client}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialDesignsSection;