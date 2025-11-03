import { useTranslation } from "react-i18next";
import { projectsData } from "../../data/projectsData";
import s from "./Projects.module.css";
import sprite from "../../assets/icons/sprite.svg";

export default function Projects() {
  const { t } = useTranslation();

  return (
    <div className={s.container}>
      {projectsData.map((project, i) => (
        <a
          key={i}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className={s.card}
        >
          <div className={s.header}>
            <h3 className={s.title}>{project.title}</h3>
            <svg className={s.icon}>
              <use href={`${sprite}#icon-download`} />
            </svg>
          </div>
          <p className={s.description}>{t(project.descriptionKey)}</p>
          <p className={s.stack}>{project.stack}</p>
          <span className={s.tech}>{project.tech.join(", ")}</span>
        </a>
      ))}
    </div>
  );
}
