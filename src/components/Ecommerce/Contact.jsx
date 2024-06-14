import React from 'react';

const Contact = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-md mt-5">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-gray-700 mb-4">
        If you have any questions, feel free to reach out to us!
      </p>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700" htmlFor="name">Name</label>
          <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" type="text" id="name" />
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" type="email" id="email" />
        </div>
        <div>
          <label className="block text-gray-700" htmlFor="message">Message</label>
          <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600" id="message" rows="4"></textarea>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700" type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
