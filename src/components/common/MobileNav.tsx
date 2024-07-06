import { SVGMotionProps, motion, useCycle } from "framer-motion";
import { RefAttributes, useEffect, useRef } from "react";
import clsx from "clsx";
import { useDimensions } from "src/hooks/useDemention";
import { Menu } from "./Nav";
import Button from "./Button";

function MobileNav({ menuList }: { menuList: Menu[] }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  useEffect(() => {
    if (isOpen) window.document.body.style.overflow = "hidden";
    else window.document.body.style.overflow = "auto";
  }, [isOpen]);

  const { height } = useDimensions(containerRef);
  const variants = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: "circle(30px at 90vw 40px)",
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const MenuItem = ({ info }: { info: Menu }) => {
    return (
      <motion.li
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          className={clsx(
            "text-[24px] pb-20 transition-all cursor-pointer hover:text-focus",
            isOpen ? "block" : "hidden"
          )}
          onClick={() => {
            if (!isOpen) return;
            info.action();
          }}
        >
          {info.name}
        </Button>
      </motion.li>
    );
  };

  const Path = (
    props: JSX.IntrinsicAttributes &
      SVGMotionProps<SVGPathElement> &
      RefAttributes<SVGPathElement>
  ) => (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="#6b6a6a"
      strokeLinecap="round"
      {...props}
    />
  );

  const MenuToggle = ({ toggle }: { toggle: () => void }) => (
    <button
      onClick={toggle}
      className="absolute top-18 right-15 w-40 h-40 rounded-full flex items-center justify-center"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.2 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
  return (
    <motion.nav
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
      className="z-50 md:hidden"
    >
      <motion.ul variants={variants} className="z-50 absolute top-80 right-90">
        {menuList.map((i: Menu) => (
          <MenuItem key={i.name} info={i} />
        ))}
      </motion.ul>
      <motion.div
        className="backdrop-blur-xl absolute top-0 right-0 bottom-0 w-220 h-screen"
        variants={sidebar}
      />
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
}

export default MobileNav;
