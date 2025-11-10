import s from "./Preloader.module.css";

export default function Preloader({ fadeOut }) {
  const lines = ["WELCOME", "TO MY RESUME"];

  return (
    <div className={`${s.preloader} ${fadeOut ? s.fadeOut : ""}`}>
      <h1 className={s.text}>
        {lines.map((line, idx) => (
          <div key={idx} className={s.line}>
            {line.split("").map((char, i) => (
              <span key={i} style={{ "--delay": `${(i + idx * 10) * 0.05}s` }}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </div>
        ))}
      </h1>
    </div>
  );
}
