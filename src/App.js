import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import i18n from "./Localization/i18n";
import { motion } from "framer-motion";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";
import { About } from "./components/Pages/About";
import { Home } from "./components/Pages/Home";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { NavMobile } from "./components/NavMobile/NavMobile";
import { Overlay } from "./components/Overlay/Overlay";
import { useTranslation } from "react-i18next";
import ReactLoading from "react-loading";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { LangBtn } from "./components/Button/LangBtn";
import { NavbarBtn } from "./components/Button/NavbarBtn";

const App = () => {
  const [isNavMobile, setIsNavMobile] = useState(false);
  const [isLang, setIsLang] = useState("fa");
  const [isLoading, setIsLoading] = useState(false);
  const [isPreLoading, setIsPreLoading] = useState(true);
  const { i18n } = useTranslation();
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  const openNavMobileHandler = () => {
    setIsNavMobile(true);
  };
  const closeNavMobileHandler = () => {
    setIsNavMobile(false);
  };

  useEffect(() => {
    setIsNavMobile(false);
  }, [path]);

  useEffect(() => {
    document.body.style.fontFamily = "samim";
    setTimeout(() => {
      setIsPreLoading(false);
    }, 2000);
  }, []);

  const changeLangHandler = () => {
    setIsLoading(true);
    if (isLang === "fa") {
      setIsLang("en");
      i18n.changeLanguage("en");
      document.body.style.direction = "ltr";
      document.body.style.fontFamily = "Nunito Sans";
    } else {
      i18n.changeLanguage("fa");
      document.body.style.direction = "rtl";
      setIsLang("fa");
      document.body.style.fontFamily = "samim";
    }
    navigate("/");
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const fadePreloading = {
    close: {
      opacity: 0,
      y: "-100%",
    },
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-screen h-screen z-50 bg-purple-800 flex items-center justify-center"
        transition={{ duration: 0.8 }}
        variants={fadePreloading}
        animate={!isPreLoading && "close"}
      >
        <ReactLoading
          type="cylon"
          color="orange"
          className="w-full h-full md:w-1/2 md:h-1/2"
        />
      </motion.div>
      {isLoading && (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-purple-600 flex items-center justify-center">
          <ReactLoading
            type="bars"
            color="orange"
            className="w-full h-full md:w-1/2 md:h-1/2"
          />
        </div>
      )}
      <NavMobile isShow={isNavMobile} />
      {isNavMobile && <Overlay onClose={closeNavMobileHandler} />}
      <div className="container h-75vh w-screen flex justify-center relative">
        <Wrapper>
          <div className="w-full flex flex-row-reverse justify-between items-center">
            <LangBtn onClick={changeLangHandler} isLang={isLang}/>
            <NavbarBtn onToggleMenu={openNavMobileHandler}/>
          </div>

          <div className="flex justify-between w-full h-full">
            <Header />
            <Main>
              <AnimatePresence>
                <Routes location={location} key={location.pathname}>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                </Routes>
              </AnimatePresence>
            </Main>
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default App;
