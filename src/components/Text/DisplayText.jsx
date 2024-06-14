import React from 'react';

export default function DisplayText({ Title, Subtitle }) {
  return (
    <ul>
      <li>{Title}</li>
      <li>{Subtitle}</li>
    </ul>
  );
}
