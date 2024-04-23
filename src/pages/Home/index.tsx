import { useEffect, useRef, useState } from "react";
import Layout from "src/components/common/Layout";
import Experience from "./Experience";
import Introduction from "./Introduction";
import Project from "./Project";
import { useInView } from "framer-motion";

function App() {
  const projectRef = useRef(null);
  const isInView = useInView(projectRef);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const hiEnter = () => {
    setCursorText("👋");
    setCursorVariant("hi");
  };

  const defaultCursor = () => {
    setCursorText("");
    setCursorVariant("default");
  };

  const codeEnter = () => {
    setCursorText("🔍");
    setCursorVariant("code");
  };

  return (
    <>
      <Layout
        cursorText={cursorText}
        cursorVariant={cursorVariant}
        projectRef={projectRef}
      >
        <Introduction hiEnter={hiEnter} hiLeave={defaultCursor} />
        <Experience />
        <Project
          isInView={isInView}
          projectRef={projectRef}
          codeEnter={codeEnter}
          defaultCursor={defaultCursor}
        />
      </Layout>
    </>
  );
}

export default App;
