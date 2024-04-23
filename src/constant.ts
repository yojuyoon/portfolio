export const companies: { [key: string]: string | string[] }[] = [
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
  email: "border-2 border-[#542481]",
  linkedIn: "border-2 border-[#432871]",
  upwork: "border-2 border-[#276f82]",
  github: "border-2 border-[#6b2a42]",
};

export const matchToGradient: { [key: string]: string } = {
  email: "hover:border-[#9845E8] transition-all duration-1000",
  linkedIn: "hover:border-[#9358F7] transition-all duration-[900ms]",
  upwork: "hover:border-[#33D2FF] transition-all duration-[800ms]",
  github: "hover:border-[#DD5789] transition-all duration-700",
};

export const resume =
  "https://docs.google.com/document/d/10TqpTGE6u5SXv7Z1Go5JHD2_uPqQ-dLx/edit?usp=sharing&ouid=112610464733004498804&rtpof=true&sd=true";

export const projectList: { [key: string]: string }[] = [
  {
    name: "KnockKnock",
    description:
      "The project is a platform for organizing meetups and bringing diverse people together with common interests.",
    techStack: "TRPC, React, Next.js, Recoil, Tailwind",
    link: "https://github.com/kim-taewoo/knock-knock",
    img: "/src/assets/images/knockknock.png",
  },
  {
    name: "WeChicken",
    description:
      "This service is designed to help students in the bootcamp build a blog community, archive their blogs, and promote learning through blog post challenges.",
    techStack: "React, Next.js, React Query, RTK, Emotion.js",
    link: "https://github.com/wechicken/wechicken-frontend-2",
    img: "/src/assets/images/wechicken.jpeg",
  },
  {
    name: "rabbit-turtle",
    description:
      "This project is a second-hand marketplace-based live chat and location tracking service that eliminates the anxiety of no-shows by letting you know where the other party is in real-time.",
    techStack:
      "React, TypeScript, Apollo GraphQL, Tailwind, Styled-Component, ES6+",
    link: "https://github.com/rabbit-turtle/frontend-next",
    img: "/src/assets/images/rabbitturtle.png",
  },
  {
    name: "DataWeSA",
    description:
      "This project is a clone project that visualizes charts, maps, and collects and analyzes various data from the U.S., including coronavirus data.",
    techStack: "React, Redux, Highcharts, Styled-Component, ES6+",
    video: "https://youtu.be/EdORsq1cI6s?si=Ui7bxGadJ6Ab_O3z",
    link: "https://github.com/yojuyoon/10-dataWeSA-frontend",
    img: "/src/assets/images/datawesa.png",
  },
];
