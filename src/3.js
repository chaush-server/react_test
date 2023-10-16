import React, { useState } from 'react';

const UserGreeting = ({ username, onLogout }) => {
  return (
    <div>
      <h2>Добро пожаловать, {username}!</h2>
      <button onClick={onLogout}>Выйти</button>
    </div>
  );
};

const GuestGreeting = ({ onLogin }) => {
  return (
    <div>
      <h2>Добро пожаловать, Гость!</h2>
      <button onClick={onLogin}>Войти</button>
    </div>
  );
};

const App = () => {
  const [username, setUsername] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLogin = () => {
    if (username) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <div>
      <input
        placeholder="Введите имя"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      {isLoggedIn ? (
        <UserGreeting username={username} onLogout={handleLogout} />
      ) : (
        <GuestGreeting onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
