// import Theme from "src/assets/svgs/theme.svg?react";
import { includes } from "lodash";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { resume } from "src/constant";
import clsx from "clsx";

function Nav({ scrollingTop }: { scrollingTop: () => void }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="font-light fixed top-0 left-0 right-0 backdrop-blur-xl">
      <div className="flex justify-between align-center mx-auto p-20 xl:px-0 xl:py-20 xl:max-w-desktop">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          HY
        </div>
        <ul className={clsx("justify-between gap-30 hidden", "lg:flex")}>
          <Button
            onClick={() => {
              if (includes(location.pathname, "about")) navigate("/");
              scrollingTop();
            }}
            className="hover:text-focus ease-out duration-300"
          >
            Projects
          </Button>
          <Button
            onClick={() => window.open(resume)}
            className="hover:text-focus ease-out duration-300"
          >
            Resume
          </Button>
          <Button
            onClick={() => {
              navigate("/about");
            }}
            className="hover:text-focus ease-out duration-300"
          >
            About
          </Button>
          {/* <Button
            onClick={() => {}}
            className="hover:text-focus ease-out duration-300"
          >
            <Theme />
          </Button> */}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
