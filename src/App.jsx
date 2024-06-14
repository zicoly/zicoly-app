import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Blog/Navbar';
import BlogForm from './components/Blog/BlogForm';
import BlogList from './components/Blog/BlogList';
import BlogDetails from './components/Blog/BlogDetails';

const App = () => {
  return (
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={< BlogForm />} />
          <Route path="/blogs" element={< BlogList />} />
          <Route path="/blogs/:index" element={< BlogDetails />} />
        </Routes>
      </div>
  );
};

export default App;
