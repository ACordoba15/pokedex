import React from 'react';
import '../css/Card.css'
import shiny_button_off from '../images/shiny-button-off.png';
import shiny_button_on from '../images/shiny-button-on.png';
import { useState } from 'react';

function Card ({name, image, image_shiny}) {

  const [isShiny, setIsShiny] = useState(false);
  
  const handleShinyButton = () => {
    setIsShiny(!isShiny);
  };

  return (
    <div className='card-container'>
      <div className='card-top'>
        <img 
            className='shiny-button'
            src={isShiny ? shiny_button_on : shiny_button_off}
            onClick={handleShinyButton}
            alt='Shiny button'
          />
      </div>
      <div className='card-center'>
        <img 
          className='image-pokemon'
          src={isShiny ? image_shiny : image }
          alt={name}
        />
      </div>
      
      <div className='card-bottom'>
        {name}
      </div>
    </div>
  )
};

export default Card;