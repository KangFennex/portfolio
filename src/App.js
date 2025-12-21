import Navbar from "./layouts/navbar/navbar";
import Hero from "./pages/hero/Hero";
import Current from "./pages/current/Current";
import About from "./pages/about/About";
import Skills from "./pages/skills/Skills";
import { useState } from "react";
import { useContext } from "react";
import { LightModeContext } from "./components/utils/LightModeContext";
import SoundControl from "./components/soundControl/SoundControl";
import useWindowSize from "./components/utils/useWindowSize";
import { Themes } from "./components/themes/themes";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  const { width } = useWindowSize();
  const { lightMode } = useContext(LightModeContext);
  const [displayCurrentProject, setDisplayCurrentProject] = useState(null)

  return (
    <div className={`App ${lightMode ? "light-mode" : "dark-mode"}`}>
      <div className="fixed-bg"></div>
      {/* navbar component */}
      <Navbar />
      {/* main page content */}
      {width > 768 && <SoundControl />}
      {width > 768 && <Themes />}
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Current setDisplayCurrentProject={setDisplayCurrentProject}/>
            <Skills />
            <Contact />
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects displayCurrentProject={displayCurrentProject} setDisplayCurrentProject={setDisplayCurrentProject} />} />
      </Routes>
    </div>
  );
}

export default App;
