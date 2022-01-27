import React from "react";
import "../styles/TodoItem.css";

const TodoItem = (props) => {
  const { text, completed } = props;
  const handleDelete = () => {
    console.log(`tarea borrada -> ${text}`);
  };

  const handleComplete = () => {
    console.log(`tarea completada -> ${text}`);
  };

  return (
    <li className="item">
      <span
        className={`check ${completed && "check__ok"}`}
        onClick={handleComplete}
      >
        ok
      </span>
      <p className={`text ${completed && "text__ok"}`}>{text}</p>
      <span onClick={handleDelete} className="delete">
        X
      </span>
    </li>
  );
};

export { TodoItem };
