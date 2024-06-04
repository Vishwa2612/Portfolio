'use client';

import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-scroll';

const Navbar: React.FC = () => {
  const [nav, setNav] = useState<boolean>(false);
  const handleClick = () => setNav(!nav);
  
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div className='font-bold text-4xl'>
        Portfolio
      </div>
      <ul className='hidden md:flex items-center justify-around'>
        <li className="rounded-2xl cursor-pointer hover:bg-green-600 hover:text-white duration-500 pr-2 pl-2">
          <Link to='home'  smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="rounded-2xl cursor-pointer hover:bg-green-600 hover:text-white duration-500 pr-2 pl-2">
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="rounded-2xl cursor-pointer hover:bg-green-600 hover:text-white duration-500 pr-2 pl-2">
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="rounded-2xl cursor-pointer hover:bg-green-600 hover:text-white duration-500 pr-2 pl-2">
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="rounded-2xl cursor-pointer hover:bg-green-600 hover:text-white duration-500 pr-2 pl-2">
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      
      <ul className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'
          }
      >
        <li className='py-6 text-4xl rounded-full hover:bg-gradient-to-br from-orange-400 to-red-600 duration-500'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl rounded-full hover:bg-gradient-to-br from-orange-400 to-red-600 duration-500'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl rounded-full hover:bg-gradient-to-br from-orange-400 to-red-600 duration-500'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl rounded-full hover:bg-gradient-to-br from-orange-400 to-red-600 duration-500'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl rounded-full hover:bg-gradient-to-br from-orange-400 to-red-600 duration-500'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a
              className='flex justify-around items-center w-full text-gray-300'
              href='https://www.linkedin.com/in/vishwa-k-70818824b'
            >
              Linkedin 
              <FaLinkedin size={30}/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a
              className='flex justify-around items-center w-full text-gray-300'
              href='https://github.com/Vishwa2612'
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
            <Link
              className='flex justify-around items-center w-full text-gray-300'
              href='#'
              to='contact'
              
            >
              Email <HiOutlineMail size={30} />
            </Link>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a
              className='flex justify-around items-center w-full text-gray-300'
              href='/Resume/VISHWA_K.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>

      
    </div>
  );
};

export default Navbar;
