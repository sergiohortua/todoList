import React from "react";
import "../styles/TodoItem.css";

const TodoItem = (props) => {
  const { text, completed } = props;
  const handleCheck=() => {
    console.log('okokokokokok');
  };
  

  return (
    <li className="item">
      <span className={`check ${completed && 'check__ok'}`} onClick={() => handleCheck()}>
        ok
      </span>
      <p className={`text ${completed && 'text__ok'}`}>{text}</p>
      <span className="delete">X</span>
    </li>
  );
};

export { TodoItem };
