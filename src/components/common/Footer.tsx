import Email from "src/assets/svgs/email.svg?react";
import LinkedIn from "src/assets/svgs/linkedIn.svg?react";
import Upwork from "src/assets/svgs/upwork.svg?react";
import Github from "src/assets/svgs/github.svg?react";
import { contactInfos } from "src/constant";
import Button from "./Button";
import { ReactNode } from "react";

function Footer() {
  const matchIcon: { [key: string]: ReactNode } = {
    email: <Email />,
    linkedIn: <LinkedIn />,
    github: <Github />,
    upwork: <Upwork />,
  };
  return (
    <div className="py-60 flex justify-between items-center font-thin xl:max-w-desktop mx-auto border-t dark:border-[#3c3b3bbf]">
      <span>Copyright © 2024 Hannah Yoon</span>
      <div className="flex items-center gap-20">
        {contactInfos.map((info) => {
          return (
            <Button
              key={info.id}
              onClick={() => {
                window.open(info.link);
              }}
              className="p-2 transition-all opacity-80 hover:opacity-100"
            >
              <span className="mr-5">{matchIcon[info.id]}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default Footer;
