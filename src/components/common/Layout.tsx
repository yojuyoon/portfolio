import { Fragment, ReactNode, RefObject } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { matchClassName, useVariants } from "src/hooks/mouseConfig";
import Nav from "./Nav";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import { includes } from "lodash";

function Layout({
  children,
  mouseRef,
  projectRef,
  cursorText,
  cursorVariant,
}: {
  children: ReactNode;
  mouseRef?: React.MutableRefObject<null>;
  cursorText?: string;
  cursorVariant?: string;
  projectRef?: RefObject<HTMLDivElement>;
}) {
  const { cursorXSpring, cursorYSpring } = useVariants();
  const location = useLocation();

  const scrollingTop = () => {
    const element = projectRef;
    element?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Fragment>
      {!includes(location.pathname, "blog") && (
        <motion.div
          className={clsx(
            "w-40 h-40 rounded-full fixed top-0 left-0 z-10 hidden lg:block dark:mix-blend-difference",
            matchClassName[cursorVariant!]
          )}
          style={{
            translateX: cursorXSpring,
            translateY: cursorYSpring,
          }}
        >
          <span className="cursorText flex mx-auto text-center h-40 items-center justify-center">
            {cursorText}
          </span>
        </motion.div>
      )}

      <div
        className={clsx(
          "font-poppins bg-lightBg text-darkbg px-20 dark:bg-darkBg dark:text-white",
          "xl:px-0"
        )}
        ref={mouseRef}
      >
        <Nav scrollingTop={scrollingTop} />
        <main className="mx-auto py-30 font-light pt-120 md:pt-160 xl:max-w-desktop">
          {children}
        </main>
        <Footer />
      </div>
    </Fragment>
  );
}

export default Layout;
