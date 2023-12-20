import "../../sass/components/_index.scss"
import { GiSoundOff, GiSoundOn } from "react-icons/gi";
import { useRef, useEffect, useContext, useState } from "react";
import soundFile from "../../assets/sound/desert-monolith-6369.mp3";
import { LightModeContext } from "../utils/LightModeContext";

const SoundControl = () => {
  const audioRef = useRef();
  const { lightMode } = useContext(LightModeContext);
  const [soundIsOn, setSoundIsOn] = useState(false);

  useEffect(() => {
    const audio = new Audio(soundFile);
    if (soundIsOn) {
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause();
    };
  }, [soundIsOn]);

  const handleSoundIsOn = () => {
    setSoundIsOn(!soundIsOn);
  };

  return (
    <>
      <audio src={audioRef}></audio>
      {soundIsOn ? (
        <div>
          <GiSoundOn
            size={50}
            onClick={() => handleSoundIsOn()}
            className={`sound-icon ${lightMode ? "light-mode" : "dark-mode"}`}
          />
        </div>
      ) : (
        <div>
          <GiSoundOff
            size={50}
            onClick={() => handleSoundIsOn()}
            className={`sound-icon ${lightMode ? "light-mode" : "dark-mode"}`}
          />
        </div>
      )}
    </>
  );
};

export default SoundControl;
