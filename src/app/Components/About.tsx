import React from 'react';

const About: React.FC = () => {
  return (
    <div id='about' className='w-full h-screen bg-[#0b1c36] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-green-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Vishwa, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p className='text-lg'>Passionate web developer dedicated to crafting exceptional websites. 
              Specializing in responsive design to enhance user experience across all platforms. 
              Experience ranges from individual clients to large enterprises. 
              Continuously improving skills and staying updated with industry trends. 
              Internship at Cybernaaut deepened expertise and fueled commitment to excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;