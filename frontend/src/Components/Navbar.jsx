import React from 'react'
import {
 FaSearch,
 FaRegUser,
 FaShoppingBag
} from "react-icons/fa";
import logo from "../assets/logo2.png";
const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="bg-[#083B47] text-white text-center py-3 text-sm ">
        Free shipping on all orders above 500
      </div>
      <nav className='grid grid-cols-3 items-center px-12'>
        <div className='flex gap-4 items-center'>
          <div>
            <img
  src={logo}
  alt="Giftora Logo"
  className="w-16 h-16 object-contain"
/>
          </div>
            <FaSearch />
             <input
             
            type="text"
            placeholder="Search gifts..."
            className="border border-gray-300 rounded-full px-4 py-2 w-64 outline-none focus:ring-2 focus:ring-pink-400 transition-all"
          />
        </div>
        <div>
{/* Center */}
    <div className="text-center">
      
        <h1 className="text-5xl font-light tracking-[8px]">
            GIFTORA
        </h1>
        <h3 className='text-2xl font-extrabold tracking-[8px]'>BY ASMA AMEEN</h3>
        <div className="flex justify-center gap-10 mt-6 text-lg">
            <a href="#">Shop</a>
            <a href="#">About Us</a>
            <a href="#">Contact Us</a>
        </div>
    </div>
        </div>
        <div className='flex gap-10 text-3xl justify-center'>
<FaRegUser/>
<FaShoppingBag/>
        </div>
      </nav>

      <hr className="border-gray-200" />
    </div>
  )
}

export default Navbar
