import { Fragment, ReactNode, RefObject } from "react";
import Nav from "./Nav";
import { matchClassName, useVariants } from "src/hooks/mouseConfig";
import { motion } from "framer-motion";
import clsx from "clsx";
import Footer from "./Footer";

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

  const scrollingTop = () => {
    const element = projectRef;
    element?.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Fragment>
      <motion.div
        className={clsx(
          "rounded-full mix-blend-difference fixed top-0 left-0 z-0 hidden lg:block",
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

      <div
        className={clsx(
          "font-poppins dark:bg-darkBg dark:text-white text-darkbg px-20",
          "xl:px-0"
        )}
        ref={mouseRef}
      >
        <Nav scrollingTop={scrollingTop} />
        <main className="xl:max-w-desktop mx-auto py-30 font-light pt-120 md:pt-160">
          {children}
        </main>
        <Footer />
      </div>
    </Fragment>
  );
}

export default Layout;
