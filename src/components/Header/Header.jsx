import s from "./Header.module.css";
import sprite from "../../assets/icons/sprite.svg";
import photo from "/image/test.png";
import SocialMedia from "../SocialMedia/SocialMedia";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import ButtonsCv from "../ButtonsCv/ButtonsCv";

export default function Header() {
  const { t } = useTranslation();

  return (
    <div className={s.container}>
      <div className={s.switcherContainer}>
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
      <div className={s.content}>
        <img src={photo} alt="My Photo" className={s.image} />
        <h1 className={s.name}>{t("name")}</h1>
      </div>

      <p className={s.description}>{t("description")}</p>

      <div className={s.iconContent}>
        <svg className={s.iconLocation}>
          <use href={`${sprite}#icon-location`} />
        </svg>
        <p className={s.location}>{t("location")}</p>
      </div>

      <ButtonsCv />

      <SocialMedia />
    </div>
  );
}
