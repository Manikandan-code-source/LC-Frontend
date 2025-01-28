import React, { useState } from 'react';

const ConditionalRendering = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const styles = {
    loggedIn: { color: 'green', fontWeight: 'bold' },
    loggedOut: { color: 'red', fontWeight: 'bold' },
    button: {
      padding: '10px 20px',
      margin: '10px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {isLoggedIn ? (
        <h1 style={styles.loggedIn}>Welcome back, User!</h1>
      ) : (
        <h1 style={styles.loggedOut}>Please log in.</h1>
      )}

      <button style={styles.button} onClick={toggleLogin}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default ConditionalRendering;
