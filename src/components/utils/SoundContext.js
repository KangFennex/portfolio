import soundFile from "../../assets/sound/desert-monolith-6369.mp3";
import { createContext, useState, useEffect, useRef } from "react";

const SoundContext = createContext();

const SoundProvider = ({ children }) => {
    const [soundIsOn, setSoundIsOn] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio(soundFile);
            audioRef.current.loop = true;
        }

        if (soundIsOn) {
            audioRef.current.play().catch(err => console.log('Audio play failed:', err));
        } else {
            audioRef.current.pause();
        }

        // Cleanup on unmount
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        };
    }, [soundIsOn]);

    const toggleSound = () => {
        setSoundIsOn(!soundIsOn);
    };

    return (
        <SoundContext.Provider value={{ soundIsOn, toggleSound }}>
            {children}
        </SoundContext.Provider>
    );
};

export { SoundContext, SoundProvider };