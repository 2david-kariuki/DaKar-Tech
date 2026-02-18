import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MessageCircle, Linkedin } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:david48kariuki@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 block">Contact</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Let's Build Your Digital Future
          </h2>
        </div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
        >
          {/* Info */}
          <div className="space-y-6">
            <a href="tel:+254110437317" className="flex items-center gap-4 text-foreground hover:text-accent transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Phone className="text-accent" size={20} />
              </div>
              <span className="font-medium">0110437317</span>
            </a>
            <a href="https://wa.me/254110437317?text=Hello%20Davi%20Tech,%20I%20am%20interested%20in%20your%20services" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-accent transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <MessageCircle className="text-accent" size={20} />
              </div>
              <span className="font-medium">Chat on WhatsApp</span>
            </a>
            <a href="mailto:david48kariuki@gmail.com?subject=Inquiry%20About%20Your%20Services" className="flex items-center gap-4 text-foreground hover:text-accent transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Mail className="text-accent" size={20} />
              </div>
              <span className="font-medium">david48kariuki@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/david-kariuki-24a5a9352/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-foreground hover:text-accent transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <Linkedin className="text-accent" size={20} />
              </div>
              <span className="font-medium">LinkedIn Profile</span>
            </a>

            <div className="pt-6">
              <p className="text-muted-foreground text-sm leading-relaxed">
                DaKar-Tech delivers custom digital systems and professional web solutions for institutions, businesses, and professionals. Focused on reliability, scalability, and strategic collaboration.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent text-accent-foreground font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity shadow-[var(--shadow-gold)]"
            >
              Request a Consultation
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
