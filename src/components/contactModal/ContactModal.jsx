import { useState, useRef, useEffect, useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IoCloseSharp } from "react-icons/io5";
import { LightModeContext } from "../utils/LightModeContext";
import ContactForm from "../contactForm/ContactForm";
import "./contactModal.scss";

const ContactModal = ({ buttonText = "Get in touch" }) => {
    const [showContact, setShowContact] = useState(false);
    const { lightMode } = useContext(LightModeContext);
    const modalRef = useRef();

    const handleClick = () => {
        setShowContact(!showContact);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            // Check if the click target contains the icon element
            const iconEl = document.querySelector(".contact-modal__close");
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
        };
    }, [modalRef, setShowContact]);

    const showModal = {
        hidden: {
            opacity: 0,
            scale: 0.9,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.2,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: 0.2,
            },
        },
    };

    return (
        <>
            <button
                className={`contact-modal__button ${lightMode ? "light-mode" : "dark-mode"} bounce`}
                onClick={() => handleClick()}
            >
                {buttonText}
            </button>
            <AnimatePresence>
                {showContact && (
                    <div className="contact-modal__overlay">
                        <motion.div
                            className="contact-modal__modal"
                            ref={modalRef}
                            variants={showModal}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                        >
                            <IoCloseSharp
                                size={45}
                                onClick={() => handleClick()}
                                className="contact-modal__close"
                            />
                            <ContactForm />
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ContactModal;
