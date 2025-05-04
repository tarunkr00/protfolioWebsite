"use client";

import { motion } from "framer-motion";
import { GraduationCapIcon, CalendarIcon, BookOpenIcon } from "lucide-react";

interface Education {
  school: string;
  degree: string;
  start: string;
  end: string;
}

interface EducationSectionProps {
  education: Education[];
}

const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 90,
        damping: 14,
      },
    },
  };

  return (
    <section
      className="py-16 px-4 sm:px-6 md:px-10 bg-surface-light dark:bg-surface-dark"
      id="education"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-2">Education</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            A concise timeline of my academic achievements.
          </p>
        </motion.div>

        <motion.div
          className="space-y-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-5 shadow-md hover:shadow-lg transition-all"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start sm:items-center sm:justify-between flex-col sm:flex-row">
                <div className="flex items-center gap-3 mb-4 sm:mb-0">
                  <div className="p-2 bg-primary/10 dark:bg-primary/20 rounded-full">
                    <GraduationCapIcon className="w-5 h-5 text-primary dark:text-primary-light" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                      {edu.school}
                    </h3>
                    <p className="text-sm text-primary dark:text-primary-light">
                      {edu.degree}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <CalendarIcon className="w-4 h-4" />
                  <span>
                    {edu.start} - {edu.end}
                  </span>
                </div>
              </div>

              {index === 1 && (
                <div className="mt-4 bg-primary/10 dark:bg-primary/20 p-3 rounded-md">
                  <div className="flex items-start gap-2">
                    <BookOpenIcon className="w-5 h-5 text-primary dark:text-primary-light mt-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Part of the prestigious 42 Network, known for its
                      project-based, peer-to-peer learning methodology.
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <blockquote className="text-base sm:text-lg italic text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
            "Education is the passport to the future, for tomorrow belongs to
            those who prepare for it today."
          </blockquote>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            ― Malcolm X
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
