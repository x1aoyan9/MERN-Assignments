import React, { useState } from "react";

const Form = (props) => {
    //state for todoText
    const [todoText, setTodoText] = useState("");

    //deconstruct props object
    const { todoList, setTodoList } = props;

    // handler to be called when form is submitted.
    const submitHandler = (e) => {
        e.preventDefault();
        setTodoList([
            ...todoList,
            {
                content: todoText,
                markedDelete: false,
                id: Math.floor(Math.random() * 100000000).toString(),
            },
        ]);
    setTodoText("");
    };

    return (
        <>
            <form onSubmit={submitHandler}>
                <input type="text" value={todoText} onChange={(e) => setTodoText(e.target.value)} required/>
                <button>Add</button>
            </form>
        </>
    );
};

export default Form;