"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2Icon,
  ServerIcon,
  LayoutDashboardIcon,
  PenToolIcon,
} from "lucide-react";

interface SkillsProps {
  skills: string[];
}

const SKILL_PROFICIENCY: Record<string, number> = {
  Java: 95,
  "C++": 90,
  JavaScript: 85,
  TypeScript: 80,
  Html: 90,
  "Tailwind Css": 85,
  React: 80,
  "Node.js/Next.js": 75,
  Docker: 70,
  Git: 85,
  Jira: 80,
  "Java Spring Boot": 80,
  Python: 90,
};

const SKILL_CATEGORIES = {
  Languages: ["C", "C++", "JavaScript", "TypeScript", "Python", "Java"],
  Frontend: ["Html", "Tailwind Css", "React", "Redux"],
  Backend: ["Node.js/Next.js", "Docker", "Java Spring Boot"],
  "DevOps & Tools": ["Git", "Docker", "Azure"],
};

const SkillsSection: React.FC<SkillsProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    { id: "All", label: "All Skills", icon: <Code2Icon className="w-5 h-5" /> },
    {
      id: "Languages",
      label: "Languages",
      icon: <Code2Icon className="w-5 h-5" />,
    },
    {
      id: "Frontend",
      label: "Frontend",
      icon: <LayoutDashboardIcon className="w-5 h-5" />,
    },
    {
      id: "Backend",
      label: "Backend",
      icon: <ServerIcon className="w-5 h-5" />,
    },
    {
      id: "DevOps & Tools",
      label: "DevOps & Tools",
      icon: <PenToolIcon className="w-5 h-5" />,
    },
  ];

  const filteredSkills =
    activeCategory === "All"
      ? Object.values(SKILL_CATEGORIES).flat()
      : SKILL_CATEGORIES[activeCategory as keyof typeof SKILL_CATEGORIES] || [];

  const getDeviconClass = (skill: string): string => {
    const skillLower = skill
      .toLowerCase()
      .replace(/\./g, "")
      .replace(/\s/g, "");
    const skillMap: Record<string, string> = {
      c: "c",
      "c++": "cplusplus",
      html: "html5",
      "tailwind css": "tailwindcss",
      javascript: "javascript",
      typescript: "typescript",
      react: "react",
      redux: "redux",
      "nodejs/nextjs": "nextjs",
      jira: "jira",
      docker: "docker",
      git: "git",
      "java spring boot":
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPrtk96ZazaX0bIVb7LB_uNId1xAVTRDj3O5sgDMjDj3AS1O6tok-THBQ8fF5toWySnTw&usqp=CAU",
    };
    return skillMap[skillLower] || skillLower;
  };

  return (
    <div className="py-20 px-4 sm:px-6 md:px-12 overflow-hidden" id="skills">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A curated showcase of technologies I’ve worked with through various
            projects, both personal and professional.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              className={`px-5 py-2.5 rounded-xl flex items-center gap-2 text-sm font-medium transition-all duration-300 border ${
                {
                  true: "bg-primary text-white border-primary shadow",
                  false:
                    "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800",
                }[String(activeCategory === cat.id)]
              }`}
              onClick={() => setActiveCategory(cat.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.icon}
              {cat.label}
            </motion.button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
        >
          {filteredSkills.map((skill, i) => {
            const proficiency = SKILL_PROFICIENCY[skill] || 75;
            const iconClass = getDeviconClass(skill);

            return (
              <motion.div
                key={skill + i}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow hover:shadow-lg transition duration-300"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl text-primary">
                    <i className={`devicon-${iconClass}-plain colored`} />
                  </div>
                  <h4 className="text-lg font-semibold">{skill}</h4>
                </div>
                <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
                  <motion.div
                    className="absolute h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${proficiency}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                </div>
                <div className="flex justify-between text-xs mt-2 text-gray-500 dark:text-gray-400">
                  <span>Proficiency</span>
                  <span>{proficiency}%</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="mt-16 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Additional Skills & Methodologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Linux",
              "Kubernetes",
              "Project Management",
              "Problem Solving",
              "Agile Methodology",
              "Scrum",
              "Team Collaboration",
              "CI/CD",
              "Code Review",
              "Test-Driven Development",
              "RESTful APIs",
              "System Design",
              "Technical Documentation",
            ].map((item, idx) => (
              <motion.span
                key={idx}
                className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-200"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#3b82f6",
                  color: "#ffffff",
                }}
              >
                {item}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsSection;
