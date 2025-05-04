import {
  GitHubIcon,
  LeetCodeIcon,
  LinkedInIcon,
  XIcon,
} from "../components/icons";

export const RESUME_DATA = {
  name: "Tarun Khanna",
  location: "Navi Mumbai",

  about:
    "Full-stack developer (MERN & Java Spring Boot) with a strong grasp of scalable systems, backend infrastructure, and modern web tech. Exploring applied AI/ML with a focus on research. Committed to clean design, system architecture, and delivering impactful, user-focused solutions.",
  summary:
    "As a software Developer with a background in computer systems, algorithms, and data structures, I have more than two years of experience working as Software Engineer for Reliance Jio. I am currently pursuing my interests in AI and LLMs. Coding and problem-solving through code are my passions, and I am excited to collaborate with talented programmers and expand my knowledge even more!",
  avatarUrl: "./me2.png",

  contact: {
    email: "tarkr813@gmail.com",
    tel: "+91 817848772",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/tarkr813",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tarun-khanna-419648192/",
        icon: LinkedInIcon,
      },
      {
        name: "Leetcode",
        url: "https://leetcode.com/u/tarkr813/",
        icon: LeetCodeIcon,
      },
    ],
  },
  education: [
    {
      school: "Indraprastha Institute of Information Technology",
      degree: "Bachelors of Technology.",
      start: "2019",
      end: "2023",
    },
  ],
  skills: [
    "Java",
    "C++",
    "Html",
    "Tailwind Css",
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Recoil",
    "Node.js/Next.js",
    "Java Spring Boot",
    "Docker",
    "Git",
    "Azure",
    "Agile/Scrum",
  ],

  projects: [],

  experience: [
    {
      company: "Reliance Jio",
      position: "Software Development Engineer",
      logo: "https://assets.entrepreneur.com/content/3x2/2000/1591627848-14191995-545238552267917-191570681028470982-n.png",
      location: "Navi Mumbai, Maharastra",
      startDate: "July 2023",
      endDate: "Present",
      description:
        "Working as software developer with hands-on experience in building scalable web applications using the MERN stack (MongoDB, Express.js, React, Node.js) and Java Spring Boot. I specialize in designing and developing complete systems—from frontend interfaces to backend APIs—with a strong focus on performance, clean architecture, and real-world usability.",
      skills: [
        "React",
        "TypeScript",
        "Redux",
        "Node.js",
        "Azure",
        "Agile",
        "Git",
        "CI/CD",
        "Docker",
        "Redis",
        "REST APIs",
      ],
      achievements: [
        "Implemented new SDLC  methodologies in the team",
        "Successfully delivered on client deadlines and worked as On-Call Engineer to provide support and guidance",
        "Led a team in refactoring and modernizing legacy codebases, aligning them with current architectural standards and best practices—resulting in improved maintainability, scalability, and performance.",
        "Led the charge in implementing comprehensive testing suites for in-house services, improving test coverage, catching regressions early, and fostering a culture of quality-first development.",
      ],
    },
  ],
} as const;
