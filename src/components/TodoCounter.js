import React from "react";
import "../styles/TodoCounter.css";

const TodoCounter = (props) => {
  const { total, completed } = props;

  return <h2 className="title">Has completado {completed} de {total} TODOs</h2>;
};

export { TodoCounter };
