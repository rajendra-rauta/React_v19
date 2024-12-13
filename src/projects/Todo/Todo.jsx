
import { useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";
import "./Todo.css";
export const Todo = () => {
    const [inputValue, setInputValue] = useState("");
    const [task, setTask] = useState([]);
    const [dateTime, setdateTime] = useState("")

    const handleInputChange = (value) => {
        setInputValue(value)
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (!inputValue)
            return;

        if (task.includes(inputValue)) {
            setInputValue("");
            return;
        }
        setTask((prevTask) => [...prevTask, inputValue])
        setInputValue("");
    }
    
    //  date and time 
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date();
            const formattedDate = now.toLocaleDateString();
            const formattedTime = now.toLocaleTimeString();

            setdateTime(`${formattedDate}- ${formattedTime}`);
        }, 1000);

        return () => clearInterval(interval);
     }, []);


     // todo delet function 

     const handleDeleteTodo = (value) =>{
        console.log(task);
        console.log(value);
        const updatedTask= task.filter((curTask)=> curTask != value);
        setTask(updatedTask);
        
     }


     // todo handlecleartodo functianility

     const handleClearTododata =() =>{
        setTask([]);
     }

return (
    <section className="todo-container">
        <header>
            <h1>
                Todo List
            </h1>
            <h2 className="date-time">{dateTime}</h2>
        </header>
        <section>
            <form className="form" onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" className="todo-input" autoComplete="off"
                        value={inputValue}
                        onChange={(event) => handleInputChange(event.target.value)}
                    >
                    </input>
                </div>
                <div>
                    <button type="submit" className="todo-btn">Add Task</button>
                </div>
            </form>
            <section className="myOnOrdList">
                <ul>
                    {
                        task.map((curTask, index) => {
                            return <li key={index} className="todo-item">
                                <span>{curTask}</span>
                                <button className="check-btn" ><IoMdCheckmark /></button>
                                <button className="delete-btn"
                                 onClick={()=>handleDeleteTodo(curTask)}
                                 >
                                 <MdDeleteForever /></button>
                            </li>
                        })
                    }
                </ul>
            </section>
            <section className="clear-btn" onClick={handleClearTododata}>Clear all</section>
        </section>

    </section>
)

}