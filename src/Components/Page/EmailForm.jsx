import React from 'react'
import SlateEditor from './SlateEditor';

const EmailForm = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
    <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
      <form className="flex flex-col gap-4">
        {/* To Field */}
        <input
          type="email"
          placeholder="Recipient's Email"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        {/* Subject Field */}
        <input
          type="text"
          placeholder="Subject"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        {/* Editor Field */}
        <div className="border p-3 rounded-lg min-h-[200px] bg-gray-50">
          <SlateEditor />
        </div>
  
        {/* Submit Button */}
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