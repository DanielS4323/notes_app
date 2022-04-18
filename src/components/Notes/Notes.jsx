import React from "react";
import Note from "../Note/Note";
import "./style.scss";

function Notes({ todos, SetTodos }) {
  return (
    <div className="notes">
      {todos.map((todo) => (
        <Note key={todo.id} todo={todo} SetTodos={SetTodos}/>
      ))}
    </div>
  );
}

export default Notes;
