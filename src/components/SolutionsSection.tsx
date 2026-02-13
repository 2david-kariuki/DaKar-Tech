import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Church, Hospital, ShoppingCart, Globe, Briefcase } from "lucide-react";

const solutions = [
  {
    icon: GraduationCap,
    title: "School Management Systems",
    items: ["Student records", "Fee management", "Exams & grading", "Staff management", "Reporting dashboards"],
  },
  {
    icon: Church,
    title: "Church Management Systems",
    items: ["Member database", "Donation tracking", "Event scheduling", "Financial reports"],
  },
  {
    icon: Hospital,
    title: "Hospital / Clinic Systems",
    items: ["Patient records", "Appointment scheduling", "Billing & medical data management"],
  },
  {
    icon: ShoppingCart,
    title: "POS Systems",
    items: ["Retail POS", "Restaurant POS", "Inventory & sales reporting", "Payment integration"],
  },
  {
    icon: Globe,
    title: "Business Website Development",
    items: ["Corporate websites", "E-commerce platforms", "Booking systems", "Custom web applications"],
  },
  {
    icon: Briefcase,
    title: "Professional Portfolio Websites",
    items: ["Personal branding design", "Service showcase", "Contact/booking integration", "SEO optimization"],
  },
];

const SolutionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="solutions" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest mb-3 block">Solutions</span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
            What We Build
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-shadow group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <s.icon className="text-accent" size={24} />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-3">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
