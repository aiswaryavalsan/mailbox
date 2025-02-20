import React from 'react'
import logoImg from '../../../assets/logo.jpg'
const Navbar = () => {
  return (
    <nav className='bg-white/80 shadow-lg backdrop-blur-sm fixed top-0 w-full p-4 '>
    <div className='container flex justify-between items-center h-16'>
      <a href='#'>
        <img src={logoImg} className='w-9 h-9'/>
        <p>Mail Box</p>
      </a>
      <div>
        <ul className='flex justify-center items-center gap-10 font-semibold'>
            <li><a className='text-gray-800 hover:text-gray-600 inline-block px-4 py-4 select-none'>Home</a></li>
            <li><a>Signup</a></li>
            <li><a>Login</a></li>
        </ul>
      </div>
    </div>
    </nav>
  );
}

export default Navbar