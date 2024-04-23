import clsx from "clsx";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const Wrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}) => {
  return <span className={clsx("word-wrapper", className)}>{children}</span>;
};

const tagStyleMap: { [key: string]: string } = {
  paragraph: "dark:text-white",
  heading1: "",
};

const AnimatedCharacters = (props: { type: string; text: string }) => {
  if (props.type === "heading1") return;
  const item = {
    hidden: {
      y: "200%",
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 },
    },
    visible: {
      y: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 },
    },
  };

  const splitWords = props.text.split(" ");

  const words: string[][] = [];

  for (const [, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  words.map((word) => {
    return word.push("\u00A0");
  });

  return (
    <p>
      {words.map((_, index) => {
        return (
          <Wrapper key={index} className={tagStyleMap[props.type]}>
            {words[index].flat().map((element, index) => {
              return (
                <span
                  style={{
                    overflow: "hidden",
                    display: "inline-block",
                  }}
                  key={index}
                >
                  <motion.span
                    style={{ display: "inline-block" }}
                    variants={item}
                  >
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
    </p>
  );
};

export default AnimatedCharacters;
