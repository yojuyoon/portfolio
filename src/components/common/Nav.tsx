// import Theme from "src/assets/svgs/theme.svg?react";
import { includes } from "lodash";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import { resume } from "src/constant";
import Button from "./Button";
import MobileNav from "./MobileNav";

export type Menu = {
  name: string;
  action: () => void;
};

function Nav({ scrollingTop }: { scrollingTop: () => void }) {
  const navigate = useNavigate();
  const location = useLocation();

  const menuList: Menu[] = [
    {
      name: "Project",
      action: () => {
        if (includes(location.pathname, "about")) navigate("/");
        scrollingTop();
      },
    },
    { name: "Blog", action: () => navigate("/blog") },
    { name: "Resume", action: () => window.open(resume) },
    { name: "About", action: () => navigate("/about") },
  ];

  return (
    <nav className="font-light fixed top-0 left-0 right-0 dark:bg-darkBg bg-lightBg z-50">
      <div className="flex justify-between align-center mx-auto p-20 xl:px-0 xl:py-20 xl:max-w-desktop">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          Hannah Yoon
        </div>
        <MobileNav menuList={menuList} />

        <ul className={clsx("justify-between gap-30 hidden", "md:flex")}>
          {menuList.map((menu) => {
            return (
              <Button
                key={menu.name}
                onClick={menu.action}
                className="hover:text-focus ease-out duration-300"
              >
                {menu.name}
              </Button>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
