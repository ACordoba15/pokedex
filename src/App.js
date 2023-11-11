import './App.css';
import Card from './components/Card';
import venusaur from './images/venusaur.gif';
import venusaur_shiny from './images/venusaur-shiny.gif';

function App() { 
  return (
    <div className="App">
      <div className='cards-container'>
        <Card 
          name='Venusaur'
          image={venusaur}
          image_shiny={venusaur_shiny}
        />
      </div>
    </div>
  );
}

export default App;
