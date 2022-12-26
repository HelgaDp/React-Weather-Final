import React from 'react';
import Weather from './Weather';
import './App.css';

export default function App() {
  return (
  
  <div className='App'>
    <div className='container'>
          <Weather defaultCity="Dnipro"/>
          <footer>
            This project was coded by {" "} 
            <a className='Link-Color' href='https://starlit-halva-27ce6e.netlify.app/' target="_blank" rel="noreferrer">Olga Petrunenko</a>{" "}and is{" "}
            <a className='Link-Color' href='https://github.com/HelgaDp/React-Weather-Final' target="_blank" rel="noreferrer">open-soursed on GitHub</a>
          </footer>
     </div>
  </div>
    );
}

