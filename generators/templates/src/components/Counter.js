import React from 'react';

export default function Counter(props) {
  return (
    <div>
      <h1>{props.value}</h1>
      <button onClick={props.onIncrement}>+</button>
      <button onClick={props.onDecrement}>-</button>
    </div>
  );
}
