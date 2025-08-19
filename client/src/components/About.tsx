import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import portfolioConfig from "../../../config/portfolio.json";

export default function About() {
  const { about } = portfolioConfig;
  const animationRef = useScrollAnimation();

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 pl-16" data-testid="about-section">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="about-heading"
          >
            About Me
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="about-image"
            className="card-enhanced rounded-xl p-6"
          >
            <img
              src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400"
              alt="Modern developer workspace"
              className="rounded-lg w-full h-auto"
            />
          </motion.div>

          <div ref={animationRef} className="card-enhanced rounded-xl p-8 space-y-6" data-testid="about-content">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {about.intro}
            </p>

            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {about.passion}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2" data-testid="education-info">
                <i className="fas fa-graduation-cap text-primary"></i>
                <span>{about.education}</span>
              </div>
              <div className="flex items-center space-x-2" data-testid="cgpa-info">
                <i className="fas fa-star text-accent"></i>
                <span>{about.cgpa}</span>
              </div>
              <div className="flex items-center space-x-2" data-testid="location-info">
                <i className="fas fa-map-marker-alt text-primary"></i>
                <span>{portfolioConfig.personal.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
