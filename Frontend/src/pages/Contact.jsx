import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-semibold mb-4">Contact Us</h1>
      <form className="w-96 p-6 bg-white shadow-md rounded-lg">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full border border-gray-300 p-2 rounded-md focus:outline-none focus:ring focus:border-blue-300"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
