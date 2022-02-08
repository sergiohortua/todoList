import React, { useState } from "react";
import { TodoCounter } from "../components/TodoCounter";
import { TodoSearch } from "../components/TodoSearch";
import { TodoList } from "../components/TodoList";
import { TodoItem } from "../components/TodoItem";
import { CreateTodoButton } from "../components/CreateTodoButton";
import "../styles/Root.css";

const AppUI = (props) => {
  const {
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
    loading,
    error,
  } = props;
  return (
    <React.Fragment>
      <div className="root">
        <TodoCounter total={totalTodos} completed={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
          {error && <p>ERROR</p>}
          {loading && <p>Cargando...</p>}
          {(!loading && !searchedTodos.length) && <p>Crea tu primer TODO</p>}

          {searchedTodos.map((item) => (
            <TodoItem
              key={item.text}
              {...item}
              onComplete={() => completeTodo(item.text)}
              onDelete={() => deleteTodo(item.text)}
            />
          ))}
        </TodoList>
        <CreateTodoButton />
      </div>
    </React.Fragment>
  );
};
export { AppUI };
