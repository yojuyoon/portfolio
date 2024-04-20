import { RefObject } from "react";
import Link from "src/assets/svgs/link.svg?react";

const Card = () => {
  return (
    <div>
      <div className="bg-slate-300 min-w-200 min-h-200 xl:min-w-400 xl:min-h-300" />
      <div className="flex justify-between pt-20 pb-10">
        <h5>Project Name</h5>
        <span>
          <Link />
        </span>
      </div>
      <span className="text-lightGray font-thin">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat
      </span>
      <div className="text-focusText pt-20">
        React - Bootstrap - Styled Components
      </div>
    </div>
  );
};

function Project({ projectRef }: { projectRef: RefObject<HTMLDivElement> }) {
  return (
    <div ref={projectRef}>
      <div className="mt-40 pb-60 border-b border-[#3c3b3bbf]">
        FEATURE PROJECTS
      </div>
      <div className="flex gap-30">
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default Project;
