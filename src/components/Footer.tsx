const Footer = () => (
  <footer className="bg-primary text-primary-foreground py-8">
    <div className="container mx-auto px-4 text-center">
      <p className="font-heading font-bold text-lg mb-1">
       DaKar<span className="text-accent">Tech</span>
      </p>
      <p className="text-primary-foreground/50 text-sm">
        © {new Date().getFullYear()} DaKar-Tech. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
