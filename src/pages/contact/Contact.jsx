import "../../sass/pages/_index.scss"
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <div className="contact__container">
        <div className="contact__socials">
          <a className="contact__socials-github" href="https://github.com/kangfennex" target="_blank" rel="noreferrer">
            <BsGithub size={40} />
          </a>
          <a className="contact__socials-linkedin" href="https://www.linkedin.com/in/michel-marion/" target="_blank" rel="noreferrer">
            <BsLinkedin size={40} />
          </a>
          <a className="contact__socials-insta" href="https://www.instagram.com/michelkm19/" target="_blank" rel="noreferrer">
            <BsInstagram size={40} />
          </a>
        </div>
        <div className="contact__copyright">
          <h4>Copyright Kangkm 2025</h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
