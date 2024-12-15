import { useState } from "react";

import "./Todo.css";
import { TodoDate } from "./TodoDate";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { getlocalStorageTodoData, setlocalStorageTodoData } from "./TodoLocalStorage";





export const Todo = () => {

    const [task, setTask] = useState(() => getlocalStorageTodoData());

    const handleFormSubmit = (inputValue) => {
        const { id, content, cheacked } = inputValue;


        // to cheack the input field empty or not
        if (!content)
            return;

        // to cheack the data is existing or no

        // if (task.includes(inputValue))  return;
        const ifTodoContentMatched = task.find((curTask) => curTask.content === content);
        if (ifTodoContentMatched)
            // setInputValue("");
            return;

        setTask((prevTask) => [...prevTask, { id, content, cheacked },

        ]);
        // setInputValue("");
    };

    // add data to local storage 

    setlocalStorageTodoData(task);
    
    // todo delet function 
    const handleDeleteTodo = (value) => {
        // console.log(task);
        // console.log(value);
        const updatedTask = task.filter((curTask) => curTask.content != value);
        setTask(updatedTask);
    }
    // todo handlecleartodo functianility

    const handleClearTododata = () => {
        setTask([]);
    }


    //  toto handleCheackedTodo  function
    const handleCheackedTodo = (content) => {
        const updatedTask = task.map((curTask) => {
            if (curTask.content === content) {
                return { ...curTask, cheacked: !curTask.cheacked };
            }
            else {
                return curTask;
            }

        });

        setTask(updatedTask);
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
                        task.map((curTask) => {
                            return <TodoList
                                key={curTask.id}
                                cheacked={curTask.cheacked}
                                data={curTask.content}
                                onhandleDeletTodo={handleDeleteTodo}
                                onHandleCheackedTodo={handleCheackedTodo}
                            />
                        })
                    }
                </ul>
            </section>
            <section className="clear-btn" onClick={handleClearTododata}>Clear all</section>


        </section>
    )

}