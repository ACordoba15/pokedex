import './App.css';
import Card from './components/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() { 

  const [pokemons, setPokemons] = useState([]);
  const url ='https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0';

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
      <div className='cards-container'>
          {pokemons?.map(pokemon => (
            <Card 
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
