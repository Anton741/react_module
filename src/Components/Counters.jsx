import Counter from './counter.jsx'
import React, { useState } from 'react';


const Counters = () => {
  const initialParametrs = [
    { value: 0, name: '23', id: 1 },
    { name: 'Artur', value: 4, id: 2 },
    { name: 'Vlad', value: 5, id: 3 },
  ];
  const [counters, setCounters]  = useState(initialParametrs)


  const increment = (counterId) => {
    const newList = counters.map((counter) => {
      if (counter.id === counterId) {
        counter.value = counter.value  + 1;
      }
      return counter;
    });
    setCounters(newList);
  };

  const decrement = (counterId) => {
    const newList = counters.map((counter) => {
      if (counter.id === counterId){
        counter.value = counter.value > 0 ? counter.value - 1 : 0
      }
      return counter
    });
    setCounters(newList);
  }; 
  
  const deleteCounter = (counterId) => {
    const newList = counters.filter((counter) => counter.id != counterId)
    setCounters(newList)
  };

  const resetCounters = (initial) => {
    setCounters(initial)
  }
  return (
    <>
      <button className="btn  btn-danger btn-sm mt-5 ms-3" onClick = {() => resetCounters(initialParametrs)}>Reset</button>
      {counters.map((counter) => {
        return (
          <Counter
            key={counter.id}
            onDelete={deleteCounter}
            onIncrement={increment}
            onDecrement={decrement}
            {...counter}
          ></Counter>
        );
      })}
    </>
  );
}


export default Counters;