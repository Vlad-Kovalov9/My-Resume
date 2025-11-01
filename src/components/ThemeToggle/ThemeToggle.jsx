import { useEffect, useState } from "react";
import sprite from "../../assets/icons/sprite.svg";
import s from "./ThemeToggle.module.css";

export default function ThemeToggle() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggle = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button onClick={toggle} className={s.switch}>
      <svg className={s.iconMoon}>
        <use href={`${sprite}#icon-moon`} />
      </svg>

      <svg className={s.iconSun}>
        <use href={`${sprite}#icon-sun`} />
      </svg>

      <span className={s.thumb}></span>
    </button>
  );
}
