import React, { useState } from 'react';

/*
Second method, having multiple state Hook
we dont need to worry about our state clashing,
because we are now using two different hooks to manage our two different tpyes of state
========= BENEFIT =========
- you can have multiple different pieces of state all broken out
and it becomes more easier to manage and change.
*/ 
export default function CountTheme2() {
  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState('blue');

  // without passing the [prevCount] the return code will overwrite the default of the old state
  function decerementCount() {
    setCount((prevCount) => prevCount - 1);
    setTheme('red')
  }
  function increaseCount() {
    setCount((prevCount) => prevCount + 1);
    setTheme('blue')
  }

  return (
    <div className="text-center mt-10">
      <button className="bg-green-400 w-5" onClick={decerementCount}>
        -
      </button>
      <span className="mx-5">{count}</span>
      <span>{theme}</span>
      <button className="bg-red-400 w-5" onClick={increaseCount}>
        +
      </button>
    </div>
  );
}
