import React from "react";

const Todo = ({text, todos, todo, setTodos}) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    };

    const completeHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) return {...item, completed: !item.completed}
            return item;
        }));
    };

    const importantHandler = () => {
        setTodos(todos.map((item) => {
            if (item.id === todo.id) return {...item, important: !item.important}
            return item;
        }));
    };

    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className={`${todo.completed ? "fas fa-times" : "fas fa-check"}`}></i>
            </button>
            <button onClick={importantHandler} className="important-btn">
                <i className={`${todo.important ? "fas fa-star" : "far fa-star"}`}></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
};

export default Todo;