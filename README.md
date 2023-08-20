# Dice-Roll-Game-with-react
This is a dice roll game made with react js using useState hook and fontawesome icons 

To run this project -> Clone the master branch -> go to the dicerollapp folder -> open terminal -> run command -> npm install
Then after run command -> npm run start

**********************************************************************************************************************************************

Detailed explanation of the project:->

first create a react app -> diceroll  and set it up 

now cd to the app and install the following icons -> npm i @fortawesome/fontawesome-svg-core
                                                            npm i @fortawesome/free-solid-svg-icons
                                                            npm i @fortawesome/react-fontawesome


now create a new folder in the src folder -> components  

Now inside this folder -> Create the required files in the components folder that are RollDice.js, Die.js, RollDice.css and Die.css 


Now we create roll dice component -> 


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

[

    EXPLANATION of RollDice.js -> we import react rolldice.css and dice.js

    Now we create a rolldice function inside which -> we 1stly define the sides of the dice in an array 

    Now we make use of useState hook to assign the initial values of both the dices i.e-> const [die1, setDie1] = useState('one');
                                                                                          const [die2, setDie2] = useState('one');
    
    Now we make use of useState hook to assign the initial value for dicerolling as false and it can be set true when setRolling is
    triggered i.e-> const [rolling, setRolling] = useState(false);                                                                                      

    
    Now we define a roll function -> inside which we made setRolling true 
    The next line, setTimeout(() => {, starts a timer. The timer will call the anonymous function after 1000 milliseconds (1 second).
    
    The anonymous function does the following:

     Sets the die1 state variable to a random number from the sides array.
     Sets the die2 state variable to a random number from the sides array.
     Sets the rolling state variable to false. This indicates that the dice are no longer rolling.


     then - 
     const handleBtn = rolling ? 'RollDice-rolling' : ''; is assigning the value of the rolling state variable to the handleBtn 
     variable. If the rolling state variable is true, then the value of handleBtn will be RollDice-rolling. Otherwise, the value 
     of handleBtn will be an empty string.

     Then at the end -> inside the return statement of RollDice.js 

     A div element with the class name RollDice-container.
Two Die components, one for each die.
The Die components are rendered with the face and rolling props set to the corresponding state variables.
A button with the class name handleBtn.
The className prop of the button is set to the value of the handleBtn variable.
The disabled prop of the button is set to the value of the rolling state variable.
The onClick prop of the button is set to the roll() function.
The text content of the button is set to the string Rolling if the rolling state variable is true, or the string Roll Dice! if the 
rolling state variable is false.
This means that the button will be disabled and will have the text content Rolling if the dice are rolling. The button will be enabled
 and will have the text content Roll Dice! if the dice are not rolling.

When the user clicks the button, the roll() function will be called. This function will roll the dice and update the state variables.
 The button will then be updated to reflect the new state of the dice.
]


================================================
Now we define rolldice css file -> 
/* RollDice.css File */
.RollDice {
	display: flex;
	flex-flow: column nowrap;
	min-height: 100vh;
}

/* Shows each dice in one row */
.RollDice-container {
	display: flex;
	justify-content: center;
	align-content: center;
}

/* Styling rolldice button */
.RollDice button {
	width: 15em;
	padding: 1.5em;
	border: 0px;
	border-radius: 10px;
	color: white;
	background-color: black;
	margin-top: 3em;
	align-self: center;
}

/* Setting hover effect on button */
.RollDice button:hover {
	cursor: pointer;
}

.RollDice-rolling {
	border: 0px;
	border-radius: 10px;
	background-color: darkslateblue !important;
	opacity: 0.7
}


Now we create die.jsx component -> 
// Die.js File
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

[
    explanation of die.jsx -> 1stly we import FontAwesomeIcon 
    
    The Die component is a React component that renders a single die. It takes two props:

face: This is the number on the die face.
rolling: This is a boolean flag that indicates whether the die is rolling.
The return statement in the Die component renders a div element with a FontAwesomeIcon component inside. The FontAwesomeIcon 
component renders a Font Awesome icon for the specified die face. The className prop of the FontAwesomeIcon component is set
to a string that combines the Die class name and the Die-shaking class name if the rolling prop is true. This will cause the 
icon to be rendered with the Die class styles, and with the Die-shaking class styles if the die is rolling.

Here is a breakdown of the code:

const Die = ({ face, rolling }) => {: This defines the Die component. It takes two props: face and rolling.
return (: This starts the return statement.
<div>: This renders a div element.
<FontAwesomeIcon: This renders a FontAwesomeIcon component.
icon={['fas',fa-dice-${face}`]}`: This sets the `icon` prop of the `FontAwesomeIcon` component to an array of two strings: `fas` and `fa-dice-${face}. Thefasstring tells Font Awesome to use the solid style for the icon, and thefa-dice-${face}` string tells Font Awesome to use the icon for the specified die face.
className={Die ${rolling && 'Die-shaking'}}: This sets the className prop of the FontAwesomeIcon component to a string that combines the Die class name and the Die-shaking class name if the rolling prop is true. This will cause the icon to be rendered with the Die class styles, and with the Die-shaking class styles if the die is rolling.
</div>: This ends the div element.
</return>: This ends the return statement.
]




Now we define die.css-> 
/* Die.css File */
/* Styling each Die */
.Die {
	font-size: 10em;
	padding: 0.25em;
	color: slateblue;
}

/* Applying Animation */
.Die-shaking {
	animation-name: wobble;
	animation-duration: 1s;
}

/* Setting Animation effect to the
	dice using css keyframe */
@keyframes wobble {
	from {
		transform: translate3d(0, 0, 0);
	}

	15% {
		transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
	}

	30% {
		transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
	}

	45% {
		transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
	}

	60% {
		transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
	}

	75% {
		transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
	}

	to {
		transform: translate3d(0, 0, 0);
	}
}




Now we import things in our ap.js and render them 
i.e-> 

//app.js file 
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




This will make us our react roll dice app 







====================================================================================================================================
Explanation ----> 

Project Structure:

src: This is the main source code directory.
components: Create a folder named components to organize your React components.
RollDice.js: This is the main component for the dice rolling functionality.
Die.js: This is a component for rendering individual dice.
RollDice.css: This file contains styles for the RollDice component.
Die.css: This file contains styles for the Die component.
App.js: The main entry point of your application.
App.css: Styles for the overall application.

State Management with useState: You use the useState hook to manage state in your functional components. In RollDice.js, you have 
states for die1, die2, and rolling. In Die.js, you receive the face and rolling props directly.

Component Composition: You compose your app by nesting components. The RollDice component contains two Die components to represent 
the dice faces.

Component Styling: You apply styles to your components using CSS. Styles are typically defined in separate CSS files 
(e.g., RollDice.css and Die.css) and imported into the corresponding components.

Event Handling: You handle user interactions, like button clicks, using event handlers. In RollDice.js, the roll function is called 
when the "Roll Dice!" button is clicked.

External Libraries: You use external libraries like FontAwesome to display icons in your app. You import these libraries into your 
components as needed.

Component Composition in App.js: In App.js, you import the RollDice component and render it. This is where you bring all your 
components together to create the final application.

Component Lifecycle: In class-based components (like your original code for RollDice), you can use lifecycle methods like constructor
and render. In functional components, you manage side effects and component updates using hooks like useState and useEffect.
