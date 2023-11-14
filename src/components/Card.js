import React, { useState, useEffect } from 'react';
import '../css/Card.css';
import axios from 'axios';
import TypeColors from '../utils/TypeColors';
import TypeIcons from '../utils/TypeIcons';
import shinyButtonOff from '../images/shiny-button-off.png';
import shinyButtonOn from '../images/shiny-button-on.png';
import pokemonNotFound from '../images/pokemonNotFound.png';
import male from '../images/male.png';
import female from '../images/female.png';

function Card ({name, url}) {

  const [isShiny, setIsShiny] = useState(false);
  const [isMale, setIsMale] = useState(true)
  const [image, setImage] = useState('');
  const [imageShiny, setImageShiny] = useState('');
  const [imageM, setImageM] = useState('');
  const [imageShinyM, setImageShinyM] = useState('');
  const [imageF, setImageF] = useState('');
  const [imageShinyF, setImageShinyF] = useState('');
  const [type1, setType1] = useState('');
  const [type2, setType2] = useState('');
  
  const handleShinyButton = () => {
    setIsShiny(!isShiny);
  };
  
  const handleMaleButton = () => {
    if(!isMale){
      setIsMale(true);
      setImage(imageM);
      setImageShiny(imageShinyM);
    } 
  };

  const handleFemaleButton = () => {
    if(isMale){
      setIsMale(false);
      setImage(imageF);
      setImageShiny(imageShinyF);
    } 
  };
  
  useEffect(() => {
    axios.get(url)
      .then(response => {
        setImage(response.data.sprites.other.home.front_default?? pokemonNotFound);
        setImageShiny(response.data.sprites.other.home.front_shiny?? pokemonNotFound);
        setImageM(response.data.sprites.other.home.front_default?? pokemonNotFound);
        setImageShinyM(response.data.sprites.other.home.front_shiny?? pokemonNotFound)
        setImageF(response.data.sprites.other.home.front_female?? response.data.sprites.other.home.front_default);
        setImageShinyF(response.data.sprites.other.home.front_shiny_female?? response.data.sprites.other.home.front_shiny);
        setType1(response.data.types[0]?.type.name);
        setType2(response.data.types[1]?.type.name);
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
            src={TypeIcons[type1]} 
            alt={`type ${type1}`} />

          { 
            TypeIcons[type2] ?
            <img 
              className={'type-icon'}
              src={TypeIcons[type2]} 
              alt={`type ${type2 }` }/> 
            : null
          }
          <img
            className='gender-icon' 
            src={male}
            onClick={handleMaleButton}
            alt='male icon' />
          
          <img 
            className={'gender-icon'}
            src={female} 
            onClick={handleFemaleButton}
            alt='female icon'/>
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