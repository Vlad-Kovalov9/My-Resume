import s from "./Header.module.css";
import sprite from "../../assets/icons/sprite.svg";
import photo from "/image/test.png";
import SocialMedia from "../SocialMedia/SocialMedia";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Header() {
  return (
    <div className={s.container}>
      <ThemeToggle />
      <div className={s.content}>
        <img src={photo} alt="My Photo" className={s.image} />
        <h1 className={s.name}>Vladyslav K.</h1>
      </div>

      <p className={s.description}>Frontend Developer | React Developer</p>

      <div className={s.iconContent}>
        <svg className={s.iconLocation}>
          <use href={`${sprite}#icon-location`} />
        </svg>
        <p className={s.location}>Ukraine, Odesa</p>
      </div>

      <button className={s.button}>
        DOWNLOAD CV
        <svg className={s.iconBtn}>
          <use href={`${sprite}#icon-cv`} />
        </svg>
      </button>

      <SocialMedia />
    </div>
  );
}
