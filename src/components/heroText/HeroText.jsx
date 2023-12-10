import "../../sass/components/_index.scss"
import { motion } from "framer-motion";
import React, { useContext } from "react";
import { LightModeContext } from "../utils/LightModeContext";

const HeroText = () => {
  const name = "Kangkm?";

  const { lightMode } = useContext(LightModeContext);

  return (
    <div className="hero-text">
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className={`hero-text__h1 ${lightMode ? "light-mode" : "dark-mode"}`}
      >
        <span className="hero-text__top">Who's</span>
        <div>
          {name.split("").map((char, index) => {
            if (char === " ") {
              return " ";
            }
            return (
              <span key={index} className="bounce">
                {char}
              </span>
            );
          })}
        </div>
      </motion.h1>
    </div>
  );
};
export default HeroText;
