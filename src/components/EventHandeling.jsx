import "./Ev.css"
export const EventHandeling = () => {

    // function value() {
    //     alert("i am onclick event")
    // }

const value = () =>{

    alert("i am onclick event")
}

const handleWelcomeUser = (user) =>{
    console.log(`Hey ${user}, Welcome`);
    
}
    return (
        <>
            <button onClick={value}>click me!</button>
            <br/>
            <button onClick={() =>value()}>click me! 2</button>

            {/* inline Event hendlear  */}
            <br/>
            <button onClick={(event) =>console.log(event)}>click me! </button>
       {/* function components with inline arrow function  */}
            <br/>
            <button onClick={() =>alert("Hey i am inline function")}>click me! </button>

            {/* passing argument to invent handlear */}
        {/* <button onClick={handleWelcomeUser("Rajendra")}>click Me!</button> */}
        <button onClick={() =>handleWelcomeUser("Rajendra")}>click Me!</button>
        <button onClick={() =>handleWelcomeUser("Ram")}>click Me!</button>


        </>
    )
}