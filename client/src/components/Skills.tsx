import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import portfolioConfig from "../../../config/portfolio.json";

export default function Skills() {
  const { skills } = portfolioConfig;
  const animationRef = useScrollAnimation();

  const skillCategories = [
    {
      title: "Frontend",
      icon: "fas fa-desktop",
      iconColor: "text-primary",
      hoverColor: "hover:bg-primary",
      skills: skills.frontend,
    },
    {
      title: "Backend",
      icon: "fas fa-server",
      iconColor: "text-accent",
      hoverColor: "hover:bg-accent",
      skills: skills.backend,
    },
    {
      title: "Tools & DevOps",
      icon: "fas fa-tools",
      iconColor: "text-orange-500",
      hoverColor: "hover:bg-orange-500",
      skills: skills.tools,
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-4 sm:px-6 lg:px-8 pl-16"
      data-testid="skills-section"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            data-testid="skills-heading"
          >
            Skills & Technologies
          </motion.h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div ref={animationRef} className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="card-enhanced rounded-xl p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              data-testid={`skill-category-${category.title.toLowerCase().replace(' & ', '-')}`}
            >
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200 mb-4 flex items-center">
                <i className={`${category.icon} ${category.iconColor} mr-2`}></i>
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className={`skill-glow bg-slate-50 dark:bg-slate-600 px-3 py-2 rounded-lg text-center transition-all duration-300 ${category.hoverColor} hover:text-white cursor-pointer`}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                    data-testid={`skill-${skill.name.toLowerCase().replace('.', '').replace(' ', '-')}`}
                  >
                    <i className={`${skill.icon} ${skill.color} mr-2`}></i>
                    {skill.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
