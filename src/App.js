import React from 'react';
import './App.css';
import RollDice from './components/RollDice';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
library.add(fas);

function App() {
  return (
    <div className="app">
      <RollDice />
    </div>
  );
}

export default App;
