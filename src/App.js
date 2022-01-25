import React from "react";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import './styles/Root.css'

const todos = [
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
  return (
    <React.Fragment>
      <div className="root">
        <TodoCounter />
        <TodoSearch />
        <TodoList>
          {todos.map((item) => (
            <TodoItem key={item.text} {...item} />
          ))}
        </TodoList>
        <CreateTodoButton />
      </div>
    </React.Fragment>
  );
}

export default App;
