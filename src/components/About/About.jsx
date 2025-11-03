import { useTranslation } from "react-i18next";
import s from "./About.module.css";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <div className={s.aboutContainer}>
        <p className={s.text}>{t("about_text1")}</p>
        <p className={s.text}>{t("about_text2")}</p>
        <p className={s.text}>{t("about_text3")}</p>
      </div>

      <div className={s.aboutLanguages}>
        <h3 className={s.subtitle}>{t("languages")}</h3>
        <p className={s.text}>{t("about_languages1")}</p>
        <p className={s.text}>{t("about_languages2")}</p>
      </div>

      <div className={s.aboutEducation}>
        <h3 className={s.subtitle}>{t("education")}</h3>
        <p className={s.text}>{t("about_education1")}</p>
        <p className={s.text}>{t("about_education2")}</p>
      </div>
    </div>
  );
}
