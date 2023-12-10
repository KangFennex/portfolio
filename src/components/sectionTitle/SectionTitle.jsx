import "../../sass/components/_index.scss"
import { motion } from "framer-motion";

const SectionTitle = (props) => {
  const { title, subtitle } = props;

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
        <div className="subtitle">{subtitle}</div>
        <h2 className="title">{title}</h2>
      </div>
    </motion.div>
  );
};

export default SectionTitle;
