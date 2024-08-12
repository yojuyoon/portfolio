export const companies: { [key: string]: string | string[] }[] = [
  {
    name: "Evaheld",
    position: "Frontend Developer",
    location: "Sydney, AU",
    period: "May 2024 - Present",
    description:
      "Serving as the Dev Team Lead during my internship, I have been responsible for overall feature implementation and documentation, while applying necessary resources to support the development team.",
    content: [
      "Built a career website using React.js, focusing on writing and maintaining clean code from start to finish",
      "Managed the entire project lifecycle, from initial setup to development and deployment",
      "Developed the architecture for web products and automated CI/CD processes, leading to a 30% increase in development efficiency",
      "Optimized server infrastructure configurations, resulting in a 25% improvement in overall development performance.",
      "Enhanced UI/UX by organizing and simplifying simulator data output and editing components in the social casino admin interface",
    ],
  },
  {
    name: "NHN",
    position: "Frontend Developer",
    location: "Seoul, KR",
    period: "July 2022 - Jan 2024",
    description:
      "Led the development as an FE team lead, refining leadership skills while effectively managing the workload for social casino admin interfaces and various web product pages at NHN.",
    content: [
      "Built a career website using React.js, focusing on writing and maintaining clean code from start to finish",
      "Managed the entire project lifecycle, from initial setup to development and deployment",
      "Developed the architecture for web products and automated CI/CD processes, leading to a 30% increase in development efficiency",
      "Optimized server infrastructure configurations, resulting in a 25% improvement in overall development performance.",
      "Enhanced UI/UX by organizing and simplifying simulator data output and editing components in the social casino admin interface",
    ],
  },
  {
    name: "Recore",
    position: "Frontend Developer",
    location: "Seoul, KR",
    description:
      "I developed Reware, a service for users to easily view and identify warehouses nationwide. Simultaneously, I designed and implemented a CRM tool to improve the efficiency of warehouse inquiries for the sales team.",
    period: "May 2021 - June 2022",
    content: [
      "Built a career website using React.js, focusing on writing and maintaining clean code from start to finish",
      "Managed the entire project lifecycle, from initial setup to development and deployment",
      "Developed the architecture for web products and automated CI/CD processes, leading to a 30% increase in development efficiency",
      "Optimized server infrastructure configurations, resulting in a 25% improvement in overall development performance.",
      "Enhanced UI/UX by organizing and simplifying simulator data output and editing components in the social casino admin interface",
    ],
  },
  {
    name: "Wecode",
    position: "Frontend Developer",
    location: "Seoul, KR",
    description:
      "I worked as a Frontend Mentor & Developer at WeCode, a coding bootcamp.",
    period: "September 2020 - March 2021",
    content: [
      "Built a career website using React.js, focusing on writing and maintaining clean code from start to finish",
      "Managed the entire project lifecycle, from initial setup to development and deployment",
      "Developed the architecture for web products and automated CI/CD processes, leading to a 30% increase in development efficiency",
      "Optimized server infrastructure configurations, resulting in a 25% improvement in overall development performance.",
      "Enhanced UI/UX by organizing and simplifying simulator data output and editing components in the social casino admin interface",
    ],
  },
];

export const contactInfos = [
  {
    id: "email",
    name: "Send a email",
    link: "mailto:hannahyoon1121@gmail.com",
  },
  {
    id: "linkedIn",
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/hannah-jiyoung-yoon/",
  },
  {
    id: "github",
    name: "Github",
    link: "https://github.com/yojuyoon",
  },
  {
    id: "upwork",
    name: "Upwork",
    link: "https://www.upwork.com/freelancers/~015aa7da06c963dff8",
  },
];

export const matchFromGradient: { [key: string]: string } = {
  email: "border-2 border-[#c894fc] dark:border-[#542481]",
  linkedIn: "border-2 border-[#a97af9] dark:border-[#432871]",
  upwork: "border-2 border-[#64dbfc] dark:border-[#276f82]",
  github: "border-2 border-[#f473a2] dark:border-[#6b2a42]",
};

export const matchToGradient: { [key: string]: string } = {
  email: "hover:border-[#9845E8] transition-all duration-[1000ms]",
  linkedIn: "hover:border-[#9358F7] transition-all duration-[900ms]",
  github: "hover:border-[#DD5789] transition-all duration-[800ms]",
  upwork: "hover:border-[#33D2FF] transition-all duration-[700ms]",
};

export const resume =
  "https://docs.google.com/document/d/10TqpTGE6u5SXv7Z1Go5JHD2_uPqQ-dLx/edit?usp=sharing&ouid=112610464733004498804&rtpof=true&sd=true";

export const projectList: { [key: string]: string }[] = [
  {
    name: "DailyPalette",
    description:
      "This project is a personal full-stack project for a daily journal website, and I'm still working on it.",
    techStack:
      "Vite, React, TypeScript, Tailwind, Nest.js, PostgreSQL, TypeORM, Docker",
    link: "https://github.com/yojuyoon/dailyPalette_client",
    img: "dailyPalette",
  },
  {
    name: "Portfolio",
    description:
      "The project is for a portfolio website, and I'll be adding blog functionality in the future.",
    techStack: "Vite, React, TypeScript, Tailwind",
    link: "https://github.com/yojuyoon/portfolio",
    img: "hannahyoon",
  },
  {
    name: "KnockKnock",
    description:
      "The project is a platform for organizing meetups and bringing diverse people together with common interests.",
    techStack: "TRPC, React, TypeScript, Next.js, Recoil, Tailwind",
    link: "https://github.com/kim-taewoo/knock-knock",
    img: "knockKnock",
  },
  {
    name: "WeChicken",
    description:
      "This service is designed to help students in the bootcamp build a blog community, archive their blogs, and promote learning through blog post challenges.",
    techStack: "React, TypeScript, Next.js, React Query, RTK, Emotion.js",
    link: "https://github.com/wechicken/wechicken-frontend-2",
    img: "wechicken",
  },
  {
    name: "rabbit-turtle",
    description:
      "This project is a second-hand marketplace-based live chat and location tracking service that eliminates the anxiety of no-shows by letting you know where the other party is in real-time.",
    techStack:
      "React, TypeScript, Apollo GraphQL, Tailwind, Styled-Component, ES6+",
    link: "https://github.com/rabbit-turtle/frontend-next",
    img: "rabbitturtle",
  },
];

export const mediumArticle =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@hannahyoon1121";

export const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

export const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 90vw 40px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
