import React from "react";
import Note from "../Note/Note";
import "./style.scss";

function Notes(props) {
  return (
    <div className="notes">
      {props.todos.map((todo) => (
        <Note key={todo.id} todo={todo} SetTodos={props.SetTodos}/>
      ))}
    </div>
  );
}

export default Notes;
