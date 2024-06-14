import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const { index } = useParams();
  const blogs = JSON.parse(localStorage.getItem('blogPost')) || [];
  const blog = blogs[index];

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="w-[90%] mx-auto p-6 bg-white shadow-md rounded-md mt-20">
      <h2 className="text-4xl font-bold mb-6">{blog.blogTitle}</h2>
      <img src={blog.blogPicture} alt={blog.blogTitle} className="w-[70%] h-64 object-cover rounded-md mb-6" />
      <div className="flex items-center mb-6">
        <img src={blog.authorPicture} alt={blog.authorName} className="w-16 h-16 rounded-full" />
        <div className="ml-4">
          <p className="text-xl font-medium">{blog.authorName}</p>
          <p className="text-sm text-gray-500">{blog.datePublished}</p>
        </div>
      </div>
      <p className="text-lg text-gray-700 mb-6">{blog.description}</p>
    </div>
  );
};

export default BlogDetails;
