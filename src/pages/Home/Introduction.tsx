import { useState } from "react";
import { motion } from "framer-motion";
import Arrow from "src/assets/svgs/arrow.svg?react";
import AnimatedText from "src/components/common/AnimatedText";
import Button from "src/components/common/Button";
import Contact from "./Contact";
import clsx from "clsx";

function Introduction({
  hiEnter,
  hiLeave,
}: {
  hiEnter?: () => void;
  hiLeave?: () => void;
}) {
  const [replay] = useState(true);
  const [isOpenInfos, setOpenInfos] = useState(false);

  const placeholderText = [{ type: "paragraph", text: "Hi I'm," }];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  };

  return (
    <motion.div
      className="pb-80"
      initial="hidden"
      animate={replay ? "visible" : "hidden"}
      variants={container}
    >
      <div className="container">
        {placeholderText.map((item, index) => {
          return <AnimatedText {...item} key={index} />;
        })}
      </div>
      <motion.div
        key="intro"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
      >
        <div
          className={clsx(
            "text-transparent bg-clip-text bg-gradient-to-r from-[#9845E8] from-5% via-[#33D2FF] to-[#DD5789] to-60% font-semibold text-[72px]",
            "md:text-[84px] lg:text-[96px]"
          )}
        >
          Hannah Yoon
        </div>
        <p>
          As a Front-end Developer, I find joy and fulfillment in my work. I
          excel in communicating and collaborating with team members to create a
          dynamic and effective work environment.
        </p>
      </motion.div>
      <div className="group flex align-center mt-20 cursor-pointer pt-40 relative">
        <Contact isOpenInfos={isOpenInfos} setOpenInfos={setOpenInfos} />
        <Button
          className={clsx(
            "min-h-46 flex",
            isOpenInfos ? "opacity-0" : "opacity-100"
          )}
          onMouseEnter={hiEnter}
          onMouseLeave={hiLeave}
          onClick={() => {
            if (isOpenInfos) return;
            setOpenInfos(true);
          }}
        >
          <span>Say Hi</span>
          <Arrow className="group-hover:translate-x-[10px] ease-in-out duration-200" />
        </Button>
      </div>
    </motion.div>
  );
}

export default Introduction;
