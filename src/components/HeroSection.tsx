import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Sparkles, Github, Linkedin } from "lucide-react";
import portrait from "@/assets/hero-workspace.jpg";
import blob from "@/assets/abstract-blob.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center section-padding pt-28 md:pt-32">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        {/* Left - Text */}
        <div className="lg:col-span-7 space-y-6 md:space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 text-xs sm:text-sm text-muted-foreground"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for new projects
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="space-y-2"
          >
            <p className="text-sm md:text-base text-muted-foreground tracking-widest uppercase">
              Hello, I'm
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.05] tracking-tight">
              Prabeen Kumar <br />
              <span className="gradient-text">Panda</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            <span className="text-foreground font-medium">UI/UX Designer & Frontend Developer</span> crafting
            scalable digital experiences for SaaS platforms, enterprise dashboards, and e-commerce products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5"><MapPin size={14} className="text-primary" /> Noida, India</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
            <span className="inline-flex items-center gap-1.5"><Sparkles size={14} className="text-primary" /> 3+ Years Experience</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 sm:px-6 py-3 rounded-xl font-medium glow-hover hover:gap-3 transition-all duration-300"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="https://drive.google.com/file/d/1OtXZ6Ud_OaKdWKaGPv9kH3S-0bLMFSD0/view?usp=drivesdk"
              download
              className="inline-flex items-center gap-2 glass-card px-5 sm:px-6 py-3 rounded-xl font-medium text-foreground hover:border-primary/50 transition-all duration-300"
            >
              <Download size={18} /> Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center justify-center lg:justify-start gap-3 pt-2"
          >
            <a
              href="https://linkedin.com/in/prabeen-kumar-panda-676410198"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="https://github.com/prabeen10"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              <Github size={16} />
            </a>
          </motion.div>
        </div>

        {/* Right - Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="lg:col-span-5 relative mx-auto w-full max-w-sm sm:max-w-md lg:max-w-none"
        >
          {/* Decorative blob behind */}
          <motion.img
            src={blob}
            alt=""
            aria-hidden
            className="absolute -top-10 -right-10 w-56 sm:w-72 opacity-80 pointer-events-none"
            animate={{ y: [0, -16, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            <div className="absolute -inset-3 bg-gradient-to-br from-primary/40 via-orange-400/20 to-purple-500/20 rounded-[2rem] blur-2xl" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl shadow-primary/10 bg-card">
              <img
                src={portrait}
                alt="UI/UX Designer workspace with Figma wireframes and design tools"
                width={896}
                height={1152}
                className="w-full aspect-[4/5] object-cover"
              />
              {/* Subtle overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent pointer-events-none" />
              {/* Bottom info bar */}
              <div className="absolute inset-x-3 bottom-3 glass-card p-3 sm:p-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-primary font-semibold">Currently</p>
                  <p className="text-xs sm:text-sm font-medium">Designing @ Domis Tech</p>
                </div>
                <span className="text-xs gradient-text font-bold">Open to work</span>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="hidden sm:flex absolute -right-4 top-10 glass-card px-3 py-2 text-xs font-medium items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="gradient-text">20+ Projects</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.15, duration: 0.6 }}
              className="hidden sm:flex absolute -left-4 bottom-28 glass-card px-3 py-2 text-xs font-medium items-center gap-2"
            >
              <Sparkles size={12} className="text-primary" />
              <span>Figma Expert</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] text-muted-foreground tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-8 rounded-full border-2 border-primary/40 flex items-start justify-center p-1"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
