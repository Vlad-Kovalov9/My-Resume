import { useTranslation } from "react-i18next";
import s from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  };

  return (
    <div className={s.langSwitcher}>
      <button
        className={i18n.language === "en" ? s.active : ""}
        onClick={() => changeLanguage("en")}
      >
        EN
      </button>
      <button
        className={i18n.language === "ua" ? s.active : ""}
        onClick={() => changeLanguage("ua")}
      >
        UA
      </button>
    </div>
  );
}
