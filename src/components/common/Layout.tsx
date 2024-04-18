import { Fragment, ReactNode } from "react";
import Nav from "./Nav";
import { matchClassName, useVariants } from "src/hooks/mouseConfig";
import { motion } from "framer-motion";
import clsx from "clsx";
import Footer from "./Footer";

function Layout({
  children,
  mouseRef,
  cursorText,
  cursorVariant,
}: {
  children: ReactNode;
  mouseRef?: React.MutableRefObject<null>;
  cursorText: string;
  cursorVariant: string;
}) {
  const { cursorXSpring, cursorYSpring } = useVariants();

  return (
    <Fragment>
      <motion.div
        className={clsx(
          "rounded-full mix-blend-difference absolute top-0 left-0 z-0",
          matchClassName[cursorVariant]
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
        className="font-poppins dark:bg-darkBg dark:text-white text-darkbg"
        ref={mouseRef}
      >
        <Nav />
        <main className="xl:max-w-desktop mx-auto py-30 font-light pt-160">
          {children}
        </main>
        <Footer />
      </div>
    </Fragment>
  );
}

export default Layout;
