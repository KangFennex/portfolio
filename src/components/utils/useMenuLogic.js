import { useState, useEffect, useRef } from "react";

const useMenuLogic = () => {
  const [isElemVisible, setElemVisible] = useState(false);
  const [isFlipped, setFlipped] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (elementRef.current && !elementRef.current.contains(event.target)) {
        setElemVisible(false);
        setFlipped(!isFlipped);
      }
    }

    function handleWindowResize() {
      setElemVisible(false);
      setFlipped(!isFlipped);
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleWindowResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return { isElemVisible, setElemVisible, setFlipped, elementRef };
};

export default useMenuLogic;
