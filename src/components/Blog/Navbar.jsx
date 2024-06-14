import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 text-white fixed w-full top-0 z-[1000]">
      <div className="max-w-7xl mx-auto flex justify-between">
        <a href ="/" className="font-bold">Create Blog</a>
        <a href ="/blogs" className="ml-4">Blogs</a>
      </div>
    </nav>
  );
};

export default Navbar;
