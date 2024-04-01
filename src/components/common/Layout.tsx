import { ReactNode } from "react";
import Nav from "./Nav";

function Layout({
  children,
  mouseRef,
}: {
  children: ReactNode;
  mouseRef: React.MutableRefObject<null>;
}) {
  return (
    <div className="dark:bg-darkBg dark:text-white" ref={mouseRef}>
      <Nav />
      {children}
    </div>
  );
}

export default Layout;
