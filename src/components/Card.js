import React from 'react';
import '../css/Card.css'
import shinyButtonOff from '../images/shiny-button-off.png';
import shinyButtonOn from '../images/shiny-button-on.png';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Card ({name, url, type1, type2}) {

  const [isShiny, setIsShiny] = useState(false);
  const [image, setImage] = useState('');
  const [imageShiny, setImageShiny] = useState('');
  
  const handleShinyButton = () => {
    setIsShiny(!isShiny);
  };

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setImage(response.data.sprites.other.home.front_default);
        setImageShiny(response.data.sprites.other.home.front_shiny);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='card-container'>
      <div className='card-top'>
        <img 
            className='shiny-button'
            src={isShiny ? `${shinyButtonOn}` : `${shinyButtonOff}`}
            onClick={handleShinyButton}
            alt='Shiny button'
          />
      </div>
      <div className='card-center'>
        <img 
          className='image-pokemon'
          src={isShiny ? `${imageShiny}` : `${image}` }
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