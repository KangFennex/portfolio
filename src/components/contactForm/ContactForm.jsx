import "../../sass/components/_index.scss"
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { useRef } from "react";
import { GiDesert } from "react-icons/gi";
const SERVICE_ID = process.env.SERVICE_ID;
const TEMPLATE_ID = process.env.TEMPLATE_ID;
const PUBLIC_KEY = process.env.PUBLIC_KEY;


const ContactForm = () => {
  const form = useRef();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div className="contact-form">
      <div className="contact-form__container">
        <form ref={form} onSubmit={handleOnSubmit}>
          <GiDesert className="contact-form__icon" size={60} />
          <input
            className="contact-form__name-input contact-form__input"
            type="text"
            name="from_name"
            placeholder="Name"
            required
          />
          <input
            className="contact-form__email-input contact-form__input"
            type="email"
            name="from_email"
            placeholder="Email"
            required
          />
          <textarea
            className="contact-form__message-input contact-form__input"
            name="message"
            placeholder="Message"
            required
          />
          <input
            className="contact-form__submit bounce"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
