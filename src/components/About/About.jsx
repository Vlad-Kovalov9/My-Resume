import s from "./About.module.css";

export default function About() {
  return (
    <div className={s.container}>
      <p className={s.text}>
        I’m a passionate frontend developer who loves creating modern,
        responsive, and intuitive user interfaces using{" "}
        <span className={s.span}>React</span> and{" "}
        <span className={s.span}>TypeScript</span>.
      </p>
      <p className={s.text}>
        I focus on clean architecture, reusable components, and smooth user
        experience.
      </p>
      <p className={s.text}>
        Currently seeking a position where I can grow as a React developer and
        contribute to a great product team.
      </p>
    </div>
  );
}
