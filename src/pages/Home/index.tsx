import { useRef, useState } from "react";
import Layout from "src/components/common/Layout";
import Experience from "./Experience";
import Introduction from "./Introduction";
import Project from "./Project";

function App() {
  const projectRef = useRef(null);
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  const hiEnter = () => {
    setCursorText("👋");
    setCursorVariant("hi");
  };

  const hiLeave = () => {
    setCursorText("");
    setCursorVariant("default");
  };

  return (
    <Layout
      cursorText={cursorText}
      cursorVariant={cursorVariant}
      projectRef={projectRef}
    >
      <Introduction hiEnter={hiEnter} hiLeave={hiLeave} />
      <Experience />
      <Project projectRef={projectRef} />
    </Layout>
  );
}

export default App;
