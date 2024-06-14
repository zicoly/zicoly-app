import React from 'react';
import PersonList from './PersonList';

function ParentArray() {
  const people = [
    { name: 'zion', age: 10 },
    { name: 'ademola', age: 11 },
    { name: 'stella', age: 12 },
    { name: 'deolu', age: 13 },
  ];
  return (
    <div>
      <PersonList People={people} />
    </div>
  );
}

export default ParentArray;
