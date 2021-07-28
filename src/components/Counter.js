import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Counter() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const incrementRedux = () => dispatch({ type: 'INCREMENT' });
  const decrementRedux = () => dispatch({ type: 'DECREMENT' });

  return (
    <div>
      <div>{counter}</div>
      <button onClick={incrementRedux}>Increment Redux</button>
      <button onClick={decrementRedux}>Decrement Redux</button>
    </div>
  );
}
