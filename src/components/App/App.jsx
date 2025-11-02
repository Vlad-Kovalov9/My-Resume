import { useTranslation } from "react-i18next";
import About from "../About/About";
import Accordion from "../Accordion/Accordion";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import RunningText from "../RunningText/RunningText";
import Skills from "../Skills/Skills";
import s from "./App.module.css";

export default function App() {
  const { t } = useTranslation();

  return (
    <>
      <div className={s.container}>
        <Header />

        {/* <div className={s.accordion}>
          <Accordion title={t("about")}>
            <About />
          </Accordion>

          <Accordion title={t("skills")}>
            <Skills />
          </Accordion>

          <Accordion title={t("projects")}>
            <Projects />
          </Accordion>
        </div> */}
      </div>
      {/* <RunningText /> */}
    </>
  );
}
