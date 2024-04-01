import Theme from "src/assets/svgs/theme.svg?react";
import Button from "./Button";

function Nav() {
  return (
    <nav className="flex justify-between xl:max-w-desktop align-center mx-auto py-20 font-light">
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
    </nav>
  );
}

export default Nav;
