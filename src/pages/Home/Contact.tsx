import Button from "src/components/common/Button";
import { clsx } from "clsx";
import { contactInfos, matchFromGradient, matchToGradient } from "src/constant";
import Email from "src/assets/svgs/email.svg?react";
import LinkedIn from "src/assets/svgs/linkedIn.svg?react";
import Upwork from "src/assets/svgs/upwork.svg?react";
import Github from "src/assets/svgs/github.svg?react";
import { ReactNode } from "react";

function Contact() {
  const matchIcon: { [key: string]: ReactNode } = {
    email: <Email />,
    linkedIn: <LinkedIn />,
    upwork: <Upwork />,
    github: <Github />,
  };
  return (
    <div className="flex justify-between gap-15">
      {contactInfos.map((info) => {
        return (
          <Button
            onClick={() => window.open(info.link)}
            className={clsx(
              "rounded-sm bg-gradient-to-r p-2",
              matchFromGradient[info.id],
              matchToGradient[info.id]
            )}
          >
            <span className="bg-darkBg hover:bg-[#1A1A1A] transition-all rounded-sm p-10 w-180 flex align-center justify-center">
              <span className="mr-5">{matchIcon[info.id]}</span>{" "}
              <span>{info.name}</span>
            </span>
          </Button>
        );
      })}
    </div>
  );
}

export default Contact;
