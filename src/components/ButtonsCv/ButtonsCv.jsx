import s from "./ButtonsCv.module.css";
import sprite from "../../assets/icons/sprite.svg";
import { useTranslation } from "react-i18next";
import { useState } from "react";

export default function ButtonsCv() {
  const { t } = useTranslation();
  const [openView, setOpenView] = useState(false);
  const [openDownload, setOpenDownload] = useState(false);

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

  return (
    <div className={s.buttonContainer}>
      <div className={s.dropdown}>
        <button className={s.button} onClick={() => setOpenView(!openView)}>
          <p className={s.buttonText}>{t("view")}</p>
          <svg className={s.iconBtn}>
            <use href={`${sprite}#eye-icon`} />
          </svg>
        </button>
        {openView && (
          <div className={s.menu}>
            <a
              href={files.uk.view}
              className={s.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("Переглянути En")}
            </a>
            <a
              href={files.en.view}
              className={s.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("Переглянути Ua")}
            </a>
          </div>
        )}
      </div>

      <div className={s.dropdown}>
        <button
          className={s.button}
          onClick={() => setOpenDownload(!openDownload)}
        >
          <p className={s.buttonText}>{t("download")}</p>
          <svg className={s.iconBtn}>
            <use href={`${sprite}#icon-cv`} />
          </svg>
        </button>
        {openDownload && (
          <div className={s.menu}>
            <a href={files.uk.download} className={s.link} download>
              {t("Завантажити (En)")}
            </a>
            <a href={files.en.download} className={s.link} download>
              {t("Завантажити (Ua)")}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
