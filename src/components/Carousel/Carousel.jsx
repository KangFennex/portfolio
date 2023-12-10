import "./carousel.scss"
import { projects } from "../../Constants/constants";
import { useState } from "react";
import { PiArrowFatLinesLeftBold, PiArrowFatLinesRightBold } from "react-icons/pi";
import ProjectCard from "../projectCard/ProjectCard";
import { motion, useAnimation } from "framer-motion"

const Carousel = () => {
    const [expand, setExpand] = useState(false);
    const handleExpand = () => {
        setExpand(!expand)
    }
    let [index, setIndex] = useState(0);

    const controls = useAnimation();

    const handleSlide = (newIndex) => {
        setIndex(newIndex);
        controls.start({ x: -newIndex * 1150 })
    }

    return (
        <div className="carousel">

            <div className="carousel__nav-buttons">
                <PiArrowFatLinesLeftBold
                    size={40}
                    onClick={() => handleSlide(index - 1)}
                />
                <PiArrowFatLinesRightBold size={40}
                    onClick={() => handleSlide(index + 1)}
                />
            </div>
            <div className="carousel__outer-container">
                <motion.div
                    initial={{ x: 0 }}
                    animate={controls}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", damping: 15, stiffness: 100 }}
                    className="carousel__container"
                >
                    {projects.map((project, i) => {
                        return (
                            <div
                            >
                                <ProjectCard
                                    expand={expand}
                                    handleExpand={handleExpand}
                                    title={project.title}
                                    subtitle={project.subtitle}
                                    image={project.image}
                                    summary={project.summary}
                                    features={project.features}
                                    technologies={project.technologies}
                                    link={project.link}
                                />
                            </div>
                        )

                    })
                    }
                </motion.div>
            </div>
        </div>
    )
}

export default Carousel
