import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Download, MapPin, Sparkles, Github, Linkedin } from "lucide-react";
import dashboardShot from "@/assets/project-predictive.jpg";

const HeroSection = () => {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 120, damping: 18 });
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 120, damping: 18 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <section className="relative min-h-[100svh] flex items-center section-padding pt-28 md:pt-32">
      {/* Hero-local gradient mesh + grid for depth */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 grid-bg opacity-[0.25]" />
        <motion.div
          animate={{ x: [0, 40, -30, 0], y: [0, -30, 20, 0], scale: [1, 1.1, 0.95, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="blob w-[560px] h-[560px] -top-40 left-0 bg-primary/25"
        />
        <motion.div
          animate={{ x: [0, -40, 30, 0], y: [0, 30, -20, 0], scale: [1, 0.95, 1.08, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="blob w-[520px] h-[520px] bottom-0 right-0 bg-amber-500/20"
        />
      </div>
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
            <span className="inline-flex items-center gap-1.5"><Sparkles size={14} className="text-primary" /> 4+ Years Experience</span>
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
              href="/Prabeen_Kumar_Panda_Resume.pdf"
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
              href="#"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
            >
              <Github size={16} />
            </a>
          </motion.div>
        </div>

        {/* Right - Device mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
          style={{ perspective: 1200 }}
          className="lg:col-span-5 relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative"
          >
            {/* Soft glow beneath the device */}
            <div aria-hidden className="absolute -inset-6 bg-gradient-to-br from-primary/30 via-amber-500/15 to-transparent rounded-[2.5rem] blur-3xl" />
            <div aria-hidden className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-primary/25 blur-2xl rounded-full" />

            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/20 bg-card"
            >
              {/* Browser chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-secondary/60 border-b border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/25" />
                <div className="ml-3 flex-1 h-6 rounded-md bg-background/60 border border-white/5 flex items-center px-3">
                  <span className="text-[10px] text-muted-foreground truncate">predictive-maintenance · dashboard</span>
                </div>
              </div>
              <img
                src={dashboardShot}
                alt="Predictive maintenance dashboard UI designed by Prabeen Kumar Panda"
                loading="eager"
                className="w-full aspect-[4/3] object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-white/5 pointer-events-none" />
              <div className="absolute inset-x-3 bottom-3 glass-card p-3 sm:p-4 flex items-center justify-between">
                <div>
                  <p className="text-[10px] sm:text-xs uppercase tracking-widest text-primary font-semibold">Currently</p>
                  <p className="text-xs sm:text-sm font-medium">Designing @ Domis Tech</p>
                </div>
                <span className="text-xs gradient-text font-bold">Open to work</span>
              </div>
            </motion.div>

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
