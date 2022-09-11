import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    // tailwinds uses base line styles
    // menu
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white ">
      <h1 className="w-full text-3xl font-bold text-[#00df98] ">RT.</h1>
      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleClick} className="block md:hidden">
        {click ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* <div>
        <AiOutlineMenu size={20}/>
      </div>
     */}
      {/* Sidebar menu */}
      <div
        className={
          click
            ?  "fixed left-0 top-0 w-[60%]  h-full border-r border-r-gray-900 bg-[#000300] md:hidden ease-in-out duration-500":"ease-in-out duration-500 fixed left-[-100%]"
            
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df98] m-4 px-4 pt-4">
          RT.
        </h1>
        <ul className=" uppercase p-4 ">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
