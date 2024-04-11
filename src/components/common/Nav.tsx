import Theme from "src/assets/svgs/theme.svg?react";
import Button from "./Button";

function Nav() {
  return (
    <nav className="font-light fixed top-0 left-0 right-0 backdrop-blur-xl">
      <div className="flex justify-between align-center mx-auto py-20 xl:max-w-desktop">
        <div>JY</div>
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
            onClick={() => {}}
            className="hover:text-focusText ease-out duration-300"
          >
            Contact
          </Button>
          <Button
            onClick={() => {}}
            className="hover:text-focusText ease-out duration-300"
          >
            <Theme />
          </Button>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
