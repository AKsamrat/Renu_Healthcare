import React, { useEffect } from 'react';
import './Gallery.css';
import Herosection from './herosection';
import Grid from './grid';
import Band from './band';

const Gallery = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls the page to the top
  }, []); // Runs only once after initial render

  return (
    <>
    <div className='sm:w-11/12 bg-gray-100 m-auto'>
      <Herosection />
      <Grid />
      <Band />
      </div>
    </>
  );
};

export default Gallery;