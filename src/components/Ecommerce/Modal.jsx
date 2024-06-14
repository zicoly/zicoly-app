import React from 'react';

function Modal({ message, isVisible }) {
  return (
    isVisible && (
      <div className="fixed top-0 left-0 w-full bg-red-500 text-white text-center p-4 shadow-lg">
        {message}
      </div>
    )
  );
}

export default Modal;
