"use client";

import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  CalendarIcon,
  MapPinIcon,
  CheckIcon,
} from "lucide-react";

interface Experience {
  company: string;
  position: string;
  logo?: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  skills: readonly string[];
  achievements: readonly string[];
}

interface ExperienceSectionProps {
  experience: readonly Experience[];
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experience,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const generateDefaultLogo = (companyName: string) => {
    return `https://ui-avatars.com/api/?name=${encodeURIComponent(
      companyName
    )}&background=0D8ABC&color=fff&size=128`;
  };

  return (
    <section
      className="py-20 px-4 sm:px-6 md:px-12 bg-surface-light dark:bg-surface-dark overflow-hidden"
      id="experience"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My professional journey and key accomplishments in the tech
            industry.
          </p>
        </motion.div>

        <motion.div
          className="space-y-16 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary rounded-full" />

          {experience.map((exp, index) => (
            <motion.div
              key={index}
              className={`relative flex flex-col lg:flex-row gap-6 ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
              variants={itemVariants}
            >
              <div className="lg:w-5/12 flex flex-col items-center text-center lg:text-left lg:items-start">
                <img
                  src={exp.logo || generateDefaultLogo(exp.company)}
                  alt={`${exp.company} logo`}
                  className="w-16 h-16 rounded-full shadow-md mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {exp.position}
                </h3>
                <p className="text-primary dark:text-primary-light font-medium">
                  {exp.company}
                </p>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4" />
                  <span>
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
                  <MapPinIcon className="w-4 h-4" />
                  <span>{exp.location}</span>
                </div>
              </div>

              <div className="lg:w-7/12 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl">
                <p className="text-gray-700 dark:text-gray-300 border-l-4 border-primary pl-4 italic">
                  {exp.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-2">
                    Key Achievements:
                  </h4>
                  <ul className="space-y-1 list-disc list-inside text-gray-700 dark:text-gray-300">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckIcon className="w-4 h-4 text-green-500 mt-0.5" />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            "Success is not the key to happiness. Happiness is the key to
            success. If you love what you are doing, you will be successful."
          </blockquote>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            ― Albert Schweitzer
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
