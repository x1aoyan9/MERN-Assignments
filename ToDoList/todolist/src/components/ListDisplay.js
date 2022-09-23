import React, { useState } from "react";

const Display = (props) => {
    //Deconstruct props object
    const { todoList, setTodoList } = props;

    //Function to handle style change when the checkbox is clicked
    const handleCompleted = (todo) => {
        todo.markedDelete = !todo.markedDelete;
        setTodoList([...todoList]);
    };

    // Function to determine whether a checkbox will be checked or not; type boolean
    const styled = (markedDelete) => {
        if (markedDelete === true) {
            return "completed";
        } else {
            return "notCompleted";
        }
    };

    const formStyle = {
        display: "inline-flex",
        margin: "1% 5%",
    }

    // Function to delete a todo from state.
    const deleteButton = (idFromBelow) => {
        setTodoList(
            todoList.filter((todo, index) => {
                return todo.id !== idFromBelow;
            })
        );
    };

    return (
        <div>
            {todoList.map((todo, index) => (
                <div className={styled(todo.markedDelete)} key={todo.id}>
                    <div style={formStyle}>
                        {" "}
                        <p>{todo.content}</p>
                        <input type="checkbox" onChange={() => handleCompleted(todo)}/>
                    </div>
                    <button onClick={() => deleteButton(todo.id)}>Delete</button>
                    {" "}
                </div>
            ))}
        </div>
    );
};

export default Display;