import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Settings, Shield, PenTool, Zap, Users, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: Settings, title: "Custom-Built Solutions" },
  { icon: Shield, title: "Scalable & Secure Systems" },
  { icon: PenTool, title: "Business-Focused Design" },
  { icon: Zap, title: "Professional Execution" },
  { icon: Users, title: "Collaboration-Ready" },
  { icon: HeartHandshake, title: "Long-Term Support" },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 block">Why Us</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            Why Choose DaKar-Tech
          </h2>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <r.icon className="text-accent" size={22} />
              </div>
              <span className="font-heading font-semibold text-foreground">{r.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
