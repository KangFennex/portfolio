import { useState, useEffect, useRef } from "react";

const useMenuLogic = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [isFlipped, setFlipped] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuVisible(false);
        setFlipped(!isFlipped);
      }
    }

    function handleWindowResize() {
      setMenuVisible(false);
      setFlipped(!isFlipped);
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return { isMenuVisible, setMenuVisible, setFlipped, menuRef };
};

export default useMenuLogic;
