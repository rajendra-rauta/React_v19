
const todokey = "reactTodo";

export const getlocalStorageTodoData = () => {
    const rawTodos = localStorage.getItem(todokey);
    if (!rawTodos) return[];
    return JSON.parse(rawTodos);
}

export const setlocalStorageTodoData = (task) => {
    return   localStorage.setItem(todokey, JSON.stringify(task));
}