import "../../sass/components/_index.scss"
import { motion } from "framer-motion";
import { useContext } from "react";
import { LightModeContext } from "../utils/LightModeContext";

const HeroText = () => {
  const name = "Welcome to my oasis";

  const { lightMode } = useContext(LightModeContext);

  return (
    <div className="hero-text">
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2 }}
        className={`hero-text__h1 ${lightMode ? "light-mode" : "dark-mode"}`}
      >
        <div>
          {name.split(" ").map((word, wordIndex) => (
            <>
              <span key={wordIndex} className="hero-text__word">
                {word.split("").map((char, charIndex) => (
                  <span key={charIndex} className="bounce">
                    {char}
                  </span>
                ))}
              </span>
              {wordIndex < name.split(" ").length - 1 && " "}
            </>
          ))}
        </div>
      </motion.h1>
    </div>
  );
};
export default HeroText;
