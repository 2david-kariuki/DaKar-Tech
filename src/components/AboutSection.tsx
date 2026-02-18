import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 block">About Us</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Technology Solutions You Can Trust
          </h2>
          <p className="text-muted-foreground text-lg leadin  g-relaxed mb-4">
           DaKar-Tech is an independent technology solutions provider focused on designing and developing scalable digital platforms for institutions, businesses, and professionals.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-4">
            With extensive hands-on experience in full-stack development, Davi Tech builds secure, reliable, and performance-driven systems tailored to operational needs.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Solutions are designed for long-term sustainability, usability, and growth.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
