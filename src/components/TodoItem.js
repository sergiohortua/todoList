import React from "react";
import "../styles/TodoItem.css";

const TodoItem = (props) => {
  const { text, completed, onComplete, onDelete } = props;

  return (
    <li className="item">
      <span
        className={`check ${completed && "check__ok"}`}
        onClick={onComplete}
      >
        ok
      </span>
      <p className={`text ${completed && "text__ok"}`}>{text}</p>
      <span onClick={onDelete} className="delete">
        X
      </span>
    </li>
  );
};

export { TodoItem };
