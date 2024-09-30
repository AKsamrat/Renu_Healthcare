import React from 'react';
import img1 from './images/volunter.jpg'; // Import your image here

export default function Example() {
  return (
    <div className="bg-orange-500 mb-10  h-[500px] py-24 sm:py-32 relative">
      {/* Image */}
      <img src={img1} alt="band " className="absolute inset-0 w-full h-full object-cover opacity-50" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <form className=" bg-opacity-80 p-8 rounded-lg shadow-lg">
          <input type="text" placeholder="Name" className="w-full  mb-4 p-2 rounded-md shadow-sm required:" />
          <input type="email" placeholder="Email" className="w-full mb-4 p-2 rounded-md shadow-sm required:" />
          <input type="text" placeholder="Message" className="w-full mb-4 p-2 rounded-md shadow-sm required" />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300">Submit</button>
        </form>
      </div>
    </div>
  )
}