import { useState } from 'react';
import './ValidatedInput.css';

export default function ValidatedInput() {
  const [password, setPassword] = useState('');

  let message = '';
  let icon = 'fa-x';

  if (password === '') {
    message = 'A password is required.';
    icon = 'fa-x';
  } else if (password.length < 8) {
    message = 'Your password is too short.';
    icon = 'fa-x';
  } else {
    icon = 'fa-check';
  }

  return (
    <form className="form-group">
      <div>
        <label>Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            className={`form-control`}
          />
          <i className={`fa-solid ${icon}`}></i>
          <p>{message}</p>
      </div>
    </form>
  );
}
