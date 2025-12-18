import "../../sass/pages/_index.scss"
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { useContext } from "react";
import Button from "../../components/button/Button";
import { LightModeContext } from "../../components/utils/LightModeContext";
import { currentProjects, skills } from "../../constants/constants";
import { Link } from "react-router-dom";

const Current = ({ setDisplayCurrentProject }) => {
    const { lightMode } = useContext(LightModeContext);

    const handleClickCurrentProject = (id) => {
        setDisplayCurrentProject(id)
    }

    return (
        <nav id="current" className="current">
            <SectionTitle title="What I'm up to" />
            <div className="current__container">
                <div className="current__container__header">
                    <h4>PROJECT</h4>
                    <h4 className="current__container__header__tech">TECH</h4>
                    <h4>DESCRIPTION</h4>
                </div>
                {currentProjects.map((item) => (
                    <Link to="/projects" aria-label="Navigate to this project" className="current__container__link" onClick={() => handleClickCurrentProject(item.id)}>
                    <div key={item.id} className="current__container__item">
                        <div className="current__container__item__inner-wrapper">
                        <h3 className={`current__container__item__title ${lightMode ? "light-mode" : "dark-mode"}`}>{item.title}</h3>
                        <div className="current__container__item__tech">
                            {item.tech && item.tech.map((icon, index) => {
                                const techName = skills.find(skill => skill.icon === icon)?.label || '';
                                return (
                                    <div key={index} className="current__container__item__tech__wrapper">
                                        <img 
                                            src={icon} 
                                            alt={`tech-${index}`}
                                            className="current__container__item__tech__icon"
                                        />
                                        <span className={`current__container__item__tech__label ${lightMode ? "light-mode" : "dark-mode"}`}>
                                            {techName}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                        <p className={`current__container__item__description ${lightMode ? "light-mode" : "dark-mode"}`}>{item.description}</p>
                        </div>
                        <div className="current__container__item__img">
                            <img src={item.image} alt={`${item.title} Visual`}/>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
            <div className="current__button">
                <Link to="/projects" aria-label="Navigate to all projects" style={{ textDecoration: 'none' }}>
                <Button 
                    text="All Projects"
                    minWidth={true}
                    link="/projects"
                />
                </Link>
            </div>
        </nav>
    );
};

export default Current;