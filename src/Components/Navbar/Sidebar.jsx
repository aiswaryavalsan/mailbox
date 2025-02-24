import React, { useState } from "react";

import { Link } from "react-router-dom";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  console.log(isOpen);

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-gray-800 text-white h-screen p-5 transition-all ${
          isOpen ? "w-64" : "w-16"
        }`}
      >
        {/* Toggle Button */}
        <button onClick={() => setIsOpen(!isOpen)}>
          {/* {isOpen ? <X size={24} /> : <Menu size={24} />} */}
          <span class="material-symbols-outlined">menu</span>
        </button>

        {/* Sidebar Content */}
        <ul className="mt-10 space-y-4">
        <li className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-md cursor-pointer">
            <Link to="/home">{isOpen && <span>Home</span>}</Link>
          </li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-md cursor-pointer">
            <Link to="/home/compose">{isOpen && <span> Compose</span>}</Link>
          </li>
          
          <li className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-md cursor-pointer">
            <Link to="/home">{isOpen && <span>Inbox</span>}</Link>
          </li>
          <li className="flex items-center gap-3 p-2 hover:bg-gray-700 rounded-md cursor-pointer">
            <Link to="/home">{isOpen && <span>SendBox</span>}</Link>
          
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
