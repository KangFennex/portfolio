import { useContext } from "react";
import { NavbarEls } from "./config";
import { LightModeContext } from "../../components/utils/LightModeContext";
import { motion } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../../sass/layouts/_index.scss";

export const NavbarMenu = ({ onClick }) => {
  const { lightMode } = useContext(LightModeContext);
  const navigate = useNavigate();
  const location = useLocation();

  const handleAnchorClick = (e, link) => {
    e.preventDefault();
    
    const sectionId = link.replace('#', '');
    
    // If we're not on the main page, navigate there first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    // Close the menu if onClick function is provided
    if (onClick) onClick();
  };

  return (
    <div className="navbar__container__menu__items ">
      {NavbarEls.map((navbarEl, index) => (
        <div key={index}>
          <motion.div
            whileHover={{
              scale: 1.035,
            }}
            transition={{ type: "tween" }}
          >
            {navbarEl.isRoute ? (
              <Link
                className={`navbar__container__menu__item ${lightMode ? "light-mode" : "dark-mode"
                  } `}
                to={navbarEl.link}
                onClick={onClick}
              >
                {navbarEl.title}
              </Link>
            ) : (
              <a
                className={`navbar__container__menu__item ${lightMode ? "light-mode" : "dark-mode"
                  } `}
                href={navbarEl.link}
                onClick={(e) => handleAnchorClick(e, navbarEl.link)}
              >
                {navbarEl.title}
              </a>
            )}

            <div className="navbar__container__menu__item__bar"></div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default NavbarMenu;
