import "../../sass/pages/_index.scss"
import Fennec from "../../components/fennec/Fennec";
import HeroText from "../../components/heroText/HeroText"


const Hero = () => {
  return (
    <nav className="hero">
      <div className="hero__container">
        <div className="hero__container__intro">
          <HeroText />
        </div>
        <Fennec />
      </div>
    </nav>
  );
};

export default Hero;
