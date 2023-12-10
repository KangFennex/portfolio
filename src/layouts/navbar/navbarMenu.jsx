import { useContext } from "react";
import { NavbarEls } from "./config";
import { LightModeContext } from "../../components/utils/LightModeContext";
import { motion } from "framer-motion";
import "../../sass/layouts/_index.scss";

export const NavbarMenu = () => {
  const { lightMode } = useContext(LightModeContext);

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
            <a
              className={`navbar__container__menu__item ${lightMode ? "light-mode" : "dark-mode"
                } `}
              href={navbarEl.link}
            >
              {navbarEl.title}
            </a>

            <div className="navbar__container__menu__item__bar"></div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default NavbarMenu;
