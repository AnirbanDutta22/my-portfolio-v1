import PageTitle from "../components/PageTitle";
import Title from "../components/Title";
import {
  useHeadingAnimation,
  useSectionAnimation,
} from "../hooks/usePageAnimation";

export default function Projects() {
  let headRef = useHeadingAnimation();
  let sectionRef = useSectionAnimation();

  return (
    <>
      <PageTitle ref={headRef} text1="look what I've" text2="built" />
      <div ref={sectionRef}>
        <select className="mt-5 px-3 py-2 dark:bg-highlight bg-highlight2 text-black font-semibold">
          <option>All</option>
          <option>Frontned</option>
          <option>Fullstack</option>
        </select>
        <div className="w-full mt-5">updating soon... !</div>
      </div>
      <Title title="projects." />
    </>
  );
}
