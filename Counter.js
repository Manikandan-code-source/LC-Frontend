import React, { useState } from 'react';

const CounterDisplay = ({ count }) => {
  return <h1>Current Count: {count}</h1>;
};

const Counter = () => {
  const [count, setCount] = useState(0); 

  const increment = () => {
    setCount(count + 1); 
  };

  const decrement = () => {
    setCount(count - 1); 
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <CounterDisplay count={count} />
      <button onClick={increment} style={{ marginRight: '10px' }}>
        Increment
      </button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default Counter;
