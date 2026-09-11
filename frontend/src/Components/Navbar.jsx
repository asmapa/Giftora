import React, { useContext, useState } from 'react'
import {
  FaSearch,
  FaRegUser,
  FaShoppingBag,
  FaRegHeart,
  FaHome,
  FaStore,
  FaCubes,
  FaInfoCircle,
  FaPhoneAlt,
  FaChevronDown
} from "react-icons/fa";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from '../context/WishlistContext';
import logo from "../assets/logo.png";
import { Link, useNavigate, useLocation } from 'react-router-dom';

const NavLink = ({ to, children, icon: Icon, active, compact }) => (
  <Link
    to={to}
    className={`group relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 rounded-full ${
      compact ? 'text-xs sm:text-sm' : 'text-xs sm:text-sm lg:text-base'
    } font-medium tracking-wide whitespace-nowrap transition-all duration-300 ${
      active
        ? 'bg-gradient-to-r from-pink-600 to-rose-500 text-white shadow-md shadow-pink-300/50'
        : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
    }`}
  >
    {Icon && (
      <Icon
        className={`text-xs sm:text-sm lg:text-base transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${
          active ? 'text-white' : 'text-pink-400 group-hover:text-pink-600'
        }`}
      />
    )}
    <span>{children}</span>
    {!active && (
      <span className="absolute left-4 right-4 -bottom-0.5 h-[2px] bg-gradient-to-r from-pink-500 to-rose-400 rounded-full scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300" />
    )}
  </Link>
);

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const [search, setSearch] = useState('');
  const [moreOpen, setMoreOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const wishlistCount = wishlist.length;

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const isHomeActive = location.pathname === '/' && (location.hash === '' || location.hash === '#home');
  const isShopActive = location.pathname.startsWith('/products');
  const isMaterialsActive = location.pathname.startsWith('/materials');
  const isAboutActive = location.pathname === '/' && location.hash === '#about';
  const isContactActive = location.pathname === '/' && location.hash === '#contact';

  // Collapse the "more" row any time one of its links becomes active
  const moreActive = isHomeActive || isAboutActive || isContactActive;

  return (
    <div className="fixed top-0 left-0 w-full bg-white/90 backdrop-blur-md shadow-md z-50">

      {/* Announcement bar */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#062a33] via-[#083B47] to-[#062a33] text-white text-center py-2 sm:py-3 text-xs sm:text-sm tracking-wide">
        <span className="relative z-10 inline-flex items-center gap-2">
          <span className="text-pink-300 animate-sparkle">✦</span>
          Shop the Latest Jewelry Trends
          <span className="text-pink-300 animate-sparkle">✦</span>
        </span>
      </div>

      <nav className="flex flex-col lg:grid lg:grid-cols-3 items-center px-4 lg:px-12 py-3 gap-3">

        {/* Left */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <div className="flex items-center gap-2">
            <Link to="/" className="shrink-0">
              <img
                src={logo}
                alt="Giftora Logo"
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain transition-transform duration-500 hover:scale-110 hover:rotate-3"
              />
            </Link>

            {/* Search hidden on very small screens to save space, shown from sm up */}
            <div className="relative hidden sm:block">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
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
                className="peer pl-9 pr-3 py-2 border border-gray-200 rounded-full w-40 sm:w-56 lg:w-64 text-sm bg-white/70 focus:ring-2 focus:ring-pink-400 focus:border-pink-300 outline-none transition-all duration-300 focus:w-48 sm:focus:w-64 lg:focus:w-72"
              />
            </div>
          </div>

          {/* Mobile Icons */}
          <div className="flex lg:hidden gap-3.5 text-lg items-center">
            <FaSearch
              className="sm:hidden cursor-pointer text-gray-600 hover:text-pink-600 transition-colors"
              onClick={() => navigate('/products')}
            />
            <FaRegUser className="cursor-pointer text-gray-600 hover:text-pink-600 transition-colors hover:scale-110" />

            <Link to="/cart" className="relative text-gray-600 hover:text-pink-600 transition-colors hover:scale-110">
              <FaShoppingBag />
              {cartCount > 0 && (
                <span key={cartCount} className="animate-badge-pop absolute -top-2 -right-2 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-full w-4.5 h-4.5 text-[10px] flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link to="/wishlist" className="relative text-gray-600 hover:text-pink-600 transition-colors hover:scale-110">
              <FaRegHeart />
              {wishlistCount > 0 && (
                <span key={wishlistCount} className="animate-badge-pop absolute -top-2 -right-2 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-full w-4.5 h-4.5 text-[10px] flex items-center justify-center shadow-sm">
                  {wishlistCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Center */}
        <div className="text-center w-full">
          <h1 className="text-xl sm:text-3xl lg:text-5xl font-light tracking-[3px] sm:tracking-[4px] lg:tracking-[8px] bg-gradient-to-r from-[#083B47] via-pink-600 to-[#083B47] bg-clip-text text-transparent animate-shimmer-text">
            Eshaal D'signs
          </h1>
          <h3 className="text-xs sm:text-lg lg:text-2xl font-bold tracking-[2px] sm:tracking-[3px] lg:tracking-[8px] text-gray-700">
            Inspired by Elegance
          </h3>

          {/* Primary row: Shop + Materials always visible, plus the "more" toggle */}
          <div className="flex items-center justify-center flex-wrap gap-1 sm:gap-1.5 mt-3 sm:mt-4 bg-white/70 backdrop-blur border border-pink-100 rounded-full px-1.5 py-1.5 shadow-sm mx-auto w-fit">
            <NavLink to="/products" icon={FaStore} active={isShopActive} compact>Shop</NavLink>
            <NavLink to="/materials" icon={FaCubes} active={isMaterialsActive} compact>Materials</NavLink>

            <button
              onClick={() => setMoreOpen((v) => !v)}
              aria-expanded={moreOpen}
              aria-label="More navigation links"
              className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
                moreActive
                  ? 'bg-gradient-to-r from-pink-600 to-rose-500 text-white shadow-md shadow-pink-300/50'
                  : 'text-gray-600 hover:text-pink-600 hover:bg-pink-50'
              }`}
            >
              <FaChevronDown
                className={`text-xs transition-transform duration-300 ${moreOpen ? 'rotate-180' : ''}`}
              />
            </button>
          </div>

          {/* Secondary row: collapses/expands smoothly */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              moreOpen ? 'max-h-14 opacity-100 mt-2' : 'max-h-0 opacity-0 mt-0'
            }`}
          >
            <div className="flex items-center justify-center flex-wrap gap-1 sm:gap-1.5 bg-white/70 backdrop-blur border border-pink-100 rounded-full px-1.5 py-1.5 shadow-sm mx-auto w-fit">
              <NavLink to="/#home" icon={FaHome} active={isHomeActive} compact>Home</NavLink>
              <NavLink to="/#about" icon={FaInfoCircle} active={isAboutActive} compact>About</NavLink>
              <NavLink to="/#contact" icon={FaPhoneAlt} active={isContactActive} compact>Contact</NavLink>
            </div>
          </div>
        </div>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center gap-6 text-2xl justify-self-end">
          <FaRegUser className="cursor-pointer text-gray-600 hover:text-pink-600 hover:scale-110 transition-all duration-300" />

          <Link to="/cart" className="relative text-gray-600 hover:text-pink-600 hover:scale-110 transition-all duration-300">
            <FaShoppingBag />
            {cartCount > 0 && (
              <span key={cartCount} className="animate-badge-pop absolute -top-2 -right-2 bg-gradient-to-br from-pink-500 to-rose-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            )}
          </Link>

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