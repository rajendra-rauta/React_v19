import { useState } from "react"

export const LiftingState = () => {
    
    const [inputValue, setInputvalue] = useState("");
    return (
        <>
            <InputComponent  inputValue= {inputValue} setInputvalue= {setInputvalue}/>
            <DisplayComponent inputValue= {inputValue} />

        </>
    )
}

const InputComponent = ({inputValue, setInputvalue}) => {

    return (
        <>
            <input type="text" placeholder="Enter a name" value={inputValue}
            onChange={(e)=> setInputvalue(e.target.value)}></input>
        </>
    )

};

const DisplayComponent = ({inputValue}) =>{
    return <>
        <p>The current input value is: {inputValue} </p>
    </>
};