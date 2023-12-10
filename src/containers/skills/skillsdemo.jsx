import React, { useState } from "react";
import { skills } from "./skillsData"; // Assuming you have your skills data in a separate file

const Skills = () => {
  const [filteredSkills, setFilteredSkills] = useState(skills);

  const filterSkills = (category) => {
    if (category === "all") {
      setFilteredSkills(skills);
    } else {
      const filtered = skills.filter((skill) => skill.category === category);
      setFilteredSkills(filtered);
    }
  };

  return (
    <div>
      <button onClick={() => filterSkills("all")}>All</button>
      <button onClick={() => filterSkills("front-end")}>Front-end</button>
      <button onClick={() => filterSkills("back-end")}>Back-end</button>

      <div className="skills__container">
        {filteredSkills.map((skill) => (
          <img
            key={skill.id}
            src={skill.icon}
            alt={`${skill.title} icon`}
            className="skills__container__skills-icons"
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
