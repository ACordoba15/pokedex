import React from 'react';
import TypeColors from '../utils/TypeColors';
import TypeIcons from '../utils/TypeIcons';
import '../css/PokemonType.css';

function PokemonType({ type, handleTypeButton }) {
  return(
    <div
      className='pokemon-type-container' 
      style={{background: `${TypeColors[type]}`}}
      onClick={handleTypeButton}>
      <img
        className='pokemon-type-image' 
        src={TypeIcons[type]}
        alt={`icon-${type}`}/>
      <p className='pokemon-type-text'>{type}</p>
    </div>
  );
}

export default PokemonType;