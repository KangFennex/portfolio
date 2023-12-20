import Navbar from "./layouts/navbar/navbar";
import Hero from "./containers/hero/Hero";
import About from "./containers/about/About";
import Skills from "./containers/skills/Skills";
import { useContext, useState } from "react";
import { LightModeContext } from "./components/utils/LightModeContext";
import SoundControl from "./components/soundControl/SoundControl";
import useWindowSize from "./components/utils/useWindowSize";
import { Themes } from "./components/themes/themes";
import Projects from "./containers/projects/Projects";
import Contact from "./containers/contact/Contact";

function App() {
  const { width } = useWindowSize();
  const { lightMode } = useContext(LightModeContext);

  return (
    <div className={`App ${lightMode ? "light-mode" : "dark-mode"}`}>
      {/* navbar component */}
      <Navbar />
      {/* main page content */}
      {width > 768 && <SoundControl />}
      {width > 768 && <Themes />}
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
