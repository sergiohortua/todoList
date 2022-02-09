import React from "react";
import "../styles/TodoSearch.css";
import { TodoContext } from "../TodoContext";

const TodoSearch = () => {
  const { searchValue, setSearchValue } = React.useContext(TodoContext)
  const onChange = (e) => {
    console.log(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <div className="search__container">
      <input
        onChange={onChange}
        value={searchValue}
        className="search"
        placeholder="To-TODO"
      />
    </div>
  );
};

export { TodoSearch };
