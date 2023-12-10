import "../../sass/pages/_index.scss"
import ContactForm from "../../components/contactForm/ContactForm";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import ContactPole from "../../components/contactPole/ContactPole";

const Contact = () => {
  return (
    <div id="contact" className="contact">
      <SectionTitle title="Get in touch" subtitle="Contact" />
      <div className="contact__container">
        <div className="contact__container__contact-form">
          <ContactForm />
        </div>
        <div className="contact__container__contact-pole">
          <ContactPole />
        </div>
      </div>
    </div>
  );
};

export default Contact;
