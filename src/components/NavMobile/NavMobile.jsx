import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { BsTelegram, BsGithub, BsLinkedin } from "react-icons/bs";
import { MenuItem } from "../Header/MenuItem";
import resume from "../../assets/resume/Resume.pdf";

export const NavMobile = ({ isShow }) => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="fixed w-80 max-w-full right-0 top-0 bg-white h-screen z-50 flex flex-col items-center gap-y-6"
      initial={{ right: -500, opacity: 0, visibility: "hidden" }}
      animate={isShow ? { visibility: "visible", right: 0, opacity: 1 } : ""}
      exit={{ right: -500, opacity: 0, visibility: "hidden" }}
    >
      <div className="mt-7">
        <MenuItem />
      </div>
      <div className="flex flex-col items-center gap-y-5">
        <Link to={resume} download target="_blank">
          <motion.button
            className="bg-orange-400 py-2 px-5 rounded-2xl text-sm text-white"
            whileHover={{
              backgroundColor: [
                "rgb(251, 146, 60)",
                "rgba(251, 106, 60)",
                "rgb(251, 146, 60)",
              ],
              color: ["white", "black", "white"],
              transition: {
                duration: 2,
                repeat: Infinity,
              },
            }}
          >
            {t("Resume text")}
          </motion.button>
        </Link>
      </div>
      <div className="flex gap-x-4 mt-4">
        <a href="https://t.me/komeil261" className="p-2" target="_blank">
          <BsTelegram color="#888" />
        </a>
        <a
          href="https://github.com/komeilyeganeh"
          className="p-2"
          target="_blank"
        >
          <BsGithub color="#888" />
        </a>
        <a
          href="https://www.linkedin.com/in/komeil-yeganeh/"
          className="p-2"
          target="_blank"
        >
          <BsLinkedin color="#888" />
        </a>
      </div>
    </motion.div>
  );
};
