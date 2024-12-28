import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useContext(GlobalContext);

  return (
    <span
      className="cursor-pointer space-x-4 "
      onClick={toggleLanguage}
    >
      <span className="m-4">|</span>
      <span>{language === "tr" ? "SWITCH TO ENGLISH" : "TÜRKÇE'YE GEÇ"}</span>
    </span>
  );
}
