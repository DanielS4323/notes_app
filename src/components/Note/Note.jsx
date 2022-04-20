import React, { useState } from "react";
import "./style.scss";
import pinImg from "../../assets/pin-removebg-preview.png";

function Note(props) {
  const [classAdd, setClassAdd] = useState(false);
 

  const doneTodo = () => {
    setClassAdd(!classAdd);
    props.SetTodos((prev) => {
      let copy = [...prev];
      let findTodo = { ...props.todo };
      findTodo.done = !findTodo.done;
      let index = copy.findIndex((el) => el.id === props.todo.id);
      copy[index] = findTodo;
      return copy;
    });
  };

  return (
    <div style={{backgroundColor:`${props.todo.color}`}} className={classAdd ? "note done" : "note"} onClick={() => doneTodo()}>
      <img id="pin" src={pinImg} />
      <h3>{props.todo.title}</h3>
      <h4>{props.todo.content}</h4>
      {props.todo.done ? <p className="p-done">&#x2713;</p> : ""}
    </div>
  );
}

export default Note;
