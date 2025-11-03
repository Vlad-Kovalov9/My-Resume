import s from "./ButtonsCv.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { useTranslation } from "react-i18next";

export default function ButtonsCv() {
  const { t } = useTranslation();

  return (
    <div className={s.buttonContainer}>
      <button className={s.button}>
        <p className={s.buttonText}> {t("view")}</p>
        <svg className={s.iconBtn}>
          <use href={`${sprite}#eye-icon`} />
        </svg>
      </button>
      <button className={s.button}>
        <p className={s.buttonText}> {t("download")}</p>
        <svg className={s.iconBtn}>
          <use href={`${sprite}#icon-cv`} />
        </svg>
      </button>
    </div>
  );
}
