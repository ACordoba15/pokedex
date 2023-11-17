import React from 'react';
import Card from './Card';

function ListPokemons(props){
  const filteredData = props.data.filter((pokemon) => {
    if (props.input === '') {
      return pokemon;
    } 
    else {
      return pokemon.name.toLowerCase().includes(props.input)
    }
  })

  return(
    <>
      {filteredData?.map(pokemon => (
        <Card 
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
          type={props.type}
        />
      ))}
    </>
  );
}

export default ListPokemons;