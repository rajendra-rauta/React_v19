import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () =>{

    const [isOn ,setIsOn] = useState(false);

    const handletoggleSwitch =()=>{
        setIsOn(!isOn);

    }
    
    return (
    
            <div className="toggle-switch" onClick={handletoggleSwitch}>
                <div className="switch ">
                    <span className="switch-state">{isOn ? "on": "off"}</span>
                </div>
            </div>
        
    )
};
