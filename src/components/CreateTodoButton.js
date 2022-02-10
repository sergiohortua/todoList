import React from "react";
import { TodoContext } from "../TodoContext";
import '../styles/CreateTodoButton.css'

const CreateTodoButton = () => {

  const {setOpenModal}=React.useContext(TodoContext);
  const handleClick = () => {
    setOpenModal(prevState=>!prevState)
  };

  return <button className="button__container" onClick={handleClick}>+</button>;
};

export { CreateTodoButton };
