import React, { useDebugValue, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import  authActions from '../store/authSlice';
const Signup = () => {
    const dispatch=useDispatch();
    const[isLogin,setIsLogin]=useState(false);
    const[error,setError]=useState('');
    const emailRef=useRef();
    const passwordRef=useRef();
    const confirmPasswordRef=useRef();
    const navigate=useNavigate();
    const toggleLoginHandler=()=>{
        setError('');
        setIsLogin(prev=>!prev);
    }
    const onSubmitHandler=async(event)=>{
        event.preventDefault();
        setError('');
        const email=emailRef.current.value.trim();
        const password=passwordRef.current.value.trim();
       
        console.log('1')
        if(!email||!password){
           
            setError('Email and Password is Required')
            return
        }
       if(!isLogin){
        const confirmPassword=confirmPasswordRef.current.value.trim();
        if(password.length<6){
            setError('Password must be at least 6 characters long.');
            return;

        }
        if(password!==confirmPassword){
            setError('Passwords Do Not Match');
            return;
        }
       }
        

       
        try{
        const url=isLogin?'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC4OHncylrw5Aq4NuqLugUwTFgkydeOz7k':'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC4OHncylrw5Aq4NuqLugUwTFgkydeOz7k' ;
        const response=await fetch(url,{method:'POST',body:JSON.stringify({email,password,returnSecureToken:true}),headers:{'Content-Type': 'application/json'}})
          const data=await response.json(); 
          if(!response.ok){
            throw new Error(data.error.message);
          }
          alert(isLogin?'Login Successful':'Sign up successful')
          if(isLogin){
            navigate('/home')
            dispatch(authActions.loginHandler({email,token:data.idToken}))
          }
               
        }catch(error){
            
           setError(error.message);
        } 
             
        }
  return (
    <>
      
        <br/>
        <br/>
        <br/>
        <div className=" flex flex-col justify-center items-center p-1 mx-auto">
        
      
        <form onSubmit={onSubmitHandler} className="bg-white w-90 rounded-lg shadow-lg  gap-5 flex flex-col items-even text-center items-center ">
        <h1  className="text-3xl font-bold text-gray-800 mb-6"> {isLogin?'Login':'Sign Up'}</h1>
        
           {!isLogin&&<input type="text" placeholder='Full Name'className= ' w-60 border-b border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'/>}
            <input type="email" ref={emailRef} placeholder='Email' className=' w-60 border-b border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
            <input type="password" ref={passwordRef} placeholder='Password'className=' w-60 border-b border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           {!isLogin&& <input type="password" ref={confirmPasswordRef} placeholder='Confirm Password' className=' w-60 border-b border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'/>}
            <button  className="bg-blue-500 text-white font-bold w-30 rounded-lg hover:bg-blue-600 transition">
              {isLogin?'LOGIN':'SIGNUP'}
            </button>
            {error&&<p className='text-red-500'>{error}</p>}
           <br/>
           <br/>
          
        </form>
        <div>
        <button onClick={toggleLoginHandler} className='text-white px-1 py-2 mb-3'>
            {isLogin?'Create New Account':'Login With Existing Account'}
            </button>
        </div>
        </div>
       
        
    </>
    
  )
}

export default Signup