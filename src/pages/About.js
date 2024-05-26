import EducationSection, {
  ExperienceSection,
} from "../components/ExperienceSection";
import PageTitle from "../components/PageTitle";
import SkillsSection from "../components/SkillsSection";
import Title from "../components/Title";
import { useHeadingAnimation } from "../hooks/usePageAnimation";

export default function About() {
  const headRef = useHeadingAnimation();
  return (
    <>
      <PageTitle text1="about" text2="me" ref={headRef} />
      <div className="mt-10 w-full">
        <ExperienceSection />
        <SkillsSection />
        <EducationSection />
      </div>
      <Title title="about." />
    </>
  );
}
