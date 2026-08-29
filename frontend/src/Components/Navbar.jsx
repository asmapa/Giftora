import React from 'react'
import {
 FaSearch,
 FaRegUser,
 FaShoppingBag,
 FaRegHeart
} from "react-icons/fa";
import {useContext} from "react"
import { CartContext } from "../context/CartContext";
import logo from "../assets/logo.png";
import { WishlistContext } from '../context/WishlistContext';

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const NavLink = ({ to, children }) => (
  <Link
    to={to}
    className="relative group text-gray-700 hover:text-pink-600 transition-colors duration-300"
  >
    {children}
    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-pink-500 to-rose-400 rounded-full transition-all duration-300 group-hover:w-full" />
  </Link>
);

const Navbar = () => {
const { cart } = useContext(CartContext);
const { wishlist } = useContext(WishlistContext);
const [search, setSearch] = useState('');
const navigate = useNavigate();
const wishlistCount = wishlist.length;

const cartCount = cart.reduce((total, item) => {
    return total + item.quantity;
}, 0);

  return (
    <div className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">

      {/* Announcement bar */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#062a33] via-[#083B47] to-[#062a33] text-white text-center py-3 text-sm tracking-wide">
        <span className="relative z-10 inline-flex items-center gap-2">
          <span className="text-pink-300 animate-sparkle">✦</span>
          Shop the Latest Jewelry Trends
          <span className="text-pink-300 animate-sparkle">✦</span>
        </span>
      </div>

      <nav className="flex flex-col lg:grid lg:grid-cols-3 items-center px-4 lg:px-12 py-3 gap-4">

  {/* Left */}
  <div className="flex items-center justify-between w-full lg:w-auto">

    <div className="flex items-center gap-2">

      <Link to="/" className="shrink-0">
        <img
          src={logo}
          alt="Giftora Logo"
          className="w-12 h-12 lg:w-16 lg:h-16 object-contain transition-transform duration-500 hover:scale-110 hover:rotate-3"
        />
      </Link>

  <div className="relative">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors peer-focus:text-pink-500" />

        <input
  type="text"
  placeholder="Search jewelry..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === 'Enter' && search.trim() !== '') {
      navigate(`/products?search=${encodeURIComponent(search.trim())}`);
    }
  }}
  className="peer pl-9 pr-3 py-2 border border-gray-200 rounded-full w-44 sm:w-56 lg:w-64 text-sm bg-white/70 focus:ring-2 focus:ring-pink-400 focus:border-pink-300 outline-none transition-all duration-300 focus:w-48 sm:focus:w-64 lg:focus:w-72"
/>
    
      </div>

    </div>

    {/* Mobile Icons */}
<div className="flex lg:hidden gap-4 text-xl items-center">

  <FaRegUser className="cursor-pointer text-gray-600 hover:text-pink-600 transition-colors duration-300 hover:scale-110" />

  {/* Cart */}
  <Link to="/cart" className="relative text-gray-600 hover:text-pink-600 transition-colors duration-300 hover:scale-110">
    <FaShoppingBag className="cursor-pointer" />

    {cartCount > 0 && (
      <span key={cartCount} className="animate-badge-pop absolute -top-2 -right-2 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center shadow-sm">
        {cartCount}
      </span>
    )}
  </Link>

  {/* Wishlist */}
  <Link to="/wishlist" className="relative text-gray-600 hover:text-pink-600 transition-colors duration-300 hover:scale-110">
    <FaRegHeart className="cursor-pointer" />

    {wishlistCount > 0 && (
      <span key={wishlistCount} className="animate-badge-pop absolute -top-2 -right-2 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center shadow-sm">
        {wishlistCount}
      </span>
    )}
  </Link>

</div>



    

  </div>

  {/* Center */}
  <div className="text-center">

    <h1 className="text-2xl sm:text-3xl lg:text-5xl font-light tracking-[4px] lg:tracking-[8px] bg-gradient-to-r from-[#083B47] via-pink-600 to-[#083B47] bg-clip-text text-transparent animate-shimmer-text">
      Eshaal D'signs
    </h1>

    <h3 className="text-sm sm:text-lg lg:text-2xl font-bold tracking-[3px] lg:tracking-[8px] text-gray-700">
      Inspired by Elegance
    </h3>



<div className="flex justify-center gap-5 lg:gap-10 mt-4 text-sm lg:text-lg font-medium">

  <NavLink to="/#home">Home</NavLink>

  <NavLink to="/products">Shop</NavLink>

  <NavLink to="/#about">About</NavLink>

  <NavLink to="/#contact">Contact</NavLink>

</div>

    

    
    

  </div>

 {/* Desktop Icons */}
<div className="hidden lg:flex items-center gap-6 text-2xl">

  <FaRegUser className="cursor-pointer text-gray-600 hover:text-pink-600 hover:scale-110 transition-all duration-300" />

  {/* Cart */}
  <Link to="/cart" className="relative text-gray-600 hover:text-pink-600 hover:scale-110 transition-all duration-300">
    <FaShoppingBag />

    {cartCount > 0 && (
      <span key={cartCount} className="animate-badge-pop absolute -top-2 -right-2 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center shadow-sm">
        {cartCount}
      </span>
    )}
  </Link>

  {/* Wishlist */}
  <Link to="/wishlist" className="relative text-gray-600 hover:text-pink-600 hover:scale-110 transition-all duration-300">
    <FaRegHeart />

    {wishlistCount > 0 && (
      <span key={wishlistCount} className="animate-badge-pop absolute -top-2 -right-2 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center shadow-sm">
        {wishlistCount}
      </span>
    )}
  </Link>

</div>

</nav>

      <hr className="border-gray-100" />
    </div>
  )
}

export default Navbar
