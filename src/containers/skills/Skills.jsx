import "../../sass/pages/_index.scss"
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { skills } from "../../Constants/constants";
import { useState } from "react";
import useWindowSize from "../../components/utils/useWindowSize";
import { motion, AnimatePresence } from "framer-motion"

const Skills = () => {
  const [filteredSkills, setFilteredSkills] = useState(skills);
  const { width } = useWindowSize();

  const filterSkills = (category) => {
    if (category === "all") {
      setFilteredSkills(skills);
    } else {
      const filtered = skills.filter((skill) => skill.category === category);
      setFilteredSkills(filtered);
    }
  };

  return (
    <nav id="skills" className="skills">
      <SectionTitle title="The tools I use" subtitle="My skills" />
      <div className="skills__container">
        <div className="skills__container__frame">
          <div className="skills__container__skills">
            <AnimatePresence>
              {filteredSkills.map((skill) => {
                return (
                  <motion.div
                    key={skill.id}
                    layout
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ type: 'spring', damping: 10, stiffness: 50 }}
                    className="skills__container__skills__skills-container">
                    <img
                      src={skill.icon}
                      alt={`${skill.title} icon`}
                      className="skills__container__skills__skills-icon"
                    ></img>
                    <span className="skills__container__skills__skills-icon__label">
                      {skill.label}
                    </span>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
          <div className="skills__container__buttons-container">
            <button
              className="skills__container__buttons-container__skills-button bounce"
              onClick={() => filterSkills("all")}
            >
              All
            </button>
            <button
              className="skills__container__buttons-container__skills-button bounce"
              onClick={() => filterSkills("front-end")}
            >
              {width < 768 ? "Frontend" : "Front\nEnd"}
            </button>
            <button
              className="skills__container__buttons-container__skills-button bounce"
              onClick={() => filterSkills("back-end")}
            >
              {width < 768 ? "Backend" : "Back\nEnd"}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Skills;
