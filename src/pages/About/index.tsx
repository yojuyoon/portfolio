import Layout from "src/components/common/Layout";
import profile from "/src/assets/images/profile_img.png";
import { useState } from "react";

function About() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("about");

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
      <section>
        <div className="border-b border-[#3c3b3bbf] pb-20">
          <h1 className="text-[80px] font-semibold">About me</h1>
          <span className="opacity-80 text-mediumGray">
            Who I am and what I do
          </span>
        </div>
        <div className="flex flex-wrap gap-40 py-30 text-mediumGray">
          <div className="max-w-600">
            <span className="text-darkGray">Who I am</span>
            <br /> I’m <span className="text-white">Hannah Yoon</span> front-end
            engineer based in Sydney, Australia 🇦🇺.
            <br />
            <br />
            <span className="text-darkGray">What I Do</span>
            <br />
            With two years of invaluable experience in my role at Harmony
            Technology –– a tech company based here in Rabat, I have honed my
            skills in React.js, Next.js, TailwindCSS, and TypeScript, allowing
            me to craft seamless and interactive user experiences. During my
            time at Harmony Technology, I had the privilege of collaborating on
            projects for esteemed clients such as the Ministry of Health,
            Ministry of Education, and Ministry of Justice. It was an incredibly
            rewarding experience to develop applications that directly impact
            the lives of Moroccan citizens. <br />
            <br />
            <span className="text-darkGray">What I Did</span>
            <br />
            Before delving into the realm of front end engineering, I spent five
            years as a graphic designer. This background has equipped me with a
            keen eye for aesthetics and a deep understanding of user-centered
            design principles. It enables me to seamlessly blend functionality
            and visual appeal in every project I undertake.
            <br />
            <br />
            Feel free to reach out via{" "}
            <span
              className="text-white underline"
              onMouseEnter={hiEnter}
              onMouseLeave={hiLeave}
            >
              e-mail
            </span>
            , or follow me on{" "}
            <span
              className="text-white underline"
              onMouseEnter={hiEnter}
              onMouseLeave={hiLeave}
            >
              Twitter
            </span>
            . Want to see where I’ve worked? Check out my{" "}
            <span
              className="text-white underline"
              onMouseEnter={hiEnter}
              onMouseLeave={hiLeave}
            >
              Resume
            </span>
            , or Connect with me on{" "}
            <span
              className="text-white underline"
              onMouseEnter={hiEnter}
              onMouseLeave={hiLeave}
            >
              LinkedIn
            </span>
            .
          </div>
          <div className="min-w-344">
            <img className="w-330" src={profile} alt="profile" />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;
