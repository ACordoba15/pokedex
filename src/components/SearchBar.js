import React, { useState } from "react";
import '../css/SearchBar.css';

function SearchBar(props){
    const [input, setInput] = useState('');

    const changeText = e => {
        setInput(e.target.value);
    };

    const search = e => {
        e.preventDefault();
        props.onSubmit(input);
    };

    return(
    <form 
        className='searchbar-container'
        onSubmit={search}
        >
        <input 
            className='searchbar-input'
            type='text'
            placeholder='Buscar pokemon'
            name='seatchbar-pokemon'
            onChange={changeText}
        />
        <button className='searchbar-button'>Buscar</button>
    </form>
);
}

export default SearchBar;