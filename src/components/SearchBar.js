import React, { useState } from 'react';
import '../css/SearchBar.css';
import SearchIcon from '../images/search.png';

function SearchBar(props) {
  return (
    <div className='searchbar-container'>
      <label>
        <input
          className='searchbar-input'
          type='text'
          placeholder='Buscar pokemon'
          name='searchbar-pokemon'
          onChange={props.changeText}
          />
        <img 
          className='searchbar-button-icon' 
          src={SearchIcon}/>
      </label>
    </div>
  );
}

export default SearchBar;