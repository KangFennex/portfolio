import "../../sass/pages/_index.scss"
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { useContext } from "react";
import { LightModeContext } from "../../components/utils/LightModeContext";

const Contact = () => {
  const { lightMode } = useContext(LightModeContext);

  return (
    <div id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__socials">
          <a className={`contact__socials-github ${lightMode ? "light-mode" : "dark-mode"}`} href="https://github.com/kangfennex" target="_blank" rel="noreferrer">
            <BsGithub size={40} />
          </a>
          <a className={`contact__socials-linkedin ${lightMode ? "light-mode" : "dark-mode"}`} href="https://www.linkedin.com/in/michel-marion/" target="_blank" rel="noreferrer">
            <BsLinkedin size={40} />
          </a>
          <a className={`contact__socials-insta ${lightMode ? "light-mode" : "dark-mode"}`} href="https://www.instagram.com/michelkm19/" target="_blank" rel="noreferrer">
            <BsInstagram size={40} />
          </a>
        </div>
        <div className={`contact__copyright ${lightMode ? "light-mode" : "dark-mode"}`}>
          <h4>Copyright Kangkm 2025</h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
