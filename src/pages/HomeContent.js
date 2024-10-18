import { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import resume from "../assets/AnirbanDutta_Resume.pdf";
import Title from "../components/Title";
import CursorContext from "../context/cursorContext";
import { usePageAnimation } from "../hooks/usePageAnimation";

export default function HomeContent() {
  const navigate = useNavigate();
  const { ref1, ref2, ref3 } = usePageAnimation();
  const { setMouseVariant } = useContext(CursorContext);

  const [hoveredSpan, setHoveredSpan] = useState(null);

  const cursorEnter = (span) => {
    setMouseVariant("textLg");
    setHoveredSpan(span);
  };

  const cursorExit = () => {
    setMouseVariant("default");
    setHoveredSpan(null);
  };

  const navigateToWork = (route) => {
    cursorExit();
    navigate("/works");
  };

  return (
    <>
      <h1 className="text-2xl sm:text-3xl lg:text-5xl" ref={ref1}>
        hello ! me{" "}
        <span className="text-highlight2 dark:text-highlight">
          anirbanDutta
        </span>
      </h1>
      <p ref={ref2} className="mt-2 h-[7rem] md:h-[10rem] lg:h-[8rem] w-full">
        <span className="text-4xl md:text-6xl lg:text-[4rem]">
          I create things for the{" "}
          <span
            onClick={() => navigateToWork("web-works")}
            onMouseEnter={() => cursorEnter("web-span")}
            onMouseLeave={cursorExit}
          >
            web
          </span>{" "}
          and{" "}
          <span
            onClick={() => navigateToWork("mobile-works")}
            onMouseEnter={() => cursorEnter("mobile-span")}
            onMouseLeave={cursorExit}
          >
            mobile
          </span>
        </span>
      </p>
      {/* <p ref={ref2} className="mt-2 h-[8rem] w-full">
        <span className="text-4xl md:text-6xl lg:text-[4rem]">
          I create things for the{" "}
          <span
            onMouseEnter={() => cursorEnter("web-span")}
            onMouseLeave={cursorExit}
            style={{ display: "inline-block", position: "relative" }}
          >
            {hoveredSpan === "web-span" ? (
              <img
                src={web}
                alt="web"
                className="w-20 h-full transition-opacity duration-300 ease-in-out"
                style={{ height: "1em", verticalAlign: "middle" }}
              />
            ) : (
              <span className="dark:text-fontColor transition-opacity duration-300 ease-in-out">
                web
              </span>
            )}
          </span>{" "}
          and{" "}
          <span
            onMouseEnter={() => cursorEnter("mobile-span")}
            onMouseLeave={cursorExit}
            style={{ display: "inline-block", position: "relative" }}
          >
            {hoveredSpan === "mobile-span" ? (
              <img
                src={smartphone}
                alt="mobile"
                className="w-20 h-full transition-opacity duration-300 ease-in-out"
                style={{ height: "1em", verticalAlign: "middle" }}
              />
            ) : (
              <span className="dark:text-fontColor transition-opacity duration-300 ease-in-out">
                mobile
              </span>
            )}
          </span>
        </span>
      </p> */}
      <p
        className="mt-2 sm:mt-5 w-full md:w-3/4 lg:w-full text-lg md:text-xl"
        ref={ref3}
      >
        As a full-stack Web and App developer, I specialize in providing
        tailored solutions for web and mobile. I focus on building responsive,
        scalable websites and mobile applications from scratch, covering
        everything from front-end design to back-end development. I can help
        bring your ideas to life with efficient, modern tech solutions.
      </p>
      <p className="mt-8 text-md md:text-lg">
        <span className="">Have a look on my resume </span>
        <NavLink to={resume} target="_blank">
          <i className="fa-solid fa-arrow-right" title="resume_link"></i>
        </NavLink>
      </p>
      <div className="flex justify-start text-2xl mt-14">
        <div>
          <Link
            target="_blank"
            to="https://www.linkedin.com/in/anirban-dutta-a1044524a"
            className="decoration-none"
          >
            <i className="fa-brands fa-linkedin" title="Linkedin"></i>
          </Link>
        </div>
        <div className="ml-20">
          <Link
            target="_blank"
            to="https://www.twitter.com/aniduttacodes"
            className="decoration-none"
          >
            <i className="fa-brands fa-x-twitter" title="X"></i>
            <Tooltip id="tooltipid2" />
          </Link>
        </div>
        <div className="ml-20">
          <Link
            target="_blank"
            to="https://www.github.com/AnirbanDutta22"
            className="decoration-none"
          >
            <i className="fa-brands fa-github" title="GitHub"></i>
            <Tooltip id="tooltipid3" />
          </Link>
        </div>
      </div>
      <Title title="aD." left="left-60" />
    </>
  );
}
