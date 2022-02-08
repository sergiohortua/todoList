import React,{useState,useEffect} from "react";
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
const useLocalStorage = (itemName, initialValue) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [item, setItem] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = [];
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }
        setItem(parsedItem);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, 2000);
  });

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };
  return { item, saveItem, loading, error, };
};

function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = useState("");

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
  // console.log('antes');
  // React.useEffect(() => {
  //   console.log("ejecucion solo al click de completado OK");
  // }, [completedTodos]);
  // console.log('despues');

  return (
    <AppUI
      loading={loading}
      error={error}
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
