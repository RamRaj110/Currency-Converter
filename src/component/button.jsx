import React from 'react';

const AnimatedGradientButton = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 -m-0.5 bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 rounded-lg animate-gradient-x">
        <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900 rounded-lg animate-gradient-x"></div>
      </div>
      
      <button className=" relative px-4 py-2 w-36 h-10 bg-gray-900 text-white font-bold rounded-lg flex items-center justify-center gap-2.5 hover:bg-gray-800 transition-colors duration-200">
        Button
      </button>
    </div>
  );
};


export default AnimatedGradientButton;