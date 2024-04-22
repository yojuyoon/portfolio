import clsx from "clsx";
import { Fragment, useState } from "react";
import { companies } from "../../constant";
import Button from "../../components/common/Button";
import { AnimatePresence, motion } from "framer-motion";

function Experience() {
  const [index, setIndex] = useState(0);

  return (
    <div className="mt-40 pb-60 border-b dark:border-[#3c3b3bbf]">
      EXPERIENCE
      <div className="flex align-center gap-30 mt-40">
        {companies.map((company: { [key: string]: string | string[] }, idx) => (
          <Fragment key={company.name as string}>
            <Button
              key={company.name as string}
              onClick={() => setIndex(idx)}
              className={clsx("py-6 px-20 rounded-[4px] relative")}
            >
              <>
                <div
                  className={clsx(
                    "z-10 w-70",
                    idx === index ? "opacity-100" : "opacity-70 "
                  )}
                >
                  {company.name as string}
                </div>
                {idx === index ? (
                  <motion.div
                    layout
                    className="absolute top-[-1.5px] left-0 dark:bg-lightBlack bg-extraLightGray w-110 h-40 rounded-[4px] z-[-1] mix-blend-screen"
                    layoutId="underline"
                  />
                ) : null}
              </>
            </Button>
          </Fragment>
        ))}
      </div>
      <div className="mt-40 min-h-120">
        <AnimatePresence mode="wait">
          <motion.div
            key={index ? (companies[index].name as string) : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between mb-10">
              <span>{companies[index].position}</span>
              <span className="font-thin">{companies[index].period}</span>
            </div>
            <span className="text-caption">
              {companies[index].name} / {companies[index].location}
            </span>
            <p className="mt-10 font-thin">{companies[index].description}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default Experience;
