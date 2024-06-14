import React, { useState } from 'react'

// First method, using one state hook
// using objects in the useState Hook

export default function CountTheme() {
    const [state, setSate] = useState( {count: 4, theme: 'blue'} );
    const count = state.count;
    const theme = state.theme;


    // without passing the [...prevSate] the return code will overwrite the default of the old state
    function decerementCount() {
        setSate (prevSate => {
            return {...prevSate, count: prevSate.count -1}
        })
    }
    function increaseCount() {
        setSate (prevSate => {
            return {...prevSate, count: prevSate.count +1}
        })
    }

  return (
    <div className='text-center mt-10'>
        <button className='bg-green-400 w-5' onClick={decerementCount}>-</button>
        <span className='mx-5'>{count}</span>
        <span>{theme}</span>
        <button className='bg-red-400 w-5' onClick={increaseCount}>+</button>
    </div>
  )
}
