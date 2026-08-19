import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/** Small glowing dot that follows the mouse. Desktop / fine-pointer only. */
const GlowCursor = () => {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 30, mass: 0.3 });
  const sy = useSpring(y, { stiffness: 400, damping: 30, mass: 0.3 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;
    setEnabled(true);
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ left: sx, top: sy }}
      className="pointer-events-none fixed z-[60] -translate-x-1/2 -translate-y-1/2 hidden md:block"
    >
      <div className="w-3 h-3 rounded-full bg-primary/80 shadow-[0_0_18px_6px_hsl(var(--primary)/0.35)]" />
    </motion.div>
  );
};

export default GlowCursor;