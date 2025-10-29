import { useRef, useState } from "react";
import s from "./Accordion.module.css";
import sprite from "../../assets/icons/sprite.svg";

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={`${s.accordion} ${isOpen ? s.open : ""}`}>
      <button
        className={s.header}
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        <h2 className={s.title}>{title}</h2>
        <svg className={`${s.icon} ${isOpen ? s.rotate : ""}`}>
          <use href={`${sprite}#icon-down`} />
        </svg>
      </button>

      <div
        ref={contentRef}
        className={s.contentContainer}
        style={{
          maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className={s.content}>{children}</div>
      </div>
    </div>
  );
}
