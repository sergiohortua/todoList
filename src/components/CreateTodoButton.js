import React from "react";
import '../styles/CreateTodoButton.css'

const CreateTodoButton = () => {

  const handleClick = () => {
    console.log("click");
  };

  return <button className="button__container" onClick={handleClick}>+</button>;
};

export { CreateTodoButton };
