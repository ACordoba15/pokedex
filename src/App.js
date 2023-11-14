import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ListPokemons from './components/ListPokemons';

function App() { 

  const [pokemons, setPokemons] = useState([]);
  const [input, setInput] = useState("");

  const url ='https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0';

  const changeText = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setPokemons(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <SearchBar 
        onChange={pokemons} 
        changeText={changeText} />
      <div className='cards-container'>
        <ListPokemons input={input} data={pokemons} />  
      </div>
    </div>
  );
}

export default App;