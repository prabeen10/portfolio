import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Linkedin, Phone, MapPin, Send, User, MessageSquare, Loader2, CheckCircle2, Github } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  subject: z.string().trim().min(2, "Subject is required").max(150),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(form);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setLoading(true);
    // Open email client with prefilled data
    const body = `Hi Prabeen,%0D%0A%0D%0A${encodeURIComponent(form.message)}%0D%0A%0D%0A— ${encodeURIComponent(form.name)} (${encodeURIComponent(form.email)})`;
    setTimeout(() => {
      window.location.href = `mailto:prabeenkumar3105@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${body}`;
      setLoading(false);
      setSent(true);
      toast.success("Opening your email client...");
      setTimeout(() => setSent(false), 4000);
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 600);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.04] to-transparent pointer-events-none" />
      <div className="absolute -top-20 left-1/3 w-72 h-72 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14 space-y-4"
        >
          <h2 className="text-sm font-heading font-semibold text-primary uppercase tracking-widest">
            Get In Touch
          </h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold">
            Let's build something <span className="gradient-text">amazing</span>
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base">
            Have a project in mind or just want to say hi? Drop a message and I'll get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8 items-start">
          {/* Left - contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="glass-card p-6 space-y-5">
              <div>
                <p className="text-xs font-heading font-semibold text-primary uppercase tracking-widest mb-1">Reach me at</p>
                <h4 className="font-heading font-bold text-xl">Let's connect</h4>
              </div>
              {[
                { icon: Mail, label: "Email", value: "prabeenkumar3105@gmail.com", href: "mailto:prabeenkumar3105@gmail.com" },
                { icon: Phone, label: "Phone", value: "+91 9692285867", href: "tel:+919692285867" },
                { icon: MapPin, label: "Location", value: "Noida, India" },
              ].map((c) => (
                <a key={c.label} href={c.href} className="flex items-start gap-3 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                    <c.icon size={16} className="text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] uppercase tracking-widest text-muted-foreground">{c.label}</p>
                    <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">{c.value}</p>
                  </div>
                </a>
              ))}
              <div className="pt-4 border-t border-white/5 flex gap-2">
                <a href="https://linkedin.com/in/prabeen-kumar-panda-676410198" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                  <Linkedin size={16} />
                </a>
                <a href="https://github.com/prabeen10" aria-label="GitHub"
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                  <Github size={16} />
                </a>
                <a href="mailto:prabeenkumar3105@gmail.com" aria-label="Email"
                  className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors">
                  <Mail size={16} />
                </a>
              </div>
            </div>

            <div className="glass-card p-5 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <p className="text-sm"><span className="font-semibold">Available</span> <span className="text-muted-foreground">for freelance & full-time roles</span></p>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-3 glass-card p-6 md:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field icon={User} label="Your Name" name="name" value={form.name} onChange={handleChange} error={errors.name} placeholder="John Doe" />
              <Field icon={Mail} label="Email" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} placeholder="you@example.com" />
            </div>
            <Field icon={MessageSquare} label="Subject" name="subject" value={form.subject} onChange={handleChange} error={errors.subject} placeholder="Project enquiry" />

            <div className="space-y-1.5">
              <label className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-widest">Message</label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project, timeline, and goals..."
                className="w-full bg-background/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all resize-none"
              />
              {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
              <p className="text-[10px] text-muted-foreground text-right">{form.message.length}/1000</p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-full inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-medium glow-hover hover:gap-3 transition-all duration-300 disabled:opacity-60"
            >
              {loading ? (
                <><Loader2 size={18} className="animate-spin" /> Sending...</>
              ) : sent ? (
                <><CheckCircle2 size={18} /> Sent!</>
              ) : (
                <>Connect <Send size={16} /></>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

const Field = ({ icon: Icon, label, name, value, onChange, error, placeholder, type = "text" }: any) => (
  <div className="space-y-1.5">
    <label className="text-xs font-heading font-semibold text-muted-foreground uppercase tracking-widest">{label}</label>
    <div className="relative">
      <Icon size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-background/40 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-all"
      />
    </div>
    {error && <p className="text-xs text-destructive">{error}</p>}
  </div>
);

export default ContactSection;
