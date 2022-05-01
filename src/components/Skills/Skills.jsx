import { useTranslation } from "react-i18next";

const skills = [
  { id: "s1", name: "Html", p: "90" },
  { id: "s2", name: "Css", p: "90" },
  { id: "s3", name: "Bootstrap", p: "85" },
  { id: "s4", name: "Tailwindcss", p: "80" },
  { id: "s5", name: "Javascript", p: "90" },
  { id: "s6", name: "jQuery", p: "80" },
  { id: "s7", name: "Reactjs", p: "85" },
];

export const Skills = () => {
  const { t } = useTranslation();

  return (
    <div className="mt-7">
      <h2 className="text-lg md:text-2xl text-orange-600">{t("Skill title")}</h2>
      <div className="mt-5 flex flex-col justify-between flex-wrap md:flex-row">
        {skills.map((skill) => (
          <div className="w-full md:w-1/2 p-4" key={skill.id}>
            <div className="w-full flex flex-col gap-y-3">
              <div className="flex justify-between text-sm text-gray-500">
                <span className="text-sm md:text-base">{skill.name}</span>
                <span className="text-sm md:text-base">{skill.p}%</span>
              </div>
              <div className="w-full relative bg-gray-200 py-1 rounded-lg">
                <div
                  className="absolute top-0 h-full bg-orange-300 rounded-lg"
                  style={{ width: `${skill.p}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
