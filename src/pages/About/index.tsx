import Layout from "src/components/common/Layout";
import profile from "/src/assets/images/profile_img.png";
import { useEffect, useState } from "react";
import Button from "src/components/common/Button";
import { resume } from "src/constant";

function About() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("about");

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

  const hiLeave = () => {
    setCursorText("");
    setCursorVariant("default");
  };

  return (
    <Layout cursorText={cursorText} cursorVariant={cursorVariant}>
      <section>
        <div className="border-b dark:border-darkBorderGray pb-20">
          <h1 className="text-[62px] leading-[120%] md:text-[74px] font-semibold">
            About me
          </h1>
          <span className="opacity-80 text-mediumGray">
            Who I am and what I do
          </span>
        </div>
        <div className="flex flex-wrap gap-40 py-30 text-mediumGray">
          <div className="max-w-600">
            <span className="dark:text-darkGray text-lightBlack">Who I am</span>
            <br /> I’m
            <span className="mx-5 text-black font-medium dark:text-white dark:font-light">
              Hannah Yoon
            </span>
            front-end engineer based in Sydney, Australia 🇦🇺.
            <br />
            <br />
            <span className="dark:text-darkGray text-lightBlack">
              What I Do
            </span>
            <br />
            With three years of invaluable experience in my role at an IT
            company based in Seoul, I have sharpened my expertise in React.js,
            Next.js, TailwindCSS, and TypeScript, enabling me to create seamless
            and engaging user experiences. Throughout my tenure at different
            companies, I've had the opportunity to collaborate on projects aimed
            at enhancing UI/UX and gaining insights into various business
            models. Developing applications during this time has been immensely
            gratifying. <br />
            <br />
            <span className="dark:text-darkGray text-lightBlack">
              What I Did
            </span>
            <br />
            Before delving into the realm of front end engineering, I spent
            three years as a graphic designer. This background has equipped me
            with a keen eye for aesthetics and a deep understanding of
            user-centered design principles. It enables me to seamlessly blend
            functionality and visual appeal in every project I undertake.
            <br />
            <br />
            Feel free to reach out via
            <a
              href="mailto:hannahyoon1121@gmail.com"
              onMouseEnter={hiEnter}
              onMouseLeave={hiLeave}
              className="ml-5 text-black font-medium underline dark:text-white dark:font-light"
            >
              e-mail
            </a>
            , or follow me on
            <Button
              onMouseEnter={hiEnter}
              onMouseLeave={hiLeave}
              onClick={() => window.open("https://www.instagram.com/yojuyoon")}
              className="text-black ml-5 font-medium underline dark:text-white dark:font-light"
            >
              Instagram
            </Button>
            . Want to see where I’ve worked? Check out my{" "}
            <Button
              onClick={() => window.open(resume)}
              className="text-black ml-5 font-medium underline dark:text-white dark:font-light"
            >
              Resume
            </Button>
            , or Connect with me on
            <Button
              onMouseEnter={hiEnter}
              onMouseLeave={hiLeave}
              onClick={() =>
                window.open("https://www.linkedin.com/in/hannah-jiyoung-yoon")
              }
              className="text-black font-medium underline dark:font-light dark:text-white"
            >
              LinkedIn
            </Button>
            .
          </div>
          <div className="min-w-344 hidden md:block">
            <img className="w-330" src={profile} alt="profile" />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default About;
