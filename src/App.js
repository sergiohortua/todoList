import React, { useState } from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import "./styles/Root.css";

const data = [
  { text: "pararse", completed: true },
  { text: "bañarse", completed: false },
  { text: "irse", completed: true },
  { text: "1", completed: false },
  { text: "2", completed: false },
  { text: "22", completed: false },
  { text: "3", completed: false },
  { text: "4", completed: false },
  { text: "5", completed: false },
  { text: "6", completed: false },
  { text: "7", completed: false },
  { text: "8", completed: false },
  { text: "9", completed: false },
  { text: "0", completed: false },
];

function App() {
  const [todos, setTodos] = React.useState(data);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter((todo) => !!todo.completed).length; // !-> significa negado(negativo-false) , !!-> significa (-*-) afirmativo-true
  const totalTodos = todos.length;

 
  let searchedTodos = [];

  (!searchValue.length >=1)
    ? (searchedTodos = todos)
    : (searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText)
      }));

  return (
    <React.Fragment>
      <div className="root">
        <TodoCounter total={totalTodos} completed={completedTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
        <TodoList>
          {searchedTodos.map((item) => (
            <TodoItem key={item.text} {...item} />
          ))}
        </TodoList>
        <CreateTodoButton />
      </div>
    </React.Fragment>
  );
}

export default App;
