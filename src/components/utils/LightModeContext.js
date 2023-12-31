import { createContext, useState } from "react";

const LightModeContext = createContext();

const LightModeProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(false);

  const toggleLightMode = () => {
    setLightMode(!lightMode);
  };

  return (
    <LightModeContext.Provider value={{ lightMode, toggleLightMode }}>
      {children}
    </LightModeContext.Provider>
  );
};

export { LightModeContext, LightModeProvider };
