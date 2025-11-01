import { useTranslation } from "react-i18next";
import s from "./About.module.css";

export default function About() {
  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <p className={s.text}>{t("about_text1")}</p>
      <p className={s.text}>{t("about_text2")}</p>
      <p className={s.text}>{t("about_text3")}</p>
    </div>
  );
}
