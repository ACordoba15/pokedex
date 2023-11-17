import React, { useState, useEffect } from 'react';
import Card from './Card';
import axios from 'axios';

function ListPokemons(props) {
  const filterPokemonsByName = props.data.filter((pokemon) => {
    if (props.input === '') {
      return pokemon;
    } 
    else {
      return pokemon.name.toLowerCase().includes(props.input)
    }
  })

  return(
    <>
      {filterPokemonsByName?.map(pokemon => (
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