import React from 'react'
import {
 FaSearch,
 FaRegUser,
 FaShoppingBag
} from "react-icons/fa";
import {useContext} from "react"
import { CartContext } from "../context/CartContext";
import logo from "../assets/logo.png";



const Navbar = () => {
const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((total, item) => {
    return total + item.quantity;
}, 0);

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="bg-[#083B47] text-white text-center py-3 text-sm ">
        Shop the Latest Jewelry Trends
      </div>
      <nav className="flex flex-col lg:grid lg:grid-cols-3 items-center px-4 lg:px-12 py-3 gap-4">

  {/* Left */}
  <div className="flex items-center justify-between w-full lg:w-auto">

    <div className="flex items-center gap-2">

      <img
        src={logo}
        alt="Giftora Logo"
        className="w-12 h-12 lg:w-16 lg:h-16 object-contain"
      />

      <div className="relative">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

        <input
          type="text"
          placeholder="Search..."
          className="pl-9 pr-3 py-2 border rounded-full w-44 sm:w-56 lg:w-64 text-sm focus:ring-2 focus:ring-pink-400 outline-none"
        />
      </div>

    </div>

    {/* Mobile Icons */}
    <div className="flex lg:hidden gap-4 text-xl">

      <FaRegUser />

      <div className="relative">
        <FaShoppingBag />

        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
            {cartCount}
          </span>
        )}

      </div>

    </div>

  </div>

  {/* Center */}
  <div className="text-center">

    <h1 className="text-2xl sm:text-3xl lg:text-5xl font-light tracking-[4px] lg:tracking-[8px]">
      Eshaal D'signs
    </h1>

    <h3 className="text-sm sm:text-lg lg:text-2xl font-bold tracking-[3px] lg:tracking-[8px]">
      Inspired by Elegance
    </h3>

    <div className="flex justify-center gap-5 lg:gap-10 mt-4 text-sm lg:text-lg">
      <a href="#">Shop</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </div>

  </div>

  {/* Desktop Icons */}
  <div className="hidden lg:flex gap-10 text-3xl justify-center">

    <FaRegUser />

    <div className="relative">

      <FaShoppingBag />

      {cartCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
          {cartCount}
        </span>
      )}

    </div>

  </div>

</nav>

      <hr className="border-gray-200" />
    </div>
  )
}

export default Navbar
