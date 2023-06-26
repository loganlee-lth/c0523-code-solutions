import './App.css';
import CustomButton from './CustomButton';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  function handleDecrement() {
    setCounter(counter - 1);
  }
  function handleIncrement() {
    setCounter(counter + 1);
  }

  return (
    <div>
      <CustomButton children="Down" onCustomClick={handleDecrement}></CustomButton>
      {counter}
      <CustomButton children="Up" onCustomClick={handleIncrement}></CustomButton>
    </div>
  );
}

export default App;
