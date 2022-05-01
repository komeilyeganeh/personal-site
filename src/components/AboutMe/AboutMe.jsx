import { useTranslation } from "react-i18next";

export const AboutMe = () => {

    const { t, i18n } = useTranslation();
    const lang = i18n.language;

  return (
    <div className=" flex flex-col justify-center gap-y-4 ">
      <h2 className="text-lg md:text-2xl text-orange-600">{t("About me")}</h2>
      <div className="px-4">
        <p className="text-gray-500 leading-7 text-justify text-sm md:text-base">{t("About me text")} :) </p>
        <div className="flex flex-col">
          <div className="flex flex-col gap-y-4 justify-between md:flex-row mt-4">
            <div className="w-full lg:w-1/2 flex items-center justify-start flex-wrap gap-x-1">
              <span className="text-sm md:text-base">{t("Email")}:</span>{" "}
              <p className="text-sm text-gray-500">
                komeilyeganeh261@gmail.com
              </p>
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-start flex-wrap gap-x-1">
              <span className="text-sm md:text-base">{t("Phone")}:</span>{" "}
              <p className="text-sm text-gray-500">{ lang === "en" ? "(+98) 935-725-6835" : "935-725-6835 (98+)" }</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 justify-between md:flex-row mt-4">
            <div className="w-full lg:w-1/2 flex items-center justify-start flex-wrap gap-x-1">
              <span className="text-sm md:text-base">{t("Age")}:</span>{" "}
              <p className="text-sm text-gray-500">23</p>
            </div>
            <div className="w-full lg:w-1/2 flex items-center justify-start flex-wrap gap-x-1">
              <span className="text-sm md:text-base">{t("Address")}:</span>{" "}
              <p className="text-sm text-gray-500">{t("Location")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
