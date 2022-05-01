import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { useTranslation } from "react-i18next";

export const MenuItem = () => {

  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const leftVariant = lang === "fa" ? -10 : 10;
  const xVariant = lang === "fa" ? 30 : -30;
  const rotateVariant = [lang === "fa" ? 45 : -45, 0];
  const xIconVariant = lang === "fa" ? 25 : -25;

  const textVariants = {
    hover: {
      transition: {
        duration: 0.3,
      },
      left: leftVariant,
      color: "rgb(251, 146, 60)",
    },
  };
  const iconVariants = {
    rest: {
      transition: {
        duration: 0.3,
      },
      x: xVariant,
      opacity: 0,
    },
    hover: {
      transition: {
        duration: 0.3,
      },
      visibility: "visible",
      rotate: rotateVariant,
      x: xIconVariant,
      opacity: 1,
    },
  };

  return (
    <ul className="flex flex-col items-center gap-y-4">
      <li>
        <motion.div initial="rest" whileHover="hover" animate="rest">
          <NavLink
            to="/"
          >
            <motion.div variants={textVariants} className="nav_link flex items-center relative">
              <motion.div variants={iconVariants}>
                <AiOutlineHome
                  size={20}
                  color="rgb(251, 146, 60)"
                  className="absolute top-1/2 -translate-y-1/2"
                />
              </motion.div>
              {t("Home")}
            </motion.div>
          </NavLink>
        </motion.div>
      </li>
      <li>
        <motion.div initial="rest" whileHover="hover" animate="rest">
        <NavLink
            to="/about"
          >
            <motion.div variants={textVariants} className="nav_link flex items-center relative">
              <motion.div variants={iconVariants}>
                <AiOutlineUser
                  size={20}
                  color="rgb(251, 146, 60)"
                  className="absolute top-1/2 -translate-y-1/2"
                />
              </motion.div>
              {t("About me")}
            </motion.div>
          </NavLink>
        </motion.div>
      </li>
      
    </ul>
  );
};
