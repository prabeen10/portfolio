import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Websites", href: "#websites" },
  { label: "Social", href: "#social" },
  { label: "Experience", href: "#experience" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const buildHref = (hash: string) => (isHome ? hash : `/${hash}`);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card !rounded-none border-x-0 border-t-0 border-b border-white/5 shadow-lg shadow-background/40" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 sm:px-6 py-3 sm:py-4">
        <Link to="/" className="font-heading text-lg sm:text-xl font-bold gradient-text">
          Prabeen.
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={buildHref(l.href)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <a
          href={buildHref("#contact")}
          className="hidden lg:inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-all duration-300"
        >
          Let's Talk
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground p-2 -mr-2"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-card/90 backdrop-blur-xl border-t border-white/5"
          >
            <div className="flex flex-col gap-1 p-5">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={buildHref(l.href)}
                  onClick={() => setOpen(false)}
                  className="py-3 px-3 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={buildHref("#contact")}
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-xl text-sm font-medium"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
