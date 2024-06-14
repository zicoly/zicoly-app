import React, { useState } from 'react'

export default function Count() {
    const [count, setCount] = useState(4);

    function decerementCount() {
        setCount (prevCount => prevCount - 1);
    }
    function increaseCount() {
        setCount(prevCount => prevCount + 1);
    }

  return (
    <div className='text-center mt-10'>
        <button className='bg-green-400 w-5' onClick={decerementCount}>-</button>
        <span className='mx-5'>{count}</span>
        <button className='bg-red-400 w-5' onClick={increaseCount}>+</button>
    </div>
  )
}
