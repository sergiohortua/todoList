import React from "react";
import '../styles/TodoList.css'

const TodoList = (props) => {
  return (
    <div className="list">
      <ul className="list__container">{props.children}</ul>
    </div>
  );
};

export { TodoList };
