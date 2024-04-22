import { RefObject } from "react";
import Github from "src/assets/svgs/github.svg?react";
import Button from "src/components/common/Button";

const Card = ({ info }: { info: { [key: string]: string } }) => {
  return (
    <div>
      <div className="max-h-300 overflow-hidden rounded-[4px]">
        <img
          src={info.img}
          className="min-w-200 min-h-200 xl:min-w-400 xl:min-h-300 object-cover"
        />
      </div>
      <div className="flex justify-between pt-20 pb-10">
        <h5>{info.name}</h5>
        <Button onClick={() => window.open(info.link)}>
          <Github />
        </Button>
      </div>
      <span className="text-lightGray font-thin">{info.description}</span>
      <div className="text-focusText pt-20">{info.techStack}</div>
    </div>
  );
};

const projectList: { [key: string]: string }[] = [
  {
    name: "KnockKnock",
    description:
      "The project is a platform for organizing meetups and bringing diverse people together with common interests.",
    techStack: "TRPC - React - Next.js - Recoil - Tailwind",
    link: "https://github.com/kim-taewoo/knock-knock",
    img: "/src/assets/images/knockknock.png",
  },
  {
    name: "WeChicken",
    description:
      "This service is designed to help students in the bootcamp build a blog community, archive their blogs, and promote learning through blog post challenges.",
    techStack: "React - Next.js - React Query - RTK - Emotion.js",
    link: "https://github.com/wechicken/wechicken-frontend-2",
    img: "/src/assets/images/wechicken.jpeg",
  },
  {
    name: "DataWeSA",
    description:
      "This project is a clone project that visualizes charts, maps, and collects and analyzes various data from the U.S., including coronavirus data.",
    techStack: "React(Hooks) - Redux - Highcharts - Styled-Component - ES6+",
    video: "https://youtu.be/EdORsq1cI6s?si=Ui7bxGadJ6Ab_O3z",
    link: "https://github.com/yojuyoon/10-dataWeSA-frontend",
    img: "/src/assets/images/datawesa.png",
  },
];

function Project({ projectRef }: { projectRef: RefObject<HTMLDivElement> }) {
  return (
    <div ref={projectRef}>
      <div className="mt-40 pb-60">FEATURE PROJECTS</div>
      <div className="gap-30 grid grid-cols-2">
        {projectList.map((info) => (
          <Card info={info} key={info.name} />
        ))}
      </div>
    </div>
  );
}

export default Project;
