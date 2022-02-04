import React from "react";
import "../styles/TodoSearch.css";

const TodoSearch = ({ searchValue, setSearchValue }) => {
  
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
