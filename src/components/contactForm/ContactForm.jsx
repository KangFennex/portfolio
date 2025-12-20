import "../../sass/components/_index.scss";
import { useContext, useState } from "react";
import { LightModeContext } from "../../components/utils/LightModeContext";
import emailjs from "emailjs-com";
import { useRef } from "react";
import { PiCactusBold } from "react-icons/pi";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;

// Current error: Error: Gmail_API: Request had insufficient authentication scopes.

const ContactForm = () => {
  const form = useRef();
  const { lightMode } = useContext(LightModeContext);
  const [statusMessage, setStatusMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatusMessage("");

    // Debug logging
    console.log("Environment variables:");
    console.log("SERVICE_ID:", SERVICE_ID);
    console.log("TEMPLATE_ID:", TEMPLATE_ID);
    console.log("PUBLIC_KEY:", PUBLIC_KEY);
    console.log("Form data:", form.current);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log("Success!", result);
        setStatusMessage("Message sent successfully! I'll get back to you soon.");
        setIsError(false);
        setIsLoading(false);
        e.target.reset();
      },
      (error) => {
        console.log("Error details:", error);
        setStatusMessage(`Error: ${error.text || "Something went wrong. Please try again."}`);
        setIsError(true);
        setIsLoading(false);
      }
    );
  };

  return (
    <div className="contact-form">
      <div className="contact-form__container">
        <form ref={form} onSubmit={handleOnSubmit}>
          <PiCactusBold className={`contact-form__icon ${lightMode ? "light-mode" : "dark-mode"}`} size={80} />
          
          {statusMessage && (
            <div style={{
              padding: "1rem",
              marginBottom: "1rem",
              borderRadius: "8px",
              backgroundColor: isError ? "rgba(231, 111, 81, 0.2)" : "rgba(80, 200, 120, 0.2)",
              color: isError ? "#e76f51" : "#50c878",
              border: `2px solid ${isError ? "#e76f51" : "#50c878"}`,
              textAlign: "center",
              fontWeight: "600"
            }}>
              {statusMessage}
            </div>
          )}

          <input
            className={`contact-form__name-input contact-form__input ${lightMode ? "light-mode" : "dark-mode"}`}
            type="text"
            name="from_name"
            placeholder="Name"
            required
            disabled={isLoading}
          />
          <input
            className={`contact-form__email-input contact-form__input ${lightMode ? "light-mode" : "dark-mode"}`}
            type="email"
            name="from_email"
            placeholder="Email"
            required
            disabled={isLoading}
          />
          <textarea
            className={`contact-form__message-input contact-form__input ${lightMode ? "light-mode" : "dark-mode"}`}
            name="message"
            placeholder="Message"
            required
            disabled={isLoading}
          />
          <input
            className={`contact-form__submit ${lightMode ? "light-mode" : "dark-mode"} bounce`}
            type="submit"
            value={isLoading ? "Sending..." : "Send"}
            disabled={isLoading}
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
