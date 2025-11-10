import s from "./ButtonsCv.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";

export default function ButtonsCv() {
  const { t } = useTranslation();
  const [openView, setOpenView] = useState(false);
  const [openDownload, setOpenDownload] = useState(false);

  const viewRef = useRef(null);
  const viewContentRef = useRef(null);

  const downloadRef = useRef(null);
  const downloadContentRef = useRef(null);

  const files = {
    uk: {
      view: "https://drive.google.com/file/d/1p47fT-1WJepIjRiIq9OW1iS_eOcE1WS3/view?usp=drive_link",
      download:
        "https://drive.google.com/uc?export=download&id=1p47fT-1WJepIjRiIq9OW1iS_eOcE1WS3",
    },
    en: {
      view: "https://drive.google.com/file/d/1CTpa-aCuh4zwAP-cLfcnmCfauKMThUKo/view?usp=drive_link",
      download:
        "https://drive.google.com/uc?export=download&id=1CTpa-aCuh4zwAP-cLfcnmCfauKMThUKo",
    },
  };

  useEffect(() => {
    function handleClickOutside(e) {
      if (viewRef.current && !viewRef.current.contains(e.target)) {
        setOpenView(false);
      }

      if (downloadRef.current && !downloadRef.current.contains(e.target)) {
        setOpenDownload(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const el = viewContentRef.current;
    if (!el) return;

    if (openView) {
      el.style.height = el.scrollHeight + "px";
    } else {
      el.style.height = "0px";
    }
  }, [openView]);

  useEffect(() => {
    const el = downloadContentRef.current;
    if (!el) return;

    if (openDownload) {
      el.style.height = el.scrollHeight + "px";
    } else {
      el.style.height = "0px";
    }
  }, [openDownload]);

  return (
    <div className={s.buttonContainer}>
      <div className={s.dropdown} ref={viewRef}>
        <button className={s.button} onClick={() => setOpenView(!openView)}>
          <p className={s.buttonText}>{t("view")}</p>
          <svg className={s.iconBtn}>
            <use href={`${sprite}#eye-icon`} />
          </svg>
        </button>

        <div ref={viewContentRef} className={s.menuAnimated}>
          <a
            href={files.uk.view}
            className={s.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("button1")}
          </a>

          <a
            href={files.en.view}
            className={s.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("button2")}
          </a>
        </div>
      </div>

      <div className={s.dropdown} ref={downloadRef}>
        <button
          className={s.button}
          onClick={() => setOpenDownload(!openDownload)}
        >
          <p className={s.buttonText}>{t("download")}</p>
          <svg className={s.iconBtn}>
            <use href={`${sprite}#icon-cv`} />
          </svg>
        </button>

        <div ref={downloadContentRef} className={s.menuAnimated}>
          <a href={files.uk.download} className={s.link} download>
            {t("button1")}
          </a>

          <a href={files.en.download} className={s.link} download>
            {t("button2")}
          </a>
        </div>
      </div>
    </div>
  );
}
