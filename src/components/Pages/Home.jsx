import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import resume from "../../assets/resume/Resume.pdf";
import css from "../../assets/css-code.png";
import react from "../../assets/react.png";
import js from "../../assets/js.png";
import bootstrap from "../../assets/bootstrap.png";
import profile from "../../assets/profile.jpg";

export const Home = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <motion.div
      className="w-full h-full rounded-2xl bg-white p-6 flex flex-col justify-center items-center lg:items-start gap-y-4 absolute overflow-hidden"
      transition={{ duration: 0.4, ease: "easeOut" }}
      initial={{ y: -300, scale: 0.8, opacity: 0 }}
      animate={{ y: 0, scale: 1, opacity: 1 }}
      exit={{ y: -300, scale: 0.8, opacity: 0 }}
    >
      <img
        src={profile}
        alt="komeil yeganeh - profile"
        className="block lg:hidden rounded-full w-44 h-44 shadow-xl object-cover"
      />
      <h1 className="lg:hidden text-2xl">{t("My name")}</h1>
      <p className="text-orange-600 text-lg">{t("Title job")}</p>
      <Link to={resume} download target="_blank">
        <motion.button
          className="lg:hidden bg-orange-400 py-2 px-5 rounded-2xl text-sm text-white"
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
      <h1 className="hidden lg:block text-2xl">
        {t("Hi")}،{" "}
        <span className="text-orange-600 italic">{t("My name")}</span>{" "}
        {t("I am")}
      </h1>
      <img
        src={css}
        alt="css-logo"
        className={`hidden lg:block absolute bottom-16 ${
          lang === "en" ? "right-16" : "left-16"
        } opacity-10`}
      />
      <img
        src={react}
        alt="react-logo"
        className="absolute top-16 left-16 opacity-10"
      />
      <img
        src={js}
        alt="react-logo"
        className="absolute top-9 left-52 opacity-5 rotate-12"
      />
      <img
        src={bootstrap}
        alt="react-logo"
        className="absolute top-24 left-96 opacity-5 -rotate-12"
      />
    </motion.div>
  );
};
