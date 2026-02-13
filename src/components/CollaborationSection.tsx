import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Handshake } from "lucide-react";

const CollaborationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="collaboration" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <Handshake className="mx-auto mb-6 text-accent" size={48} />
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Technology Partnerships & Project Collaboration
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed">
            Davi Tech collaborates with organizations and development teams on ongoing and large-scale projects. Services include backend development support, system architecture design, API integration, database optimization, feature expansion, and long-term maintenance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CollaborationSection;
