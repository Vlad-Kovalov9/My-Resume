import s from "./SocialMedia.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { socialLinks } from "../../data/socialLinks";

export default function SocialMedia() {
  return (
    <ul className={s.list}>
      {socialLinks.map(({ id, icon, name, url }) => (
        <li className={s.item} key={id}>
          <svg className={s.icon}>
            <use href={`${sprite}#${icon}`} />
          </svg>
          <a
            href={url}
            target={url.startsWith("http") ? "_blank" : "_self"}
            rel="noopener noreferrer"
            className={s.link}
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
}
