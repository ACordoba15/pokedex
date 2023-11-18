import React from 'react';
import PokemonType from './PokemonType';
import '../css/ListPokemonTypes.css';

function ListPokemonTypes({ selectedType, handleTypeButton }){
  return(
    <>
      <div className='pokemon-types-container'>
        <PokemonType type='normal' selectedType={selectedType} handleTypeButton={handleTypeButton} />
        <PokemonType type='fire' selectedType={selectedType} handleTypeButton={handleTypeButton} />
        <PokemonType type='water' selectedType={selectedType} handleTypeButton={handleTypeButton} />
        <PokemonType type='grass' selectedType={selectedType} handleTypeButton={handleTypeButton} />
        <PokemonType type='electric' selectedType={selectedType} handleTypeButton={handleTypeButton} />
        <PokemonType type='ice' selectedType={selectedType} handleTypeButton={handleTypeButton} />
        <PokemonType type='fighting' selectedType={selectedType} handleTypeButton={handleTypeButton} />
        <PokemonType type='poison' selectedType={selectedType} handleTypeButton={handleTypeButton} />
        <PokemonType type='ground' selectedType={selectedType} handleTypeButton={handleTypeButton} />
      </div>
      <div className='pokemon-types-container'>
        <PokemonType type='flying' selectedType={selectedType} handleTypeButton={handleTypeButton} />
        <PokemonType type='psychic' selectedType={selectedType} handleTypeButton={handleTypeButton} />
        <PokemonType type='bug' selectedType={selectedType} handleTypeButton={handleTypeButton} />
        <PokemonType type='rock' selectedType={selectedType} handleTypeButton={handleTypeButton} />
        <PokemonType type='ghost' selectedType={selectedType} handleTypeButton={handleTypeButton} />
        <PokemonType type='dragon' selectedType={selectedType} handleTypeButton={handleTypeButton} />
        <PokemonType type='dark' selectedType={selectedType} handleTypeButton={handleTypeButton} />
        <PokemonType type='steel' selectedType={selectedType} handleTypeButton={handleTypeButton} />
        <PokemonType type='fairy' selectedType={selectedType} handleTypeButton={handleTypeButton} />
      </div>
    </>
  );
}

export default ListPokemonTypes;