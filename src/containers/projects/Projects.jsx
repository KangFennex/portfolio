import "../../sass/pages/_index.scss"
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { projects } from "../../Constants/constants";
import { useState } from "react";
import { PiArrowFatLinesLeftBold, PiArrowFatLinesRightBold } from "react-icons/pi";
import useWindowSize from "../../components/utils/useWindowSize";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { motion, AnimatePresence } from "framer-motion"

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [expand, setExpand] = useState(false);
  const [startIndex, setStartIndex] = useState(0);
  const { width } = useWindowSize();
  const [pageHold, setPageHold] = useState(0);
  const largeWidth = width > 768 ? true : false;
  const projectsPerPage = largeWidth ? 6 : 2;

  const handleExpand = (id) => {
    if (!expand) {
      const filtered = projects.filter((project) => project.id === id);
      setFilteredProjects(filtered);
      setPageHold(startIndex);
      setStartIndex(0);
    } else {
      setFilteredProjects(projects);
      setStartIndex(pageHold);
    }   setExpand(!expand);
  };

  const handleNext = () => {
    const newIndex = Math.min(startIndex + projectsPerPage, projects.length - projectsPerPage);
    setStartIndex(newIndex);
  };

  const handlePrevious = () => {
    const newIndex = Math.max(startIndex - projectsPerPage, 0);
    setStartIndex(newIndex);
  };

  return (
    <div id="projects" className="projects">
      <SectionTitle title="Stuff I've built" subtitle="Projects" />
      <div className="projects__container">
        {!expand && (
          <div
            className="projects__container__arrows-prev">
            <PiArrowFatLinesLeftBold
              size={largeWidth ? 50 : 35}
              onClick={handlePrevious}
              disabled={startIndex === 0}
            />
          </div>
        )}
        <AnimatePresence>
          {filteredProjects
            .slice(startIndex, startIndex + projectsPerPage)
            .map((project, i) => {
              return (
                <motion.div
                  key={i}
                  layout
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{ type: 'spring', damping: 10, stiffness: 100, duration: 0.3 }}
                >
                  <ProjectCard
                    expand={expand}
                    handleExpand={handleExpand}
                    id={project.id}
                    title={project.title}
                    subtitle={project.subtitle}
                    image={project.image}
                    summary={project.summary}
                    features={project.features}
                    technologies={project.technologies}
                    link={project.link} />
                </motion.div>
              )
            })}
        </AnimatePresence>
        {!expand && (
          <div
            className="projects__container__arrows-next">
            <PiArrowFatLinesRightBold
              size={largeWidth ? 50 : 35}
              onClick={handleNext}
              disabled={startIndex + projectsPerPage >= projects.length}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
