import React from 'react';
import '../css/Card.css'
import shinyButtonOff from '../images/shiny-button-off.png';
import shinyButtonOn from '../images/shiny-button-on.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import pokemonNotFound from '../images/pokemonNotFound.png';
import TypeColors from '../utils/TypeColors';
import TypeIcons from '../utils/TypeIcons';

function Card ({name, url}) {

  

  const [isShiny, setIsShiny] = useState(false);
  const [image, setImage] = useState('');
  const [imageShiny, setImageShiny] = useState('');
  const [type1, setType1] = useState('');
  const [type2, setType2] = useState('');
  
  const handleShinyButton = () => {
    setIsShiny(!isShiny);
  };

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setImage(response.data.sprites.other.home.front_default?? pokemonNotFound);
        setImageShiny(response.data.sprites.other.home.front_shiny?? pokemonNotFound);
        setType1(response.data.types[0]?.type.name);
        setType2(response.data.types[1]?.type.name);
        if(type1 === 'normal')
        {
          console.log('Normal: ', TypeColors[type1]);
        }
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div 
      className={'card-container'} 
      style={{background: `linear-gradient(${TypeColors[type1]}, ${TypeColors[type2] ?? TypeColors[type1]}`}}
    >
      <div className={'card-top'}>
        <div className='type-icon-container'>
          <img
            className='type-icon' 
            src={TypeIcons[type1]} />
          
          <img 
            className={TypeIcons[type2] ? 'type-icon' : ''}
            src={TypeIcons[type2]?? null} />
        </div>
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
      
      <div className={'card-bottom'}>
        {name}
      </div>
    </div>
  )
};

export default Card;