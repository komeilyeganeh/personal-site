export const LangBtn = ({ onClick, isLang }) => {
  return (
    <div className="flex gap-x-3">
      <span
        className="p-2 rounded-lg text-sm cursor-pointer bg-orange-400 text-white"
        onClick={onClick}
      >
        {isLang === "fa" ? "EN" : "FA"}
      </span>
    </div>
  );
};
