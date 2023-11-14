import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import ListPokemons from './components/ListPokemons';

function App() { 

  const [copyPokemons, setCopyPokemons] = useState([]);
  const [pokemons, setPokemons] = useState([]);
  const [input, setInput] = useState("");

  const url ='https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0';
  
  const filterPokemons = search => {
    if(search.trim()){
      search = search.trim();
      const filteredPokemons = copyPokemons.filter((pokemon) => {
        if(search === ''){
          return pokemon;
        }
        else {
          return pokemon.name.includes(search);  
        }
      });
      setPokemons(filteredPokemons);
    }
    else {
      setPokemons(copyPokemons);
    }
  };

  const changeText = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setPokemons(response.data.results);
        setCopyPokemons(response.data.results);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <SearchBar 
        onChange={filterPokemons} 
        changeText={changeText} />
      <div className='cards-container'>
        <ListPokemons input={input} data={pokemons} />  
      </div>
    </div>
  );
}

export default App;