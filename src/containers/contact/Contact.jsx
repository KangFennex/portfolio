import "../../sass/pages/_index.scss"
import ContactForm from "../../components/contactForm/ContactForm";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import ContactPole from "../../components/contactPole/ContactPole";
import useWindowSize from "../../components/utils/useWindowSize";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

const Contact = () => {
  const { width } = useWindowSize();
  const [showContact, setShowContact] = useState(false);

  const handleShowContact = () => {
    setShowContact(true)
  }

  const handleCloseContact = () => {
    setShowContact(false);
  };

  return (
    <div id="contact" className="contact">
      {width < 768 && (
        <>
          <button className="contact__button bounce" onClick={() => handleShowContact()}>Get in touch</button>
          <div className="overlay" style={{ display: showContact ? "flex" : "none" }}>
            <div className="modal">
              <IoCloseSharp size={45} onClick={handleCloseContact} className="contact__close"/>
              <ContactForm />
            </div>
          </div>
          <div className="contact__socials">
          <a href="https://github.com/kangfennex" target="_blank" rel="noreferrer">
          <BsGithub size={40} />
          </a>
          <a href="https://www.linkedin.com/in/michel-marion/" target="_blank" rel="noreferrer">
          <BsLinkedin size={40} />
          </a>
          <a href="https://www.instagram.com/michelkm19/" target="_blank" rel="noreferrer">
          <BsInstagram size={40} />
          </a>
          </div>
        </>
      )}
      {width > 768 && (
        <>
          <SectionTitle title="Get in touch" subtitle="Contact" />
          <div className="contact__container">
          <div className="contact__container__contact-form">
            <ContactForm />
          </div>
          <div className="contact__container__contact-pole">
            <ContactPole />
          </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;
