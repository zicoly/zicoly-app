import React from 'react';
import PersonCard from './PersonCard';

function PersonList({ People }) {
  return (
    <div>
      {People.map((person, index) => (
        < PersonCard key={index} name={person.name} age={person.age}/>
      ))}
    </div>
  );
}

export default PersonList;