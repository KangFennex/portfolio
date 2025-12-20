import "../../sass/components/_index.scss"
import { motion } from "framer-motion";
import { useContext } from "react";
import { LightModeContext } from "../utils/LightModeContext";

const SectionTitle = (props) => {
  const { title, subtitle } = props;
  const { lightMode } = useContext(LightModeContext);

  return (
    <motion.div
      initial={{ x: -350 }}
      whileInView={{ x: 0 }}
      transition={{
        duration: 0.6,
        type: "spring",
        stiffness: 50,
        mass: 0.4,
      }}
    >
      <div className="sectionTitle">
        <div className={`subtitle ${lightMode ? "light-mode" : "dark-mode"}`}>{subtitle}</div>
        <h2 className={`title ${lightMode ? "light-mode" : "dark-mode"}`}>{title}</h2>
      </div>
    </motion.div>
  );
};

export default SectionTitle;
