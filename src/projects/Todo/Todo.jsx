import { useState } from "react";

import "./Todo.css";
import { TodoDate } from "./TodoDate";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
export const Todo = () => {

    const [task, setTask] = useState([]);

    const handleFormSubmit = (inputValue) => {

        if (!inputValue)
            return;

        if (task.includes(inputValue)) {
            // setInputValue("");
            return;
        }
        setTask((prevTask) => [...prevTask, inputValue])
        // setInputValue("");

    };

    //  date and time 



    // todo delet function 

    const handleDeleteTodo = (value) => {
        // console.log(task);
        // console.log(value);
        const updatedTask = task.filter((curTask) => curTask != value);
        setTask(updatedTask);

    }


    // todo handlecleartodo functianility

    const handleClearTododata = () => {
        setTask([]);
    }

    return (
        <section className="todo-container">
            <header>
                <h1>
                    Todo List
                </h1>
                <TodoDate />

            </header>
            <TodoForm onAddTodo={handleFormSubmit} />
            <section className="myOnOrdList">
                <ul>
                    {
                        task.map((curTask, index) => {
                            return <TodoList key={index} data={curTask}
                                onhandleDeletTodo={handleDeleteTodo}
                            />
                        })
                    }
                </ul>
            </section>
            <section className="clear-btn" onClick={handleClearTododata}>Clear all</section>


        </section>
    )

}