import React from 'react';
import Background from '../img/Background.jpg';
import { Link } from 'react-router-dom';

const BackPic = () => {
  return (
    <section className='bg-emerald-200 min-h-[400px] md:min-h-screen flex items-center'>
      <div className='container mx-auto flex md:flex-row justify-between items-center'>
        <div className='md:w-1/2 px-4'>
          <h1 className='text-4xl font-semibold text-gray-800 mb-4 uppercase'>
            Autumn/Winter 2023/2024
          </h1>
          <p className='text-xl font-semibold flex items-center text-gray-600 uppercase border-bottom bg-black-400'>
            Latest collection...
          </p>
          <Link
            to={'/'}
            className='self-start uppercase'
          >
            Explore
          </Link>
        </div>
        <div className='md:w-2/1'>
          <img
            className='h-auto w-full max-w-lg transition-all duration-300 rounded-lg cursor-pointer filter grayscale hover:grayscale-0'
            src={Background}
            alt=''
          />
        </div>
      </div>
    </section>
  );
};

export default BackPic;
