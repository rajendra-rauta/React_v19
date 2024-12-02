import "./Ev.css"
export const EventProps = () => {
    const HandleWelcomeUser = () => {
        alert(`Hey user`);
    }

    const handleHover = () => {
        alert(`Hey thanks for havaring me`);
    }

    return <>
        <WelcomeUser
            onClick={() => HandleWelcomeUser("Rajendra")}
            onMouseEnter={handleHover} />
    </>
}

const WelcomeUser= (props)=>{
    const handleGreeting = ()=>{
        console.log(`Hey User, Welcome`);
        props.onClick();
        
    }
    return <>
        <button onClick={props.onClick}>Click</button>
        <button onMouseEnter={props.onMouseEnter}>hover Me</button>
        <button onClick={handleGreeting}>Greeting</button>
    </>

}