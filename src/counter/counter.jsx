import React, { useState } from 'react';
import './counter.css';

const Counter = () => {
  let [counter, setCounter] = useState(0);

  const startCount = () => {
    return counter === 0 ? 'Ноль' : counter;
  };
  const increment = () => {
    return setCounter(counter + 1);
  };

  const decrement = () => {
    return counter <= 0 ? 'Ноль' : setCounter(counter - 1);
  };

  const getBageClass = () => {
    let classes = 'mx-3 badge bg-';
    return classes += counter === 0 ? 'danger' : 'primary'
  }

  return (
    <>
      <br></br>
      <span className={getBageClass()}>{startCount()}</span>
      <button className="btn btn-secondary me-2 btn-sm" onClick={increment}>
        Increment
      </button>
      <button className="btn btn-secondary btn-sm" onClick={decrement}>
        Decrement
      </button>
    </>
  );
};

export default Counter;
