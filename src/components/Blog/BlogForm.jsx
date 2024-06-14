// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Modal from './modal';

// const BlogForm = () => {

//   const [formData, setFormData] = useState({
//     blogPicture: '',
//     blogTitle: '',
//     summary: '',
//     description: '',
//     authorName: '',
//     authorPicture: '',
//     datePublished: '',
//   });

//   const [posts, setPosts] = useState([]);

//   const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     // setPosts((prev) => [...prev, formData]);
//   };

//   const handleFileChange = async (e) => {
//     const { name, files } = e.target;
//     const file = files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setFormData({ ...formData, [name]: reader.result });
//     };
//     // setPosts((prev) => [...prev, formData]);
//     reader.readAsDataURL(file);
//   };

//   const handleSubmit = (e) => {
//     try {
//       e.preventDefault();
//     // blogs.push(formData);

//     // localStorage.setItem('blogPost', JSON.stringify(posts));
//     // const blogs = [...posts, formData];
//     setPosts((prevPosts) => [...prevPosts, formData]);
//     // console.log(posts);

//     setShowModal(false);

//     setTimeout(() => {
//       setShowModal(false);
//       resetForm();
//       navigate('/blogs');
//     }, 5000);
//     } catch (error) {
//       console.log(error);
//     }

//   };

//   useEffect(() => {
//     localStorage.setItem('blogPost', JSON.stringify(posts));
//     console.log(posts);
//   }, [posts]);

//   // useEffect(() => {
//   //   localStorage.setItem('blogPost', JSON.stringify(posts));
//   // },[]);

//   const resetForm = () => {
//     setFormData({
//       blogPicture: '',
//       blogTitle: '',
//       summary: '',
//       description: '',
//       authorName: '',
//       authorPicture: '',
//       datePublished: '',
//     });
//   };

//   return (
//     <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md my-20">
//       <h2 className="text-2xl font-bold mb-6">Create Blog Post</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label
//             className="block text-sm font-medium mb-2"
//             htmlFor="blogPicture"
//           >
//             Blog Picture
//           </label>
//           <input
//             required
//             type="file"
//             name="blogPicture"
//             id="blogPicture"
//             onChange={handleFileChange}
//             className="w-full px-3 py-2 border rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2" htmlFor="blogTitle">
//             Blog Title
//           </label>
//           <input
//             required
//             type="text"
//             name="blogTitle"
//             id="blogTitle"
//             value={formData.blogTitle}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-sm font-medium mb-2" htmlFor="summary">
//             Summary
//           </label>
//           <textarea
//             required
//             name="summary"
//             id="summary"
//             value={formData.summary}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-sm font-medium mb-2"
//             htmlFor="description"
//           >
//             Detailed Description
//           </label>
//           <textarea
//             required
//             name="description"
//             id="description"
//             value={formData.description}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-sm font-medium mb-2"
//             htmlFor="authorName"
//           >
//             Author's Name
//           </label>
//           <input
//             required
//             type="text"
//             name="authorName"
//             id="authorName"
//             value={formData.authorName}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-sm font-medium mb-2"
//             htmlFor="authorPicture"
//           >
//             Author's Picture
//           </label>
//           <input
//             required
//             type="file"
//             name="authorPicture"
//             id="authorPicture"
//             onChange={handleFileChange}
//             className="w-full px-3 py-2 border rounded-md"
//           />
//         </div>
//         <div className="mb-4">
//           <label
//             className="block text-sm font-medium mb-2"
//             htmlFor="datePublished"
//           >
//             Date Published
//           </label>
//           <input
//             required
//             type="date"
//             name="datePublished"
//             id="datePublished"
//             value={formData.datePublished}
//             onChange={handleChange}
//             className="w-full px-3 py-2 border rounded-md"
//           />
//         </div>
//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
//         >
//           Submit
//         </button>
//       </form>

//       <Modal show={showModal} onClose={() => setShowModal(false)} />
//     </div>
//   );
// };

// export default BlogForm;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from './modal';

const BlogForm = () => {
  const [formData, setFormData] = useState({
    blogPicture: '',
    blogTitle: '',
    summary: '',
    description: '',
    authorName: '',
    authorPicture: '',
    datePublished: '',
  });

  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('blogPost', JSON.stringify(posts));
    console.log(posts); // Log the updated posts array
  }, [posts]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setPosts((prevPosts) => [...prevPosts, formData]);
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
      resetForm();
      navigate('/blogs');
    }, 5000);
  };

  const resetForm = () => {
    setFormData({
      blogPicture: '',
      blogTitle: '',
      summary: '',
      description: '',
      authorName: '',
      authorPicture: '',
      datePublished: '',
    });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md my-20">
      <h2 className="text-2xl font-bold mb-6">Create Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="blogPicture"
          >
            Blog Picture
          </label>
          <input
            required
            type="file"
            name="blogPicture"
            id="blogPicture"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="blogTitle">
            Blog Title
          </label>
          <input
            required
            type="text"
            name="blogTitle"
            id="blogTitle"
            value={formData.blogTitle}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="summary">
            Summary
          </label>
          <textarea
            required
            name="summary"
            id="summary"
            value={formData.summary}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="description"
          >
            Detailed Description
          </label>
          <textarea
            required
            name="description"
            id="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="authorName"
          >
            Author's Name
          </label>
          <input
            required
            type="text"
            name="authorName"
            id="authorName"
            value={formData.authorName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="authorPicture"
          >
            Author's Picture
          </label>
          <input
            required
            type="file"
            name="authorPicture"
            id="authorPicture"
            onChange={handleFileChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-sm font-medium mb-2"
            htmlFor="datePublished"
          >
            Date Published
          </label>
          <input
            required
            type="date"
            name="datePublished"
            id="datePublished"
            value={formData.datePublished}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      <Modal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default BlogForm;
