import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const BlogList = () => {
  const [blogs, setBlogs] = useState(JSON.parse(localStorage.getItem('blogPost')) || []);

  const handleDelete = (index) => {
    const updatedBlogs = blogs.filter((_, i) => i !== index);
    setBlogs(updatedBlogs);
    localStorage.setItem('blogPost', JSON.stringify(updatedBlogs));
  };

  return (
    <div>
      <div className='mt-20'>
        <h2 className="text-4xl font-bold mb-6 text-center">Blogs</h2>
      </div>
      <div className="p-6 grid grid-cols-3 gap-x-4">
        {blogs.length > 0 ? (
          blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-4 mb-6 w-[480px] border border-black relative group"
            >
              <img
                src={blog.blogPicture}
                alt={blog.blogTitle}
                className="w-full h-48 object-cover rounded-md"
              />
              <h3 className="text-xl font-semibold mt-4">{blog.blogTitle}</h3>
              <p className="text-gray-600 mt-2">{blog.summary}</p>
              <Link to={`/blogs/${index}`} className="text-blue-500 hover:underline">Read More</Link>
              <div className="flex items-center justify-end pr-4 mt-4">
                <img
                  src={blog.authorPicture}
                  alt={blog.authorName}
                  className="w-10 h-10 rounded-full"
                />
                <div className="ml-4">
                  <p className="text-sm font-medium">{blog.authorName}</p>
                  <p className="text-sm text-gray-500">{blog.datePublished}</p>
                </div>
              </div>
              <button
                onClick={() => handleDelete(index)}
                className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No blogs available.</p>
        )}
      </div>
    </div>
  );
};

export default BlogList;
