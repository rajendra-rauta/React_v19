import { useState } from "react";


export const Counter = () =>{
const [Count , setCount] = useState(0);

    
    return (
        <div className="container state-container" style={ {textAlign :"center"}}>
            <h1>useState Hooks!</h1>
            <br />
            <p>{Count}</p>
            <button onClick={()=> setCount(Count+1)}>Increment</button>
        </div>
    )
}