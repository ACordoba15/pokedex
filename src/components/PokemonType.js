import React from 'react';
import TypeColors from '../utils/TypeColors';
import TypeIcons from '../utils/TypeIcons';
import '../css/PokemonType.css';

function PokemonType({ type, selectedType, handleTypeButton }) {
  return(
    <button
      className='pokemon-type-container' 
      style={{background: `${TypeColors[type]}`}}
      onClick={handleTypeButton}>
      <img
        className='pokemon-type-image' 
        src={TypeIcons[type]}
        alt={`icon-${type}`}/>
      <p className={`${(selectedType !== type) ? 'pokemon-type-text' : 'pokemon-type-text-selected'}`}>{type}</p>
    </button>
  );
}

export default PokemonType;