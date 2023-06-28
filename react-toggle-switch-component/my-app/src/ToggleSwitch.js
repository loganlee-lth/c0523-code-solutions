import './ToggleSwitch.css';
import { useState } from 'react';

function ToggleSwitch({ toggleState, onCustomClick }) {
  const [toggle, setToggle] = useState(false);

  function handleClick() {
    setToggle(!toggle);
  }

  return (
    <div className="container">
      <div className={`${toggle ? 'toggle-container-on' : 'toggle-container-off'}`}>
        <div onClick={handleClick} className={`${toggle ? 'toggle-on' : 'toggle-off'}`}></div>
      </div>
      <h1>{`${toggle ? 'ON' : 'OFF'}`}</h1>
    </div>
  );
}

export default ToggleSwitch;
