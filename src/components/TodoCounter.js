import React from "react";
import { TodoContext } from "../TodoContext";
import "../styles/TodoCounter.css";

const TodoCounter = () => {
  const { totalTodos, completedTodos } = React.useContext(TodoContext);

  return (
    <h2 className="title">
      Has completado {completedTodos} de {totalTodos} TODOs
    </h2>
  );
};

export { TodoCounter };
