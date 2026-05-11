import { motion } from "framer-motion";

/**
 * Site-wide animated background:
 * - Soft grid overlay
 * - Floating gradient blobs (orange + indigo + purple)
 * Sits behind all content (z-0). Page content should sit on z-10.
 */
const AnimatedBackground = () => {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg opacity-[0.35]" />

      {/* Vignette to soften edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background))_90%)]" />

      {/* Floating gradient blobs */}
      <motion.div
        animate={{ x: [0, 60, -20, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="blob w-[480px] h-[480px] -top-32 -left-32 bg-primary/30"
      />
      <motion.div
        animate={{ x: [0, -50, 40, 0], y: [0, 50, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="blob w-[520px] h-[520px] top-1/3 -right-40 bg-blue-500/25"
      />
      <motion.div
        animate={{ x: [0, 30, -40, 0], y: [0, -60, 20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="blob w-[420px] h-[420px] bottom-0 left-1/3 bg-purple-500/20"
      />
    </div>
  );
};

export default AnimatedBackground;
