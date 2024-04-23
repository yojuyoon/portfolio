import clsx from "clsx";
import { RefObject } from "react";
import Github from "src/assets/svgs/github.svg?react";
import Button from "src/components/common/Button";
import { projectList } from "src/constant";

const Card = ({
  info,
  codeEnter,
  defaultCursor,
}: {
  info: { [key: string]: string };
  codeEnter?: () => void;
  defaultCursor?: () => void;
}) => {
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
        <Button
          onClick={() => window.open(info.link)}
          onMouseEnter={codeEnter}
          onMouseLeave={defaultCursor}
        >
          <Github />
        </Button>
      </div>
      <div className="text-lightGray font-thin min-h-75">
        {info.description}
      </div>
      <div className="text-focus pt-20">{info.techStack}</div>
    </div>
  );
};

function Project({
  isInView,
  projectRef,
  codeEnter,
  defaultCursor,
}: {
  isInView: boolean;
  projectRef: RefObject<HTMLDivElement>;
  codeEnter?: () => void;
  defaultCursor?: () => void;
}) {
  return (
    <div ref={projectRef}>
      <div className="mt-40 pb-60">FEATURE PROJECTS</div>
      <div
        className={clsx(
          "gap-30 grid md:grid-cols-2 transition-all duration-[800ms]",
          isInView
            ? "opacity-100 translate-y-0"
            : "translate-y-[200px] opacity-0"
        )}
      >
        {projectList.map((info) => (
          <Card
            info={info}
            key={info.name}
            codeEnter={codeEnter}
            defaultCursor={defaultCursor}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
