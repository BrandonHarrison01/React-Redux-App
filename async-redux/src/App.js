import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';

import Characters from './components/Characters'
import CharacterInfo from './components/CharacterInfo'

function App() {
  return (
    <div className="App">
      <h1>Rick and Morty Characters</h1>
      <Route exact path='/' component={Characters} />
      <Route path='/character-info' render={(props) =>(<CharacterInfo {...props} />)} />
    </div>
  );
}

export default App;
