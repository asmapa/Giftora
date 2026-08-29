import React from 'react';

const Loader = ({ label = 'Loading beautiful pieces...', fullHeight = false }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center py-20 ${
        fullHeight ? 'min-h-[60vh]' : ''
      }`}
    >
      <div className="relative w-14 h-14 sm:w-16 sm:h-16">
        <div className="absolute inset-0 rounded-full border-4 border-pink-100"></div>
        <div className="absolute inset-0 rounded-full border-4 border-pink-500 border-t-transparent animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center text-pink-400 text-lg">
          ✦
        </div>
      </div>
      <p className="mt-4 text-gray-500 text-sm sm:text-base font-medium tracking-wide">
        {label}
      </p>
    </div>
  );
};

export default Loader;
