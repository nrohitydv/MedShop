import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="container mx-auto text-center">
        <p className="text-gray-600">
          Doctor Appointment Booking Website &copy; 2023
        </p>
        <div className="flex justify-center mt-2">
          <a
            href="#"
            className="text-gray-600 hover:text-blue-500 transition duration-300 mx-2"
          >
            Terms of Service
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="#"
            className="text-gray-600 hover:text-blue-500 transition duration-300 mx-2"
          >
            Privacy Policy
          </a>
          <span className="text-gray-600">|</span>
          <a
            href="/contact"
            className="text-gray-600 hover:text-blue-500 transition duration-300 mx-2"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
