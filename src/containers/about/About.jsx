import "../../sass/pages/_index.scss"
import { motion } from "framer-motion";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import avatar from "../../assets/avatar/avatar.png";
import { introduction } from "../../constants/constants";
import { LightModeContext } from "../../components/utils/LightModeContext";
import { useContext } from "react";

const About = () => {
  const { lightMode } = useContext(LightModeContext);

  const variants = {
    offscreen: {
      opacity: 0.8,
    },
    onscreen: {
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 1.5,
      }
    }
  };

  return (
    <nav id="about" className="about">
      <SectionTitle title="About me" subtitle="Who that" />
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.8 }}
        className="about__container">
        <div className="about__container__img-container">
          <motion.div
            initial={{ rotate: 0 }}
            whileInView={{ rotateY: 160 }}
            transition={{ duration: 1 }}
          >
            <img
              src={avatar}
              alt="Avatar"
              className="about__container__img-container__avatar"
            />
          </motion.div>
        </div>
        <motion.div
          variants={variants}
          className={`about__container__text-container ${lightMode ? "light-mode" : "dark-mode"
            }`}
        >
          <span className="about__container__text">{introduction.text[0]}</span>
          <span className="about__container__text">{introduction.text[1]}</span>
          <span className="about__container__text">{introduction.text[2]}</span>
          <span className="about__container__text">{introduction.text[3]}</span>
          <span className="about__container__text">{introduction.text[4]}</span>
        </motion.div>
      </motion.div>
    </nav>
  );
};

export default About;
