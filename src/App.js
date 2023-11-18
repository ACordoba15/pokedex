import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ListPokemons from './components/ListPokemons';
import ListPokemonTypes from './components/ListPokemonTypes';

function App() { 
  const [pokemons, setPokemons] = useState([]);
  const [input, setInput] = useState('');
  const [type, setType] = useState('');

  const url ='https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0';

  const changeText = (e) => {
    setInput(e.target.value);
  };

  const handleTypeButton = (typePokemon) => {
    if (type === '' || type !== typePokemon.target.innerHTML) {
      setType(typePokemon.target.textContent);
    }
    else {
      setType('');
    }
  };

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setPokemons(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, [url]);

  return (
    <div className='App'>
      <SearchBar 
        onChange={pokemons} 
        changeText={changeText} />
      <ListPokemonTypes selectedType={type} handleTypeButton={handleTypeButton}/>
      <div className='cards-container'>
        <ListPokemons input={input} data={pokemons} type={type}/>  
      </div>
    </div>
  );
}

export default App;