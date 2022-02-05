import React from "react";
import { AppUI } from "./AppUI";

// const data = [
//   { text: "pararse", completed: true },
//   { text: "bañarse", completed: false },
//   { text: "irse", completed: true },
//   { text: "1", completed: false },
//   { text: "2", completed: false },
//   { text: "22", completed: false },
//   { text: "3", completed: false },
//   { text: "4", completed: false },
//   { text: "5", completed: false },
//   { text: "6", completed: false },
//   { text: "7", completed: false },
//   { text: "8", completed: false },
//   { text: "9", completed: false },
//   { text: "0", completed: false },
// ];

function App() {
  const localStorageTodos = localStorage.getItem("TODOS_V1");
  let parsedTodos;

  if (!localStorageTodos) {
    localStorage.setItem("TODOS_V1", JSON.stringify([]));
    parsedTodos = [];
  } else {
    parsedTodos = JSON.parse(localStorageTodos);
  }

  const [todos, setTodos] = React.useState(parsedTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed).length; // !-> significa negado(negativo-false) , !!-> significa (-*-) afirmativo-true
  const totalTodos = todos.length;

  let searchedTodos = [];

  !searchValue.length >= 1
    ? (searchedTodos = todos)
  : (searchedTodos = todos.filter((todo) => {
        const todoText = todo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
  }));

  const saveTodos=(newTodos)=>{
    const stringifiedTodos= JSON.stringify(newTodos)
    localStorage.setItem('TODOS_V1',stringifiedTodos)
    setTodos(newTodos)
  }

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = [...todos].filter((item) => item.text !== text);
    saveTodos(newTodos);
  };

  return (
    <AppUI
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
