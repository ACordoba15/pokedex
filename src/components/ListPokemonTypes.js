import React from 'react';
import PokemonType from './PokemonType';
import '../css/ListPokemonTypes.css';

function ListPokemonTypes({ handleTypeButton }){
  return(
    <>
      <div className='pokemon-types-container'>
        <PokemonType type='normal' handleTypeButton={handleTypeButton} />
        <PokemonType type='fire' handleTypeButton={handleTypeButton} />
        <PokemonType type='water' handleTypeButton={handleTypeButton} />
        <PokemonType type='grass' handleTypeButton={handleTypeButton} />
        <PokemonType type='electric' handleTypeButton={handleTypeButton} />
        <PokemonType type='ice' handleTypeButton={handleTypeButton} />
        <PokemonType type='fighting' handleTypeButton={handleTypeButton} />
        <PokemonType type='poison' handleTypeButton={handleTypeButton} />
        <PokemonType type='ground' handleTypeButton={handleTypeButton} />
      </div>
      <div className='pokemon-types-container'>
        <PokemonType type='flying' handleTypeButton={handleTypeButton} />
        <PokemonType type='psychic' handleTypeButton={handleTypeButton} />
        <PokemonType type='bug' handleTypeButton={handleTypeButton} />
        <PokemonType type='rock' handleTypeButton={handleTypeButton} />
        <PokemonType type='ghost' handleTypeButton={handleTypeButton} />
        <PokemonType type='dragon' handleTypeButton={handleTypeButton} />
        <PokemonType type='dark' handleTypeButton={handleTypeButton} />
        <PokemonType type='steel' handleTypeButton={handleTypeButton} />
        <PokemonType type='fairy' handleTypeButton={handleTypeButton} />
      </div>
    </>
  );
}

export default ListPokemonTypes;