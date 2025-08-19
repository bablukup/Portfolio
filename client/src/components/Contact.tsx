import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useEmailJS } from "../hooks/useEmailJS";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import portfolioConfig from "../../../config/portfolio.json";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function Contact() {
  const { contact, socialLinks } = portfolioConfig;
  const { sendEmail, isSubmitting } = useEmailJS();
  const animationRef = useScrollAnimation();

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = await sendEmail(formData);
    if (result.success) {
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8" data-testid="contact-section">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="contact-heading"
          >
            Get In Touch
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. 
            Feel free to reach out!
          </p>
        </div>

        <div ref={animationRef} className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-700 rounded-xl p-8 shadow-lg" data-testid="contact-form-container">
            <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6">
              Send me a message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div>
                <Label htmlFor="name" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                  Full Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full"
                  data-testid="input-name"
                />
              </div>

              <div>
                <Label htmlFor="email" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                  Email Address
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  className="w-full"
                  data-testid="input-email"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                  Subject
                </Label>
                <Input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full"
                  data-testid="input-subject"
                />
              </div>

              <div>
                <Label htmlFor="message" className="block text-sm font-medium text-slate-600 dark:text-slate-300 mb-2">
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message here..."
                  className="w-full resize-none"
                  data-testid="input-message"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-blue-600 disabled:bg-slate-400 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:transform-none disabled:cursor-not-allowed"
                data-testid="button-send-message"
              >
                <span className="inline-flex items-center">
                  <i className={`fas ${isSubmitting ? 'fa-spinner fa-spin' : 'fa-paper-plane'} mr-2`}></i>
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </span>
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-lg" data-testid="contact-info">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center space-x-3 text-slate-600 dark:text-slate-300 hover:text-primary transition-colors"
                  data-testid="contact-email"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <i className="fas fa-envelope text-primary"></i>
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm">{contact.email}</p>
                  </div>
                </a>

                <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-300" data-testid="contact-location">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <i className="fas fa-map-marker-alt text-accent"></i>
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm">{contact.location}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-300" data-testid="contact-response-time">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center">
                    <i className="fas fa-clock text-orange-500"></i>
                  </div>
                  <div>
                    <p className="font-medium">Response Time</p>
                    <p className="text-sm">{contact.responseTime}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white dark:bg-slate-700 rounded-xl p-6 shadow-lg" data-testid="social-links">
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-6">
                Connect With Me
              </h3>

              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 ${link.color} text-white rounded-full flex items-center justify-center transition-all duration-300`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    data-testid={`social-link-${link.name.toLowerCase()}`}
                  >
                    <i className={link.icon}></i>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
