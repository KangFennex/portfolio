import "../../sass/layouts/_index.scss";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef, useContext } from "react";
import useWindowSize from "../../components/utils/useWindowSize";
import logo from "../../assets/logo/Renard-logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { Themes } from "../../components/themes/themes";
import { LightModeContext } from "../../components/utils/LightModeContext";
import { NavbarMenu } from "./navbarMenu";
import SoundControl from "../../components/soundControl/SoundControl";


const Navbar = () => {
  const { width } = useWindowSize();
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isFlipped, setFlipped] = useState(false);
  const { lightMode } = useContext(LightModeContext);
  const handleClick = () => {
    setMenuVisible(!isMenuVisible);
    setFlipped(!isFlipped);
  };
  const menuRef = useRef();

  const closeMenu = () => {
    setMenuVisible(false)
  }

  useEffect(() => {
    function handleClickOutside(event) {
      // Check if the click target contains the icon element
      const iconEl = document.querySelector(".navbar__container__menu__icon");
      if (iconEl && iconEl.contains(event.target)) {
        return;
      }

      // Make the menu disappear if you click outside of it
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
        setFlipped(!isFlipped);
      }
    }

    // Make the menu disappear if you resize the screen
    function handleWindowResize() {
      closeMenu();
      setFlipped(!isFlipped);
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [isFlipped]);

  // Animation to have the menu appear and then slow down
  const springFromRight = {
    hidden: {
      x: 300,
    },
    visible: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        mass: 0.4,
        damping: 8,
      },
    },
    exit: {
      x: 300,
      transition: {
        type: "spring",
        stiffness: 50,
        mass: 0.4,
        damping: 8,
      },
    },
  };

  return (
    <div className="navbar">
      <div className="navbar__container">
        <Link
          to="/"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          className="navbar__container__logo"
        >
          <div>
            <img
              src={logo}
              alt="Renard Logo"
              className={`navbar__container__logo__img ${lightMode ? "light-mode" : "dark-mode"
                }`}
            />
          </div>
        </Link>
        {width < 768 && (
          <div>
            <HiMenuAlt3
              size={45}
              style={{ opacity: "86%" }}
              className={`navbar__container__menu__icon ${isFlipped ? "flipped" : ""
                } ${lightMode ? "light-mode" : "dark-mode"}`}
              onClick={handleClick}
            />
          </div>
        )}
<AnimatePresence>
        {isMenuVisible && (
          <motion.div
            className={`navbar__container__menu ${lightMode ? "light-mode" : "dark-mode"
              }`}
            ref={menuRef}
            variants={springFromRight}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="navbar__container__menu__close">
            <IoCloseSharp size={40} onClick={closeMenu} />
            </div>
            <NavbarMenu onClick={closeMenu} />

            <div className="navbar__container__menu__themes-sound">
            <Themes />
            <SoundControl />
            </div>
            
          </motion.div>
        )}
</AnimatePresence>
        {width > 768 && (
          <>
            <NavbarMenu />
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
