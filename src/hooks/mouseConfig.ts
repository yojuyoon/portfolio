import { useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export const useVariants = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };

  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: React.MouseEvent<Element, MouseEvent>) => {
      cursorX.set(e.clientX + 1);
      cursorY.set(e.clientY + 1);
    };

    window.addEventListener("mousemove", (e) =>
      moveCursor(e as unknown as React.MouseEvent<Element, MouseEvent>)
    );

    return () => {
      window.removeEventListener("mousemove", (e) =>
        moveCursor(e as unknown as React.MouseEvent<Element, MouseEvent>)
      );
    };
  }, []);
  return { cursorXSpring, cursorYSpring };
};

export const matchClassName: { [key: string]: string } = {
  default: "bg-focus",
  hi: "bg-white",
  about: "bg-violet",
  code: "bg-white",
};
