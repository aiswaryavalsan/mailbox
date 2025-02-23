import React from 'react'
import logoImg from '../../assets/logo.jpg'
import { useDispatch, useSelector } from 'react-redux';
import {authActions}from '../store/authSlice'
import { Link } from 'react-router-dom';

const Navbar = () => {
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn);
  const dispatch=useDispatch();
  const onLogoutHandler=()=>{
    dispatch(authActions.logoutHandler())

  }
  return (
    <nav className='bg-white/80 shadow-lg backdrop-blur-sm  p-4 '>
    <div className='container flex justify-between items-center h-16'>
      <a href='#'>
        <img src={logoImg} className='w-9 h-9'/>
        <p>Mail Box</p>
      </a>
      <div>
        <ul className='flex justify-center items-center gap-10 font-semibold'>
            <li><Link to='/' className='text-gray-800 hover:text-gray-600 inline-block px-4 py-4 select-none'>Home</Link></li>
           {
           !isLoggedIn&& 
           <li><Link to='/login'>Signup</Link></li>
           } 
           {
           isLoggedIn&&
           <li>
            <Link to='/changepassword'>Change Password</Link>
            </li>
           }
            {
            isLoggedIn&&
            <button onClick={onLogoutHandler}>Logout
            </button>
            }
        </ul>
      </div>
    </div>
    </nav>
  );
}

export default Navbar