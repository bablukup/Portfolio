import { Button } from "@/components/ui/button";
import portfolioConfig from "../../../config/portfolio.json";

export default function Footer() {
  const { personal, socialLinks } = portfolioConfig;

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToContact = () => scrollToSection("#contact");

  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-slate-300 py-12 px-4 sm:px-6 lg:px-8" data-testid="footer">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div data-testid="footer-brand">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-primary">BK</span>
              <span className="ml-2 text-lg">{personal.name}</span>
            </div>
            <p className="text-slate-400 mb-4">
              Full-Stack Developer passionate about creating impactful web applications and contributing to open source.
            </p>
            <div className="flex space-x-4">
              {socialLinks.slice(0, 3).map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-primary transition-colors"
                  data-testid={`footer-social-${link.name.toLowerCase()}`}
                >
                  <i className={`${link.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          <div data-testid="footer-links">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-slate-400 hover:text-primary transition-colors"
                    data-testid={`footer-link-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div data-testid="footer-contact">
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <p className="text-slate-400 mb-2">
              <i className="fas fa-envelope mr-2"></i>
              {personal.email}
            </p>
            <p className="text-slate-400 mb-4">
              <i className="fas fa-map-marker-alt mr-2"></i>
              {personal.location}
            </p>
            <Button
              onClick={scrollToContact}
              className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
              data-testid="footer-contact-button"
            >
              Contact Me
            </Button>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center" data-testid="footer-copyright">
          <p className="text-slate-400">
            © 2025 {personal.name}. Built with React & Tailwind CSS. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
