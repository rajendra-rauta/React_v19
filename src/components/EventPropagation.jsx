import "./Ev.css"


export const EventPropagation = () => {

    const handleGrandParent = () =>{
        console.log("GrandParant clickrd");
        
    };
    const handleParentClick = () =>{
        console.log("Parent clicked");
      
        
    };
    const handleChildClick = (event) =>{
        console.log(event);
        console.log("Child click");
        event.stopPropagation(); // By this line we stop the event propagation from child to parent
           };

    return (
        <section>
            <div className="g-div" onClickCapture={handleGrandParent}>
                <div className="p-div" onClickCapture={handleParentClick}>
                    <button className="c-div" onClickCapture={handleChildClick}>
                        Child Div

                    </button>

                </div>

            </div>
        </section>
    )
}