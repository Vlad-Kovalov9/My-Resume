import Marquee from "react-fast-marquee";
import s from "./RunningText.module.css";

const repeatToFill = (items, minCount = 10) => {
  const result = [];
  while (result.length < minCount) {
    result.push(...items);
  }
  return result;
};

export default function RunningText() {
  const topItems = ["React", "JavaScript", "HTML", "CSS", "Node.js"];
  const bottomItems = ["Vladyslav K"];

  return (
    <div className={s.container}>
      <div className={s.marqueeTop}>
        <Marquee gradient={false} speed={90}>
          <div className={s.marqueeContent}>
            {repeatToFill(topItems, 20).map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </Marquee>
      </div>

      <div className={s.marqueeBottom}>
        <Marquee gradient={false} speed={60} direction="right">
          <div className={s.marqueeContent}>
            {repeatToFill(bottomItems, 20).map((item, i) => (
              <span key={i}>{item}</span>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
