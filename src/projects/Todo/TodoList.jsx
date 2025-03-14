import { IoMdCheckmark } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

export const TodoList = ({ onhandleDeletTodo, onHandleCheackedTodo , data, cheacked, }) => {

    return (
        <li className="todo-item">
            <span className={cheacked ? "checkList" : "notCheckList"}>{data}</span>
            <button className="check-btn" onClick={()=> onHandleCheackedTodo(data)} >
            <IoMdCheckmark />
            </button>
            <button className="delete-btn"
            
                onClick={() => onhandleDeletTodo(data)}>
                <MdDeleteForever /></button>
        </li>
    );
};






