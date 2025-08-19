import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import portfolioConfig from "../../../config/portfolio.json";

export default function Projects() {
  const { projects } = portfolioConfig;
  const animationRef = useScrollAnimation();

  const getTechColor = (tech: string): string => {
    const colorMap: { [key: string]: string } = {
      React: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
      "Node.js": "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200",
      MongoDB: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200",
      "Socket.io": "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200",
      Express: "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200",
      "Vue.js": "bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200",
      "Chart.js": "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200",
      "REST API": "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200",
    };
    return colorMap[tech] || "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200";
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" data-testid="projects-section">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="projects-heading"
          >
            Featured Projects
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div ref={animationRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card bg-white dark:bg-slate-700 rounded-xl overflow-hidden shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              data-testid={`project-card-${project.id}`}
            >
              <img
                src={project.image}
                alt={`${project.name} Project`}
                className="w-full h-48 object-cover"
                data-testid={`project-image-${project.id}`}
              />

              <div className="p-6">
                <h3 
                  className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2"
                  data-testid={`project-name-${project.id}`}
                >
                  {project.name}
                </h3>
                <p 
                  className="text-slate-600 dark:text-slate-300 mb-4"
                  data-testid={`project-description-${project.id}`}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      className={`px-2 py-1 text-xs rounded ${getTechColor(tech)}`}
                      data-testid={`project-tech-${project.id}-${tech.toLowerCase().replace('.', '').replace(' ', '-')}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button
                    variant="link"
                    className="flex items-center text-primary hover:text-blue-600 transition-colors p-0"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                    data-testid={`project-live-demo-${project.id}`}
                  >
                    <i className="fas fa-external-link-alt mr-1"></i>Live Demo
                  </Button>
                  <Button
                    variant="link"
                    className="flex items-center text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-slate-100 transition-colors p-0"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                    data-testid={`project-github-${project.id}`}
                  >
                    <i className="fab fa-github mr-1"></i>GitHub
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            onClick={() => window.open("https://github.com/bablukumar", '_blank')}
            data-testid="view-all-projects-button"
          >
            <i className="fab fa-github mr-2"></i>
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
