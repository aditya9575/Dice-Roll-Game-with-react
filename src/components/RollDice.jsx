// This is the main component for the dice rolling functionality.

import React, { useState } from 'react';
import './RollDice.css';
import Die from './Die';

const RollDice = () => {
  const sides = ['one', 'two', 'three', 'four', 'five', 'six'];
  const [die1, setDie1] = useState('one');
  const [die2, setDie2] = useState('one');
  const [rolling, setRolling] = useState(false);

  const roll = () => {
    setRolling(true);

    setTimeout(() => {
      setDie1(sides[Math.floor(Math.random() * sides.length)]);
      setDie2(sides[Math.floor(Math.random() * sides.length)]);
      setRolling(false);
    }, 1000);
  };

  const handleBtn = rolling ? 'RollDice-rolling' : '';

  return (
    <div className='RollDice'>
      <div className='RollDice-container'>
        <Die face={die1} rolling={rolling} />
        <Die face={die2} rolling={rolling} />
      </div>
      <button
        className={handleBtn}
        disabled={rolling}
        onClick={roll}
      >
        {rolling ? 'Rolling' : 'Roll Dice!'}
      </button>
    </div>
  );
};

export default RollDice;
