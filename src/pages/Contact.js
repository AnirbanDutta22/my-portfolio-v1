import Input, { TextArea } from "../components/Input";
import PageTitle from "../components/PageTitle";
import Title from "../components/Title";
import {
  useHeadingAnimation,
  useSectionAnimation,
} from "../hooks/usePageAnimation";

export default function Contact() {
  const headRef = useHeadingAnimation();
  const sectionRef = useSectionAnimation();

  return (
    <>
      <PageTitle ref={headRef} text1="let's work" text2="together" />
      <form className="w-full md:w-3/4 lg:w-11/12 mt-10" ref={sectionRef}>
        <div className="w-full grid lg:grid-cols-2 md:gap-6">
          <Input label="Name" />
          <Input label="Email" />
          <TextArea label="Write your message here..." />
        </div>

        <button
          type="submit"
          className="mt-8 bg-highlight2 dark:bg-highlight text-bgColor focus:ring-4 focus:outline-none font-semibold text-lg w-full sm:w-auto px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>

      <Title title="contact." />
    </>
  );
}
