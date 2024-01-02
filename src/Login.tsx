import React, { useState } from 'react';

interface LoginProps {
  onLogin: (username: string, password: string) => void;
  onCreateAccountClick: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin, onCreateAccountClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = () => {
    // Validate input or perform additional logic as needed
    onLogin(username, password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="button" onClick={handleLoginClick}>
          Login
        </button>
        <p>Don't have an account? <button type="button" onClick={onCreateAccountClick}>Create Account</button></p>
      </form>
    </div>
  );
};

export default Login;
