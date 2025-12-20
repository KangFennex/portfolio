import "../../sass/components/_index.scss"
import { BiExpand } from "react-icons/bi";
import { AnimatePresence, motion } from "framer-motion";
import { useContext } from "react";
import { LightModeContext } from "../utils/LightModeContext";

const ProjectCard = ({ handleExpand, id, title, subtitle, image, summary, features, technologies, link }) => {
    const { lightMode } = useContext(LightModeContext);

    return (
        <>
        <AnimatePresence>
            <motion.div
                key={id}
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: 'spring', ease: 0.32, damping: 10, stiffness: 40 }}
                className={`project-card ${lightMode ? "light-mode" : "dark-mode"}`}
            >
                <BiExpand
                    size={35}
                    className="project-card__icon "
                    onClick={() => {
                        handleExpand(id)
                    }}
                />

                <img
                    src={image}
                    alt="project"
                    className="project-card__img"
                />
                <div className={`project-card__description ${lightMode ? "light-mode" : "dark-mode"}`}>
                    <div className="project-card__title">
                        <h2 className={`${lightMode ? "light-mode" : "dark-mode"}`}>{title}</h2>
                        <h3 className={`${lightMode ? "light-mode" : "dark-mode"}`}>{subtitle}</h3>
                    </div>
                    <div className="project-card__summary">
                        <h2 className={`${lightMode ? "light-mode" : "dark-mode"}`}>Summary</h2>
                        <p className={`${lightMode ? "light-mode" : "dark-mode"}`}>{summary}</p>
                    </div>
                    <div className="project-card__features">
                        <h2 className={`${lightMode ? "light-mode" : "dark-mode"}`}>Features</h2>
                        <div className="project-card__features-items">
                            {features.map((feature, i) => {
                                return <h3 className={`${lightMode ? "light-mode" : "dark-mode"}`} key={i}>{feature}</h3>;
                            })}
                        </div>
                    </div>
                    <div className="project-card__tech">
                        <div className="project-card__tech-items">
                            <h2 className={`${lightMode ? "light-mode" : "dark-mode"}`}>Tech used</h2>
                            <div>
                                {technologies.map((tech, i) => {
                                    return (
                                        <img
                                            key={i}
                                            src={tech}
                                            alt="Tech used" />
                                    )
                                })}
                            </div>
                        </div>
                        <div className="project-card__links">
                            <a
                                href={link}
                                rel="noReferrer"
                                target="_blank"
                                className={`mario-font ${lightMode ? "light-mode" : "dark-mode"}`}
                            >
                                DEMO
                            </a>
                            <div className="project-card__links-bar"></div>
                        </div>
                    </div>

                </div>
            </motion.div>
            </AnimatePresence>
        </>
    )
}

export default ProjectCard
