import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative bg-gray-900">
      {/* Hero image with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80"></div>
      </div>
      
      {/* Hero content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Find Your Dream Home
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Discover the perfect property that matches your lifestyle and budget. 
            Explore our extensive collection of homes for sale and rent.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link 
              to="/listings" 
              className="btn-primary text-center py-3 px-6 text-lg"
            >
              Browse Properties
            </Link>
            <button className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white font-medium py-3 px-6 rounded-lg transition duration-300 ease-in-out text-lg backdrop-blur-sm">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;