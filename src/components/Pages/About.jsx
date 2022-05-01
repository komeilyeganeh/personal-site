import { motion } from "framer-motion";
import { AboutMe } from "../AboutMe/AboutMe";
import { Skills } from "../Skills/Skills";
import { WorkExperience } from "../Works/WorkExperience";

export const About = () => {
  return (
    <motion.div
      className="w-full h-full rounded-2xl bg-white p-6 overflow-y-auto absolute"
      transition={{ duration: 0.4, ease: "easeOut" }}
      initial={{ y: 300, scale: 0.8, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      exit={{ y: 300, scale: 0.8, opacity: 0 }}
    >
      <AboutMe />
      <Skills />
      <WorkExperience />
    </motion.div>
  );
};
