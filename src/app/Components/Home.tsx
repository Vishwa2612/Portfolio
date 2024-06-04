'use client';
import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home: React.FC = () => {
  return (
    <div id='home' className='w-full h-screen bg-[#0b1c36]'>
      <div className='max-w-[1300px] mx-auto p-10 flex flex-col sm:flex-row justify-evenly h-full'>
        <div className='max-w-[1300px] mx-auto px-8 flex flex-col justify-center text-center sm:text-left'>
          <p className='text-green-600 text-lg sm:text-xl'>Hi, my name is</p>
          <h1 className='text-2xl sm:text-4xl lg:text-7xl font-bold text-[#ccd6f6] leading-tight'>VISHWA K</h1>
          <h2 className='text-2xl sm:text-3xl lg:text-5xl font-bold text-[#8892b0] leading-tight'>I'm a Web Developer.</h2>
          <p className='text-[#8892b0] py-4 max-w-[700px] text-sm sm:text-base'>
            I’m a web developer specializing in building (and occasionally
            designing) exceptional digital experiences. Currently, I’m focused
            on building responsive web applications.
          </p>
          <div>
            <Link to='work' smooth={true} duration={500}>
              <button type='button' className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-green-600 hover:border-green-600'>
                View Work
                <span className='group-hover:rotate-90 duration-300'>
                  <HiArrowNarrowRight className='ml-3' />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className='mx-auto mt-8 sm:mt-0 justify-center items-center flex'>
          <img src="/Images/Vishwa.png" alt="Vishwa" className='max-w-full h-auto sm:max-w-1/2 lg:max-w-xl rounded-md' />
        </div>
      </div>
    </div>
  );
};

export default Home;
