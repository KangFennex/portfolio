import "../../sass/pages/_index.scss"
import ContactForm from "../../components/contactForm/ContactForm";
import { useState, useRef, useEffect, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { LightModeContext } from "../../components/utils/LightModeContext";

const Contact = () => {
  const [showContact, setShowContact] = useState(false);
  const { lightMode } = useContext(LightModeContext)
  const modalRef = useRef();

  const handleClick = () => {
    setShowContact(!showContact)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the click target contains the icon element
      const iconEl = document.querySelector(".contact__close");
      if (iconEl && iconEl.contains(event.target)) {
        return;
      }

      // Make the menu disappear if you click outside of it
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowContact(false);
      }
    }

    function handleMouseDown(event) {
      handleClickOutside(event);
    }

      document.addEventListener("mousedown", handleMouseDown);

      return () => {
        document.removeEventListener("mousedown", handleMouseDown);
      }
    
  }, [modalRef, setShowContact]);

  const showModal = {
    hidden:  {
      opacity: 0,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  }

  return (
    <div id="contact" className="contact">
      <>
        <button
        className={`contact__button ${lightMode ? "light-mode" : "dark-mode"} bounce`}
        onClick={() => handleClick()}>Get in touch</button>
        <AnimatePresence>
          {showContact && (
            <div className="contact__overlay">
            <motion.div
              className="contact__modal"
              ref={modalRef}
              variants={showModal}
              initial="hidden"
              animate="visible"
              exit="exit"
              >
              <IoCloseSharp size={45} onClick={() => handleClick()} className="contact__close" />
              <ContactForm />
            </motion.div>
          </div>
          )}
        
        </AnimatePresence>
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
          <h4>Copyright Kangkm 2024</h4>
        </div>
      </>
    </div>
  );
};

export default Contact;
