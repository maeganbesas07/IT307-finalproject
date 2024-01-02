import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';

const App: React.FC = () => {
  const [isLoginFormVisible, setLoginFormVisible] = useState<boolean>(true);

  const handleLogin = (username: string, password: string) => {
    console.log('Login with:', { username, password });
  };

  const handleSignup = (username: string, password: string) => {
    console.log('Signup with:', { username, password });
  };

  const handleSignupLinkClick = () => {
    setLoginFormVisible(false);
  };

  const handleBackToLogin = () => {
    setLoginFormVisible(true);
  };

  return (
    <div className="container">
      <div className="card">
        {isLoginFormVisible ? (
          <>
            <h1 className="heading">Login Page</h1>
            <Login onLogin={handleLogin} onCreateAccountClick={handleSignupLinkClick} />
          </>
        ) : (
          <>
            <h1 className="heading">Sign Up Page</h1>
            <Signup onSignup={handleSignup} />
            <p className="signupLink" onClick={handleBackToLogin}>
              Back to login
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
