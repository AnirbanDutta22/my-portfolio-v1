import { SubTitle } from "./PageTitle";

export default function TimelineSection() {
  return (
    <>
      <SubTitle text="education" />
      <ol className="w-11/12 md:w-5/6 lg:w-4/6 pt-4 relative border-s border-highlight2 dark:border-highlight">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-highlight2 dark:bg-highlight rounded-full mt-1.5 -start-1.5 border border-highlight2 dark:border-highlight"></div>
          <div className="bg-bgColorLight2 dark:bg-bgColorLight shadow-md dark:shadow-none px-5 py-3">
            <time className="mb-1 text-sm font-normal leading-none text-highlight2 dark:text-highlight">
              Aug 2022-Present
            </time>
            <h3 className="text-lg text-fontColor2 dark:text-fontColor">
              Bachelor of Computer Applications
            </h3>
            <p className="text-base font-normal text-fontColor2 dark:text-fontColor">
              SGPA: 8.4
            </p>
          </div>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-highlight2 dark:bg-highlight rounded-full mt-1.5 -start-1.5 border border-highlight2 dark:border-highlight"></div>
          <div className="bg-bgColorLight2 dark:bg-bgColorLight shadow-md dark:shadow-none px-5 py-3">
            <time className="mb-1 text-sm font-normal leading-none text-highlight2 dark:text-highlight">
              2020-2022
            </time>
            <h3 className="text-lg text-fontColor2 dark:text-fontColor">
              Higher Secondary
            </h3>
            <p className="text-base font-normal text-fontColor2 dark:text-fontColor">
              PCM with Computer Applications. <br /> Grade: 8.8
            </p>
          </div>
        </li>
      </ol>
    </>
  );
}
export function ExperienceSection() {
  return (
    <>
      <SubTitle text="experience" />
      <ol className="w-11/12 md:w-5/6 lg:w-4/6 pt-4 relative border-s border-highlight2 dark:border-highlight">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-highlight2 dark:bg-highlight rounded-full mt-1.5 -start-1.5 border border-highlight2 dark:border-highlight"></div>
          <div className="bg-bgColorLight2 dark:bg-bgColorLight shadow-md dark:shadow-none px-5 py-3">
            <time className="mb-1 text-sm font-normal leading-none text-highlight2 dark:text-highlight">
              Aug 2022-Present
            </time>
            <h3 className="text-lg text-fontColor2 dark:text-fontColor">
              Bachelor of Computer Applications
            </h3>
            <p className="text-base font-normal text-fontColor2 dark:text-fontColor">
              SGPA: 8.4
            </p>
          </div>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-highlight2 dark:bg-highlight rounded-full mt-1.5 -start-1.5 border border-highlight2 dark:border-highlight"></div>
          <div className="bg-bgColorLight2 dark:bg-bgColorLight shadow-md dark:shadow-none px-5 py-3">
            <time className="mb-1 text-sm font-normal leading-none text-highlight2 dark:text-highlight">
              2020-2022
            </time>
            <h3 className="text-lg text-fontColor2 dark:text-fontColor">
              Higher Secondary
            </h3>
            <p className="text-base font-normal text-fontColor2 dark:text-fontColor">
              PCM with Computer Applications. <br /> Grade: 8.8
            </p>
          </div>
        </li>
      </ol>
    </>
  );
}
