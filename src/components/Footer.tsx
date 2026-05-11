import { Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-white/5 py-8 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-sm text-muted-foreground flex items-center gap-1">
        © 2026 Prabeen Kumar Panda.
      </p>
      <div className="flex items-center gap-6 text-sm text-muted-foreground">
        <a href="mailto:prabeenkumar3105@gmail.com" className="hover:text-primary transition-colors">Email</a>
        <a href="https://www.linkedin.com/in/prabeen-kumar-panda-676410198/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">LinkedIn</a>
        <a href="https://github.com/prabeen10" className="hover:text-primary transition-colors">GitHub</a>
      </div>
    </div>
  </footer>
);

export default Footer;
