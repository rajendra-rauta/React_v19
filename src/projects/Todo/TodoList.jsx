import { IoMdCheckmark } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

export const TodoList = ({ onhandleDeletTodo, data }) => {

    return (

        <li className="todo-item">
            <span>{data}</span>
            <button className="check-btn" ><IoMdCheckmark /></button>
            <button className="delete-btn"
                onClick={() => onhandleDeletTodo(data)} >
                <MdDeleteForever /></button>
        </li>
    );
};