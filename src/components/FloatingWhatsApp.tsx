import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => (
  <a
    href="https://wa.me/254110437317?text=Hello%20Davi%20Tech,%20I%20am%20interested%20in%20your%20services"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent flex items-center justify-center shadow-[var(--shadow-gold)] hover:scale-110 transition-transform animate-float"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="text-accent-foreground" size={26} />
  </a>
);

export default FloatingWhatsApp;
