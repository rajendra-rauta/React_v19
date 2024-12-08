import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {

    const [isOn, setIsOn] = useState(false);

    const handletoggleSwitch = () => {
        setIsOn(!isOn);

    };
    const cheackIsOn = isOn ? "on": "off";
    const BgColour ={ backgroundColor: isOn ? "#4caf50" : "#f44336"};
    return (

        <div className="toggle-switch" style={BgColour} onClick={handletoggleSwitch}>
            <div className={`switch ${cheackIsOn}`}>
                <span className="switch-state">{cheackIsOn}</span>
            </div>
        </div>

    )
};
