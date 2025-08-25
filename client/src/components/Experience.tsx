import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import portfolioConfig from "../../../config/portfolio.json";

export default function Experience() {
  const { experience, contributions, certifications } = portfolioConfig;
  const animationRef = useScrollAnimation();

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 pl-16"
      data-testid="experience-section"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="experience-heading"
          >
            Experience & Contributions
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div ref={animationRef} className="space-y-8">
          {/* Work Experience */}
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              className="card-enhanced rounded-xl p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              data-testid={`experience-item-${exp.id}`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <div className="text-slate-600 dark:text-slate-300">
                  <i className="fas fa-calendar-alt mr-1"></i>
                  {exp.period}
                </div>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Open Source Contributions */}
          {contributions.map((contribution, index) => (
            <motion.div
              key={contribution.id}
              className="card-enhanced rounded-xl p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: (experience.length + index) * 0.2,
              }}
              viewport={{ once: true }}
              data-testid={`contribution-item-${contribution.id}`}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                    <i className="fab fa-github text-accent text-xl"></i>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                    Open Source Contributor
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    <strong>{contribution.title}:</strong>{" "}
                    {contribution.description}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                    <span>
                      <i className="fas fa-code-branch mr-1"></i>
                      {contribution.stats.pr}
                    </span>
                    <span>
                      <i className="fas fa-star mr-1"></i>
                      {contribution.stats.reactions}
                    </span>
                    <span>
                      <i className="fas fa-users mr-1"></i>
                      {contribution.stats.usage}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Certifications */}
          <motion.div
            className="card-enhanced rounded-xl p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: (experience.length + contributions.length) * 0.2,
            }}
            viewport={{ once: true }}
            data-testid="certifications-section"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <i className="fas fa-certificate text-primary text-xl"></i>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                      data-testid={`certification-${index}`}
                    >
                      <span className="text-slate-600 dark:text-slate-300">
                        {cert.name}
                      </span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        {cert.year}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          {/* Education */}
          <motion.div
            className="card-enhanced rounded-xl p-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay:
                (experience.length +
                  contributions.length +
                  certifications.length) *
                0.2,
            }}
            viewport={{ once: true }}
            data-testid="education-section"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <i className="fas fa-graduation-cap text-primary text-xl"></i>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-2">
                  Education
                </h3>
                <div className="space-y-3">
                  {portfolioConfig.education.map((edu, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center"
                      data-testid={`education-${index}`}
                    >
                      <div>
                        <span className="text-slate-800 dark:text-slate-200 font-medium">
                          {edu.degree}
                        </span>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                          {edu.institution}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          {edu.year}
                        </span>
                        {edu.cgpa && (
                          <p className="text-sm text-slate-500 dark:text-slate-400">
                            {edu.cgpa}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
