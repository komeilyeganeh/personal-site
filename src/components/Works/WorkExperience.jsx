import { useTranslation } from "react-i18next";
import { Works } from "./Works";
import moment from "jalali-moment";

export const WorkExperience = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  return (
    <div className="mt-7">
      <h2 className="text-lg md:text-2xl text-orange-600">{t("Work title")}</h2>
      <div className="flex flex-col justify-between flex-wrap lg:flex-row mt-7 gap-y-11">
        {Works.map((work) => (
          <div className="w-ful lg:w-1/2 px-4" key={work.id}>
            <div className="flex justify-between">
              <p className="bg-slate-200 text-sm p-2 rounded-tl-lg rounded-tr-lg">
                {t(work.company)}
              </p>
              <span className="bg-slate-200 text-sm p-2 rounded-tl-lg rounded-tr-lg">
                {
                  lang === "en" ? moment.from(work.startDate, "fa", "YYYY").format('YYYY') +" - "+ moment.from(work.endDate, "fa", "YYYY").format("YYYY") : `${work.endDate} - ${work.startDate}`
                }
              </span>
            </div>
            <div className="border border-slate-200 rounded-bl-lg rounded-br-lg p-2 flex flex-col gap-y-3">
              <h4 className="text-sm md:text-base">{t(work.title)}</h4>
              <p className="text-sm text-gray-500">{t(work.desc)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
