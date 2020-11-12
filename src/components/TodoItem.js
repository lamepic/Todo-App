import React from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

function TodoItem(props) {
  const getStyle = () => {
    if (props.todo.completed) {
      return {
        textDecoration: "line-through",
        opacity: 0.5,
      };
    } else {
      return { textDecoration: "none" };
    }
  };

  return (
    <div className="todo-item">
      <p style={getStyle()}>{props.todo.text}</p>
      <button
        className={props.todo.completed ? "cancel-btn" : "complete-btn"}
        onClick={() => props.markComplete(props.todo.id)}
      >
        {props.todo.completed ? <CancelIcon /> : <DoneOutlineIcon />}
      </button>
      <button className="trash-btn" onClick={() => props.deleteTodo(props.todo.id)}>
        <DeleteForeverIcon />
      </button>
    </div>
  );
}

export default TodoItem;
