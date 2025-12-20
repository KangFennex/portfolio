import "../../sass/pages/_index.scss";
import SectionTitle from "../../components/sectionTitle/SectionTitle";
import { projects } from "../../constants/constants";
import { useEffect, useState, useRef, useContext } from "react";
import { PiArrowFatLinesLeftBold, PiArrowFatLinesRightBold } from "react-icons/pi";
import useWindowSize from "../../components/utils/useWindowSize";
import { BiExpand } from "react-icons/bi";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { LightModeContext } from "../../components/utils/LightModeContext";

const Projects = ({ displayCurrentProject, setDisplayCurrentProject }) => {
  const [expand, setExpand] = useState(false);
  const [selectedProject, setSelectedProject] = useState(displayCurrentProject ? displayCurrentProject : null);
  const [startIndex, setStartIndex] = useState(0);
  const { width } = useWindowSize();
  const { lightMode } = useContext(LightModeContext);
  const largeWidth = width > 768 ? true : false;
  const projectsPerPage = largeWidth ? 2 : 2;
  const modalRef = useRef();
  const [flipCards, setFlipCards] = useState(false);

  // Preload all project images
  useEffect(() => {
    projects.forEach((project) => {
      const img = new Image();
      img.src = project.image;
    });
  }, []);

  const handleExpand = (id) => {
    const project = projects.find((project) => project.id === id);
    if (expand) {
      setTimeout(() => {
        setExpand(!expand)
      }, 300)
    } else {
      setExpand(!expand)
    }
    if (displayCurrentProject) {
      setDisplayCurrentProject(null)
    }
    setSelectedProject(project)
  }

  useEffect(() => {
    if (displayCurrentProject) {
      // Find the index of the project in the projects array
      const projectIndex = projects.findIndex(p => p.id === displayCurrentProject);

      if (projectIndex !== -1) {
        // Calculate which "page" this project is on
        const targetPage = Math.floor(projectIndex / projectsPerPage);
        const targetStartIndex = targetPage * projectsPerPage;

        // Set the start index to show the correct page
        setStartIndex(targetStartIndex);

        // Find and set the selected project
        const project = projects.find(p => p.id === displayCurrentProject);
        setSelectedProject(project);
        setExpand(true);
      }
    }
  }, [displayCurrentProject, projectsPerPage])

  const handleNext = () => {
    const newIndex = Math.min(startIndex + projectsPerPage, projects.length - projectsPerPage);
    if (newIndex !== startIndex) {
      setFlipCards(true);
      setTimeout(() => {
        setStartIndex(newIndex);
      }, 600);
    }
  };

  const handlePrevious = () => {
    const newIndex = Math.max(startIndex - projectsPerPage, 0);
    if (newIndex !== startIndex) {
      setFlipCards(true);
      setTimeout(() => {
        setStartIndex(newIndex);
      }, 600);
    }
  };

  useEffect(() => {
    if (flipCards) {
      setTimeout(() => {
        setFlipCards(false);
      }, 400);
    }
  }, [flipCards]);

  useEffect(() => {
    function handleClickOutside(event) {

      // Make the menu disappear if you click outside of it
      if (modalRef.current && !modalRef.current.contains(event.target) && expand) {
        if (expand) {
          setTimeout(() => {
            setExpand(!expand)
          }, 300)
        } else {
          setExpand(!expand)
        }
      }
    }

    function handleMouseDown(event) {
      handleClickOutside(event);
    }

    document.addEventListener("mousedown", handleMouseDown);

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    }

  }, [modalRef, expand, setExpand]);

  return (
    <div id="projects" className="projects">
      <SectionTitle title="Projects" />
      <div className="projects-container">
        {!expand && (
          <div
            className={`projects-container__arrows-prev ${lightMode ? "light-mode" : "dark-mode"}`}>
            <PiArrowFatLinesLeftBold
              size={largeWidth ? 50 : 35}
              onClick={handlePrevious}
              disabled={startIndex === 0}
            />
          </div>
        )}
        <div className="projects-container__container">
          {!expand &&
            projects
              .slice(startIndex, startIndex + projectsPerPage)
              .map((project, i) => (
                <div
                  className={`projects-container__mini-card ${flipCards ? 'flipped' : ''}`}
                  key={i}
                >
                  <BiExpand
                    size={35}
                    className="projects-container__mini-card__icon"
                    onClick={() => handleExpand(project.id)}
                  />
                  <img
                    src={project.image}
                    className="projects-container__mini-card__img"
                    alt="Project"
                  />
                  <div className={`projects-container__mini-card__description ${lightMode ? "light-mode" : "dark-mode"}`}>
                    <div className="projects-container__mini-card__title">
                      <h2 className={`${lightMode ? "light-mode" : "dark-mode"}`}>{project.title}</h2>
                      <h3 className={`${lightMode ? "light-mode" : "dark-mode"}`}>{project.subtitle}</h3>
                    </div>
                  </div>
                </div>
              ))}
        </div>

        {expand && selectedProject && (
          <div className="projects-container__overlay">
            <div
              className="projects-container__modal"
              ref={modalRef}
            >
              <ProjectCard
                expand={expand}
                handleExpand={handleExpand}
                id={selectedProject.id}
                title={selectedProject.title}
                subtitle={selectedProject.subtitle}
                image={selectedProject.image}
                summary={selectedProject.summary}
                features={selectedProject.features}
                technologies={selectedProject.technologies}
                link={selectedProject.link}
              />
            </div>
          </div>
        )}

        {!expand && (
          <div
            className={`projects-container__arrows-next ${lightMode ? "light-mode" : "dark-mode"}`}>
            <PiArrowFatLinesRightBold
              size={largeWidth ? 50 : 35}
              onClick={handleNext}
              disabled={startIndex + projectsPerPage >= projects.length}
            />
          </div>
        )}

        {!largeWidth && !expand && (
          <span className={`projects-container__arrows--mobile ${lightMode ? "light-mode" : "dark-mode"}`}>
            <PiArrowFatLinesLeftBold
              size={largeWidth ? 50 : 35}
              onClick={handlePrevious}
              disabled={startIndex === 0}
            />
            <PiArrowFatLinesRightBold
              size={largeWidth ? 50 : 35}
              onClick={handleNext}
              disabled={startIndex + projectsPerPage >= projects.length}
            />
          </span>
        )}
      </div>
    </div>
  );
};

export default Projects;
