import "../../sass/components/_index.scss"
import { BiExpand } from "react-icons/bi";
import { motion } from "framer-motion";

const ProjectCard = ({ handleExpand, id, title, subtitle, image, summary, features, technologies, link }) => {

    return (
        <>
            <motion.div
                key={id}
                initial={{ scale: 0.6 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{ type: 'spring', ease: 0.32, damping: 10, stiffness: 40 }}
                className={`project-card`}
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
                <div className="project-card__description">
                    <div className="project-card__title">
                        <h2>{title}</h2>
                        <h3>{subtitle}</h3>
                    </div>
                    <div className="project-card__summary">
                        <h2>Summary</h2>
                        <h3>{summary}</h3>
                    </div>
                    <div className="project-card__features">
                        <h2>Features</h2>
                        <div className="project-card__features-items">
                            {features.map((feature, i) => {
                                return <h3 key={i}>{feature}</h3>;
                            })}
                        </div>
                    </div>
                    <div className="project-card__tech">
                        <div className="project-card__tech-items">
                            <h2>Tech used</h2>
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
                            >
                                DEMO
                            </a>
                            <div className="project-card__links-bar"></div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </>
    )
}

export default ProjectCard
