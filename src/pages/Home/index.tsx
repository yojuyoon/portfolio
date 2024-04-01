import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { spring, useVariants } from "src/hooks/config";
import Layout from "src/components/common/Layout";
import Experience from "./Experience";
import Introduction from "./Introduction";

function App() {
  const ref = useRef(null);
  const variants = useVariants(ref);

  const [cursorText] = useState("");
  const [cursorVariant] = useState("default");

  return (
    <Layout mouseRef={ref}>
      <motion.div
        variants={variants}
        className="rounded-full mix-blend-difference"
        animate={cursorVariant}
        transition={spring}
      >
        <span className="cursorText">{cursorText}</span>
      </motion.div>
      <main className="font-poppins m-13 xl:max-w-desktop mx-auto py-30 font-light">
        <Introduction />
        <Experience />
      </main>
    </Layout>
  );
}

export default App;
