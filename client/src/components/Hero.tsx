import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import portfolioConfig from "../../../config/portfolio.json";
import { blob } from "stream/consumers";

export default function Hero() {
  const { personal } = portfolioConfig;

  const handleDownloadResume = async () => {
    // Create a link element and trigger download
    const response = await fetch("/BABLU-KUMAR-Resume.pdf");
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.download = "BABLU-KUMAR-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="hero-gradient pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            data-testid="hero-content"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Hi, I'm <span className="text-accent">{personal.name}</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-200 mb-4">
              {personal.title}
            </p>
            <p className="text-lg text-slate-300 mb-8 max-w-lg mx-auto lg:mx-0">
              {personal.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={handleDownloadResume}
                className="bg-primary hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                data-testid="button-download-resume"
              >
                <i className="fas fa-download mr-2"></i>
                Download Resume
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-slate-800 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                data-testid="button-contact-me"
              >
                Contact Me
              </Button>
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            data-testid="hero-image"
          >
            <div className="animate-float">
              <img
                src="https://i.ibb.co/p67KS3mS/IMG-20250403-202849-1.jpg"
                alt="Bablu Kumar - Full Stack Developer"
                className="w-80 h-80 rounded-full object-cover shadow-2xl border-4 border-white/20"
                data-testid="profile-image"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
