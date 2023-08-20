//This is a component for rendering individual dice.
import React from 'react';
import './Die.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Die = ({ face, rolling }) => {
  return (
    <div>
      <FontAwesomeIcon
        icon={['fas', `fa-dice-${face}`]}
        className={`Die ${rolling && 'Die-shaking'}`}
      />
    </div>
  );
};

export default Die;
