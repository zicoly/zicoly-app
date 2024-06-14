import React from 'react'

export default function PersonCard({name, age}) {
  return (
    <div className='border border-gray-400 p-10 m-10'>
        <h1>{name}</h1>
        <p>Age: {age}</p>
    </div>
  )
}
