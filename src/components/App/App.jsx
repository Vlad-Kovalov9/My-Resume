import { useTranslation } from "react-i18next";
import About from "../About/About";
import Accordion from "../Accordion/Accordion";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import RunningText from "../RunningText/RunningText";
import Skills from "../Skills/Skills";
import Preloader from "../Preloader/Preloader";
import { useState, useEffect } from "react";
import s from "./App.module.css";

export default function App() {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const startFade = setTimeout(() => setFadeOut(true), 2000);
    const removeLoader = setTimeout(() => setLoading(false), 2500);
    return () => {
      clearTimeout(startFade);
      clearTimeout(removeLoader);
    };
  }, []);

  return (
    <>
      {loading && <Preloader fadeOut={fadeOut} />}
      <div className={s.wrapper} style={{ display: loading ? "none" : "flex" }}>
        <div className={s.container}>
          <Header />

          <div className={s.accordion}>
            <Accordion title={t("about")}>
              <About />
            </Accordion>

            <Accordion title={t("skills")}>
              <Skills />
            </Accordion>

            <Accordion title={t("projects")}>
              <Projects />
            </Accordion>
          </div>
        </div>
        <RunningText />
      </div>
    </>
  );
}
