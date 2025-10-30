import s from "./Skills.module.css";
import { skillsData } from "../../data/skills";

export default function Skills() {
  return (
    <div className={s.container}>
      <div className={s.block}>
        <h2 className={s.title}>Hard</h2>
        <ul className={s.list}>
          {skillsData.hard.map((skill, i) => (
            <li key={i} className={s.item}>
              {skill}
            </li>
          ))}
        </ul>
      </div>

      <div className={s.block}>
        <h2 className={s.title}>Soft</h2>
        <ul className={s.list}>
          {skillsData.soft.map((skill, i) => (
            <li key={i} className={s.item}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
