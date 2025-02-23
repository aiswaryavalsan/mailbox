import React, { useRef, useState } from 'react'
import { useSelector } from 'react-redux';

const ChangePassword = () => {
    const token=useSelector(state=>state.auth.token);
    const[error,setError]=useState('');
    const passwordRef=useRef();
    const confirmPasswordRef=useRef();
    const changePasswordHandler=async(e)=>{
      setError('')
        e.preventDefault();
        const password=passwordRef.current.value;
        const confirmPassword=confirmPasswordRef.current.value;
        if(password!==confirmPassword){
          setError('Password does not matching');
          return;

        }
        try{
        const response=await fetch('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyC4OHncylrw5Aq4NuqLugUwTFgkydeOz7k',
            {method:'POST',
            body:JSON.stringify({idToken:token,password,returnSecureToken:false}),
            headers:{'content-type':'application/json'}}
        );
        const data=await response.json();
       
        if(data&&data.error){
          console.log(data)
          throw new Error(data.error.message)
        }
       else{
        console.log(data);
       }
      }
      catch(error){
        alert(error)

      }


    }
  return (
    <>
    
    <div className="flex items-center justify-center min-h-screen p-4">
    <div className="bg-white shadow-lg rounded-lg p-6 w-200 max-w-md ">
    <br/>
    <h1 className= "  text-2xl font-semibold text-center text-gray-700 mb-4">Change Password</h1> 
    <br/>
    <form onSubmit={changePasswordHandler} className="flex flex-col gap-4 items-center">
    
        <input 
        type="password" 
        minLength="7" 
        ref={passwordRef} 
        placeholder='New Password'
       className="w-[50%] px-4 py-2 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
        </input>
        <input 
        type="password" 
        minLength="7" 
        ref={confirmPasswordRef} 
        placeholder='Confirm Password'
       className="w-[50%] px-4 py-2 border-b border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
        </input>
        <button  className="w-[50%] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200">Change Password</button>
        <br/>
        {error&&<p className='text-red-600'>{error}</p>}
    </form>

     </div>
     </div>
    </>
  )
}

export default ChangePassword