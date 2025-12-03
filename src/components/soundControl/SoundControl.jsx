import "../../sass/components/_index.scss"
import { GiSoundOff, GiSoundOn } from "react-icons/gi";
import { useContext } from "react";
import { LightModeContext } from "../utils/LightModeContext";
import { SoundContext } from "../utils/SoundContext";

const SoundControl = () => {
  const { lightMode } = useContext(LightModeContext);
  const { soundIsOn, toggleSound } = useContext(SoundContext);
  return (
    <>
      {soundIsOn ? (
        <div>
          <GiSoundOn
            size={50}
            onClick={toggleSound}
            className={`sound-icon ${lightMode ? "light-mode" : "dark-mode"}`}
          />
        </div>
      ) : (
        <div>
          <GiSoundOff
            size={50}
            onClick={toggleSound}
            className={`sound-icon ${lightMode ? "light-mode" : "dark-mode"}`}
          />
        </div>
      )}
    </>
  );
};

export default SoundControl;
