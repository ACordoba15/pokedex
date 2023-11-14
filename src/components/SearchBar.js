import React, { useState } from "react";
import "../css/SearchBar.css";

function SearchBar(props) {
  return (
    <div className="searchbar-container">
      <input
        className="searchbar-input"
        type="text"
        placeholder="Buscar pokemon"
        name="searchbar-pokemon"
        onChange={props.changeText}
      />
      <button className="searchbar-button">Buscar</button>
    </div>
  );
}

export default SearchBar;