import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Solutions", href: "#solutions" },
  { label: "Collaboration", href: "#collaboration" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const scrollToHash = (href: string) => {
    const el = document.querySelector(href);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
    // keep URL in sync (optional)
    window.history.replaceState(null, "", href);
  };

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
    closeMobile: boolean
  ) => {
    e.preventDefault();

    // Close mobile menu first (if needed)
    if (closeMobile) setOpen(false);

    // Defer scroll until after state update/unmount starts
    requestAnimationFrame(() => scrollToHash(href));
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a
          href="#"
          className="font-heading text-xl font-bold text-primary-foreground tracking-tight"
          onClick={(e) => {
            e.preventDefault();
            requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
          }}
        >
          Davi<span className="text-accent">Tech</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => handleNavClick(e, l.href, false)}
              className="text-sm font-medium text-primary-foreground/70 hover:text-accent transition-colors"
            >
              {l.label}
            </a>
          ))}

          <a
            href="https://wa.me/254110437317?text=Hello%20Davi%20Tech,%20I%20am%20interested%20in%20your%20services"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold bg-accent text-accent-foreground px-5 py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-primary-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-primary overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => handleNavClick(e, l.href, true)}
                  className="text-primary-foreground/80 hover:text-accent transition-colors font-medium"
                >
                  {l.label}
                </a>
              ))}

              <a
                href="https://wa.me/254110437317?text=Hello%20Davi%20Tech,%20I%20am%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-accent-foreground px-5 py-2 rounded-md text-center font-semibold"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
