import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="mt-4 px-4 py-2 bg-blue-300 text-white w-40 mx-auto rounded hover:bg-blue-500"
    >
      {children}
    </button>
  );
};

export default Button;