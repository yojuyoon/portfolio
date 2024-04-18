// import Theme from "src/assets/svgs/theme.svg?react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  return (
    <nav className="font-light fixed top-0 left-0 right-0 backdrop-blur-xl">
      <div className="flex justify-between align-center mx-auto py-20 xl:max-w-desktop">
        <div className="cursor-pointer" onClick={() => navigate("/")}>
          JY
        </div>
        <ul className="flex justify-between gap-30">
          <Button
            onClick={() => {}}
            className="hover:text-focusText ease-out duration-300"
          >
            Projects
          </Button>
          <Button
            onClick={() => {}}
            className="hover:text-focusText ease-out duration-300"
          >
            Resume
          </Button>
          <Button
            onClick={() => {
              navigate("/about");
            }}
            className="hover:text-focusText ease-out duration-300"
          >
            About
          </Button>
          {/* <Button
            onClick={() => {}}
            className="hover:text-focusText ease-out duration-300"
          >
            <Theme />
          </Button> */}
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
