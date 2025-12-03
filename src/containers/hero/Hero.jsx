import "../../sass/pages/_index.scss"
//import HeroText from "../../components/heroText/HeroText"
import { GiOasis } from "react-icons/gi";
import { useContext } from "react";
import { LightModeContext } from "../../components/utils/LightModeContext";
import ContactModal from "../../components/contactModal/ContactModal";
import HeroText from "../../components/heroText/HeroText2";

const Hero = () => {
  const { lightMode } = useContext(LightModeContext);

  return (
    <section className="hero">
      <div className="hero__container">
        <h4 className={`hero__container__intro__h1 mario-font ${lightMode ? "light-mode" : "dark-mode"}`}>Michel Marion</h4>
        <div className={`hero__container__intro ${lightMode ? "light-mode" : "dark-mode"}`}>
          <HeroText />
          <GiOasis className="hero__container__intro__icon" size={80} style={{ color: 'var(--orange)' }} />
          <p>A Fennec logo, a Super Mario font, and a desert theme? Come on in, just kick off your sandals, grab a refreshing cactus drink, and take shelter from the blazing sun.</p>
          <div className="hero__container__contact">
            <ContactModal buttonText="Get in touch" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
