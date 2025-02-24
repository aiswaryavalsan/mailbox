import React, { useRef, useState } from 'react'
import SlateEditor from './SlateEditor';
import { useSelector } from 'react-redux';

const EmailForm = () => {
  const recipientEmailRef=useRef();
  const subjectRef=useRef();
  const[message,setMessage]=useState();
  const sender=useSelector(state=>state.auth.email)
  const sendMessageHandler=async(e)=>{
    e.preventDefault();
    const recipient=recipientEmailRef.current.value;
    const subject=subjectRef.current.value;
    const response=await fetch('https://mailbox-58938-default-rtdb.firebaseio.com/message.json',{
      method:'POST',body:JSON.stringify({message,recipient,sender,subject,status:false}),
      headers:{'content-type':'application/json'}
    })
    const data=await response.json();
    console.log(data);
  

  }
  const getMessage=(message)=>{
    setMessage(message);

  }
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
      <form className="flex flex-col gap-4" onSubmit={sendMessageHandler}>
       
        <input
          type="email"
          placeholder="Recipient's Email"
          ref={recipientEmailRef}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
       
        <input
          type="text"
          placeholder="Subject"
          ref={subjectRef}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
       
        <div className="border p-3 rounded-lg min-h-[200px] bg-gray-50">
          <SlateEditor getMessage={getMessage} />
        </div>
  
    
        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
        >
          Send Email
        </button>
      </form>
    </div>
  </div>
  
  )
}

export default EmailForm;