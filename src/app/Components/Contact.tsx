import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='w-full h-screen bg-[#0b1c36] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/lbkmqgrb" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <h1 className='text-4xl font-bold inline border-b-4 border-green-500 text-white'>Contact Me</h1>
                <p className='text-white py-4'>// Feel free to drop a message or email me at example@domain.com</p>
            </div>
            <input className='bg-gray-200 p-2 rounded-md' type="text" placeholder='Name' name='name' required />
            <input className='my-4 p-2 bg-gray-200 rounded-md' type="email" placeholder='Email' name='email' required />
            <textarea className='bg-gray-200 p-2 rounded-md' name="message" placeholder='Message' required></textarea>
            <button className='text-white border-2 border-green-500 hover:bg-green-500 hover:border-green-500 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact;
