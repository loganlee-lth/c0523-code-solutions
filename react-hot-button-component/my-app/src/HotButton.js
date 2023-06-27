import './HotButton.css';
import { useState } from 'react';

function HotButton() {
  const [count, setCount] = useState(0);
  const [temp, setTemp]  = useState('cold');

  function handleClick() {
    let currentTemp = 'cold';
    if (count < 3) {
      currentTemp = 'cold';
    } else if (count < 6) {
      currentTemp = 'cool';
    } else if (count < 9) {
      currentTemp = 'tepid';
    } else if (count < 12) {
      currentTemp = 'warm';
    } else if (count < 15) {
      currentTemp = 'hot';
    } else {
      currentTemp = 'nuclear';
    }
    setCount(count + 1);
    setTemp(currentTemp);
  }

  return (
    <div>
      <button onClick={handleClick} className={temp}>Hot Button</button>
      <p>Clicked {count} times</p>
    </div>
  );
}

export default HotButton;
