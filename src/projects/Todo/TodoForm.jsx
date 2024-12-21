import { useState } from "react";
export const TodoForm = ({ onAddTodo }) => {

    const [inputValue, setInputValue] = useState({});
    const handleInputChange = (value) => {
        setInputValue({ id: value, content: value, cheacked: false })
    };
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onAddTodo(inputValue);
        setInputValue({ id: "", content: "", cheacked: "" });
    } 
    return (
        <section>
            <form className="form" onSubmit={handleFormSubmit}>
                <div>
                    <input type="text" className="todo-input" autoComplete="off"
                        value={inputValue.content}
                        onChange={(event) => handleInputChange(event.target.value)}
                    >
                    </input>
                </div>
                <div>
                    <button type="submit" className="todo-btn">Add Task</button>
                </div>
            </form>
        </section>

    );
}; 
