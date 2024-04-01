import clsx from "clsx";

interface Props {
  onClick: () => void;
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<Props> = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={clsx("cursor-pointer", className)}>
      {children}
    </button>
  );
};

export default Button;
