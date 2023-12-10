import "../../sass/components/_index.scss"
import { PiArrowFatLinesDownFill } from "react-icons/pi";
import { LightModeContext } from "../utils/LightModeContext";
import { useContext } from "react";
import useWindowSize, { width } from "../utils/useWindowSize"

const ArrowDown = () => {
  const { lightMode } = useContext(LightModeContext);
  const width = useWindowSize()

  return (
    <div>
      <PiArrowFatLinesDownFill
        size={width > 768 ? 55 : 45}
        className={`arrow bounce ${lightMode ? "light-mode" : "dark-mode"}`}
      />
    </div>
  );
};

export default ArrowDown;
