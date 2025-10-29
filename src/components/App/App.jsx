import About from "../About/About";
import Accordion from "../Accordion/Accordion";
import Header from "../Header/Header";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import s from "./App.module.css";

export default function App() {
  return (
    <div className={s.container}>
      <Header />

      <div className={s.accordion}>
        <Accordion title="About me">
          <About />
        </Accordion>

        <Accordion title="Skills">
          <Skills />
        </Accordion>

        <Accordion title="Projects">
          <Projects />
        </Accordion>
      </div>
    </div>
  );
}
