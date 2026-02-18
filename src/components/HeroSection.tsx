import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import davidImg from "@/assets/davi-tech.png";

const HeroSection = () => (
  <section
    className="relative min-h-screen flex items-center overflow-hidden"
    style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
  >
    {/* overlay */}
    <div className="absolute inset-0 bg-primary/80" />

    <div className="container mx-auto relative z-10 px-4 py-32 grid md:grid-cols-2 gap-12 items-center">
      {/* Text */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6">
          Smart Digital Systems & Professional Websites <span className="text-accent">Built for Growth</span>
        </h1>
        <p className="text-lg text-primary-foreground/70 mb-8 max-w-lg leading-relaxed">
          DaKar-Tech delivers school systems, church management platforms, hospital solutions, POS systems, professional
          business websites, and custom portfolios for professionals.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="https://wa.me/254110437317?text=Hello%20Davi%20Tech,%20I%20am%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity shadow-[var(--shadow-gold)]"
          >
            <MessageCircle size={18} /> Request Consultation
          </a>
          <a
            href="mailto:david48kariuki@gmail.com?subject=Inquiry%20About%20Your%20Services"
            className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-md font-semibold hover:bg-primary-foreground/10 transition-colors"
          >
            <Mail size={18} /> Contact Now
          </a>
        </div>
      </motion.div>

      {/* Image (NOW VISIBLE ON MOBILE) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="flex justify-center"
      >
        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md">
          <div className="absolute -inset-4 rounded-2xl bg-accent/20 blur-2xl" />
          <img
            src={davidImg}
            alt="David Kariuki — Founder of DaKar-Tech"
            className="relative w-full rounded-2xl object-cover shadow-[var(--shadow-elegant)]"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
