import React, { useState,useContext } from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = useState("");
  const { addTodo,setOpenModal } = useContext(TodoContext);

  const onChange = ({target}) => {
    setNewTodoValue(target.value)
  };
  const onCancel = () => {
    //
  };
  const onSubmit = (e) => {
    e.preventDefault();
   addTodo( newTodoValue);
   setOpenModal(preventState=>!preventState)
  };
  return (
    <form onSubmit={onSubmit}>
      <label>,,,</label>
      <textarea value={newTodoValue} onChange={onChange} placeholder="Todo" />
      <div>
        <button type="button" onClick={onCancel}>
          cancelar
        </button>
        <button type="submit" >
          añadir
        </button>
      </div>
    </form>
  );
}
export { TodoForm };
