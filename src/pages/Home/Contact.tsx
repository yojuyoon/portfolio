import Button from "src/components/common/Button";
import { clsx } from "clsx";
import { contactInfos, matchFromGradient, matchToGradient } from "src/constant";
import Email from "src/assets/svgs/email.svg?react";
import LinkedIn from "src/assets/svgs/linkedIn.svg?react";
import Upwork from "src/assets/svgs/upwork.svg?react";
import Github from "src/assets/svgs/github.svg?react";
import Arrow from "src/assets/svgs/arrow.svg?react";
import { ReactNode } from "react";

function Contact({
  isOpenInfos,
  setOpenInfos,
}: {
  isOpenInfos: boolean;
  setOpenInfos: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const matchIcon: { [key: string]: ReactNode } = {
    email: <Email />,
    linkedIn: <LinkedIn />,
    github: <Github />,
    upwork: <Upwork />,
  };

  return (
    <div
      className={clsx(
        "flex justify-between items-center gap-15 absolute top-25 transition-all duration-300",
        isOpenInfos ? "opacity-100" : "opacity-0"
      )}
    >
      {contactInfos.map((info) => {
        return (
          <Button
            key={info.id}
            onClick={() => {
              if (!isOpenInfos) return;
              window.open(info.link);
            }}
            className={clsx(
              "rounded-sm bg-gradient-to-r p-2 transition-all",
              matchFromGradient[info.id],
              matchToGradient[info.id],
              isOpenInfos ? "translate-x-0" : "translate-x-[-100px]"
            )}
          >
            <span className="transition-all rounded-sm p-10 w-180 flex items-center justify-center">
              <span className="mr-5">{matchIcon[info.id]}</span>
              <span>{info.name}</span>
            </span>
          </Button>
        );
      })}
      <Button onClick={() => setOpenInfos(false)}>
        <Arrow className="group-hover:translate-x-[-10px] ease-in-out duration-200 ml-30 rotate-180" />
      </Button>
    </div>
  );
}

export default Contact;
