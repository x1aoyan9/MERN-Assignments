import React, { useState } from "react";
import "./App.css";
import Form from "./components/ListForm";
import Display from "./components/ListDisplay";

function App() {
  const [todoList, setTodoList] = useState([]);

  return (
    <div className="App">
      <h1>To-Do List:</h1>
        {/* pass props */}
        <Form todoList={todoList} setTodoList={setTodoList} />
        {/* pass props */}
        <Display todoList={todoList} setTodoList={setTodoList} />
    </div>
  );
}

export default App;