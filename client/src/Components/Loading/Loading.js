import React from 'react';
import { BarLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 via-purple-400 to-pink-500 p-6'>
      <div className='relative mb-8 flex flex-col items-center'>
        {/* Clean, simple logo display */}
        <img
          src='./logo.png'
          className='h-40 w-40 rounded-full border-4 border-white shadow-lg object-cover'
          alt='logo'
        />
=      </div>

      {/* Main heading */}
      <h1 className='text-4xl font-extrabold text-white mb-4 drop-shadow-md'>
        Renu Sharma Healthcare & Education Foundation
      </h1>

      {/* Subtext */}
      <p className='text-xl text-white mb-6 opacity-90 tracking-wide'>
        A New Vision for the Nation
      </p>

      {/* Bar loader */}
      <BarLoader
        color="#ffffff"
        width={300}
        height={5}
        className='mx-auto shadow-md'
      />
    </div>
  );
};

export default Loading;
