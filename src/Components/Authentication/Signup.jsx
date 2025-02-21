import React, { useRef, useState } from 'react'

const Signup = () => {
    const[isLogin,setIsLogin]=useState(false);
    const emailRef=useRef();
    const passwordRef=useRef();
    const toggleLoginHandler=()=>{
        setIsLogin(prev=>!prev);
    }
    const onSubmitHandler=(event)=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passwordRef.current.value;
        console.log('hi')
        console.log(isLogin)
        if(isLogin){

        }
        else{
            console.log('ji')
            fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC4OHncylrw5Aq4NuqLugUwTFgkydeOz7k',
             {method:'POST',body:JSON.stringify({email,password,returnSecureToken:true}),headers:{'Content-Type': 'application/json'}})
             .then((response)=>{
                if(!response.ok){
                    throw new Error(response)

                }
                else{
                   return response.json();
                }
               
             }).then(data=>{
                console.log(data)
             }).catch(e=>{
                console.log(e);
             })
            
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
            <input type="email" ref={emailRef} placeholder='Email' className=' w-60 border-b border-gray-500focus:outline-none focus:ring-2 focus:ring-blue-500'/>
            <input type="password" ref={passwordRef} placeholder='Password'className=' w-60 border-b border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
           {!isLogin&& <input type="password" placeholder='Confirm Password' className=' w-60 border-b border-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500'/>}
            <button  className="bg-blue-500 text-white font-bold w-30 rounded-lg hover:bg-blue-600 transition">
              {isLogin?'LOGIN':'SIGNUP'}
            </button>
           
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