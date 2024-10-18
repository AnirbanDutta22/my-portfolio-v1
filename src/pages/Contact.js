import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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

  const [message, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [messageSent, setMessageSent] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isCountdownOn, setCountdownOn] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120 * 60);

  const sendMessage = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      // console.log(message);

      const formData = new FormData();
      formData.append("name", message.name);
      formData.append("email", message.email);
      formData.append("message", message.message);

      console.log(formData);

      await fetch(process.env.REACT_APP_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors", // This disables CORS checks
        body: formData,
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Success !");
      setMessageSent(true);
      setCountdownOn(true);
      localStorage.setItem("isContacted", true);
    } catch (error) {
      console.error("Could't send message !", error.message);
    } finally {
      setLoading(false);
      setMessage({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const interval = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000); // Update every second

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <>
      {isLoading ? (
        <span>Sending message...</span>
      ) : messageSent ? (
        <motion.div
          className="mt-20 fixed flex flex-col justify-center items-start text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>
            <b>Thank You !!</b> Got your message !!
          </p>
          <p>
            You'll be contacted in...
            {isCountdownOn && (
              <span>
                {minutes} Minutes {seconds} Seconds
              </span>
            )}
          </p>
        </motion.div>
      ) : (
        <>
          <PageTitle ref={headRef} text1="let's work" text2="together" />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 text-sm sm:text-base md:text-lg"
          >
            I will be happy to get a direct email on{" "}
            <span className="text-fontColor2 font-semibold dark:font-normal dark:text-highlight">
              <a href="mailto:meanirbandutta22@gmail.com">
                meanirbandutta22@gmail.com
              </a>
            </span>
          </motion.span>
          <form className="w-full md:w-3/4 lg:w-11/12 mt-10" ref={sectionRef}>
            <div className="w-full grid lg:grid-cols-2 md:gap-6">
              <Input
                label="Name"
                value={message.name}
                onValueChange={(e) =>
                  setMessage({ ...message, name: e.target.value })
                }
              />
              <Input
                label="Email"
                value={message.email}
                onValueChange={(e) =>
                  setMessage({ ...message, email: e.target.value })
                }
              />
              <TextArea
                label="Write your message here..."
                value={message.message}
                onValueChange={(e) =>
                  setMessage({ ...message, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              onClick={sendMessage}
              className="mt-8 bg-highlight2 dark:bg-highlight text-bgColor focus:ring-4 focus:outline-none font-semibold text-lg w-full sm:w-auto px-5 py-2.5 text-center cursor-none"
            >
              Send Message
            </button>
          </form>
        </>
      )}

      <Title title="contact." left="left-44" />
    </>
  );
}
