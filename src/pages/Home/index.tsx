import { useState } from "react";
import Layout from "src/components/common/Layout";
import Experience from "./Experience";
import Introduction from "./Introduction";
import Project from "./Project";

function App() {
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
    <Layout cursorText={cursorText} cursorVariant={cursorVariant}>
      <Introduction hiEnter={hiEnter} hiLeave={hiLeave} />
      <Experience />
      <Project />
    </Layout>
  );
}

export default App;
