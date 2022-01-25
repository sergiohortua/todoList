import React from "react";
import "../styles/TodoSearch.css";

const TodoSearch = () => {
  return (
    <div className="search__container">
      <input className="search" placeholder="Tu TODO" />
    </div>
  );
};

export { TodoSearch };
