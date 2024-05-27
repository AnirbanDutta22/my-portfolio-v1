import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import resume from "../assets/AnirbanDutta_Resume.pdf";
import Title from "../components/Title";
import { usePageAnimation } from "../hooks/usePageAnimation";

export default function HomeContent() {
  // const heroText = useRef(null);
  // const heroSpan = useRef(null);
  // const heroPara = useRef(null);

  const { ref1, ref2, ref3 } = usePageAnimation();

  return (
    <>
      <h1 className="text-2xl sm:text-3xl lg:text-5xl" ref={ref1}>
        hello ! me{" "}
        <span className="text-highlight2 dark:text-highlight">
          anirbanDutta
        </span>
      </h1>
      <p ref={ref2}>
        <span className="mt-2 text-4xl md:text-6xl lg:text-7xl">
          I create things for the web
        </span>
      </p>
      <p
        className="mt-10 w-full md:w-3/4 lg:w-full text-lg md:text-xl"
        ref={ref3}
      >
        I'm a passionate and driven college student with keen interest in
        becoming MERN Developer ! Currently I'm doing Frontend Development and
        working on React.js based projects. I've a good foundation in
        Javascript, HTML, CSS, SASS, Tailwind CSS, Bootstrap etc.
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
