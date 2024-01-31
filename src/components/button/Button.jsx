import "../../sass/components/_index.scss"
import { useContext } from "react";
import { LightModeContext } from "../utils/LightModeContext";


const Button = ({ text, onClick }) => {
    const { lightMode } = useContext(LightModeContext);

    return (
        <div>
            <button className={`skills-button ${lightMode ? "light-mode" : "dark-mode"} bounce`} onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

export default Button
