import "../../sass/themes/_index.scss"
import { GoSun } from "react-icons/go";
import { useContext } from "react";
import { motion } from "framer-motion";
import { LightModeContext } from "../utils/LightModeContext";

export const Themes = () => {
  const { lightMode, toggleLightMode } = useContext(LightModeContext);

  return (
    <div className="theme-toggle">
      <GoSun
        size={35}
        style={{ opacity: "0.87" }}
        className={`theme-toggle__icon ${lightMode ? "active" : ""}`}
      />
      <div
        className={`theme-toggle__switch ${lightMode ? "active" : ""}`}
        onClick={toggleLightMode}
      >
        <motion.div
          className="theme-toggle__handle"
          layout
          transition={spring}
        />
      </div>
    </div>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
