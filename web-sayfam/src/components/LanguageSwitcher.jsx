import useGlobalContext from "../hooks/useGlobalContext";

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useGlobalContext();

  return (
    <span className="cursor-pointer m-4 space-x-4" onClick={toggleLanguage}>
      <span>|</span>
      <span>{language === "tr" ? "SWITCH TO ENGLISH" : "TÜRKÇE'YE GEÇ"}</span>
    </span>
  );
};

export default LanguageSwitcher;
