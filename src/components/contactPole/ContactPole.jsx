import "../../sass/components/_index.scss"
import pole from "../../assets/background/pole.png";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";


const ContactPole = () => {
  return (
    <div className="contact-pole">
      <div className="contact-pole__container">
        <img
          src={pole}
          alt="pole"
          className="contact-pole__img"
        />

        <div className="contact-pole__follow">
          <h2>Follow me</h2>
        </div>
        <div>
          <h2 className="contact-pole__github-h2">
            GitHub
          </h2>
          <a href="https://github.com/kangfennex" target="_blank" rel="noreferrer">
          <BsGithub
            size={25}
            className="contact-pole__github"
          />
        </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/michel-marion/" target="_blank" rel="noreferrer">
          <BsLinkedin
            size={25}
            className="contact-pole__linkedin"
          />
          </a>
          <h2 className="contact-pole__linkedin-h2">
            LinkedIn
          </h2>
        </div>
        <div>
          <h2 className="contact-pole__instagram-h2">
            Insta
          </h2>
          <a href="https://www.instagram.com/michelkm19/" target="_blank" rel="noreferrer">
          <BsInstagram
            size={25}
            className="contact-pole__instagram"
          />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactPole
