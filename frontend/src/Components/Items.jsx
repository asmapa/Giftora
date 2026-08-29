import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';
import { Eye } from 'lucide-react';
import { WishlistContext } from '../context/WishlistContext';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ShareButton from './ShareButton';
import Loader from './Loader';




const Items = () => {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const { addToCart } = useContext(CartContext);
const { toggleWishlist, isInWishlist } = useContext(WishlistContext);
const navigate = useNavigate();

//Collecting Items
 useEffect(() => {
  axios
    .get('https://giftora-7mmv.onrender.com/api/products')
    .then((response) => setProducts(response.data))
    .catch((err) => console.log(err))
    .finally(() => setLoading(false));
}, []);

  return (
    <div className="py-10 px-3 sm:px-6 lg:px-8 bg-pink-50 min-h-screen">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-3">
        Our Collection
      </h2>

      <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
        Discover handmade gifts crafted with love for every special moment.
      </p>

      {loading ? (
        <Loader label="Fetching our latest collection..." />
      ) : (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 max-w-7xl mx-auto">
        {products.slice(0,10).map((product) => (
          <div
            key={product.productId}
            onClick={() => navigate(`/product/${product.productId}`)}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-pink-100 hover:-translate-y-1 cursor-pointer"
          >
            {/* Image Section */}
            <div className="relative overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-48 sm:h-60 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product);
                  }}
                  className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
                >
                  <Heart
                    size={20}
                    className={
                      isInWishlist(product.productId)
                        ? 'fill-red-500 text-red-500'
                        : 'text-gray-500'
                    }
                  />
                </button>

                <ShareButton product={product} />
              </div>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col h-[220px]">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 line-clamp-2 min-h-[48px] mb-0">
                {product.name}
              </h3>

              <p className="text-pink-600 font-bold text-lg ">
  ₹ {product.price}
</p>

{product.stock > 0 ? (
  <p className="text-green-600 text-sm font-medium mt-1 flex items-center gap-1">
    <span className="w-2 h-2 bg-green-500 rounded-full inline-block"></span>
    In Stock
  </p>
) : (
  <p className="text-red-600 text-sm font-medium mt-1 flex items-center gap-1">
    <span className="w-2 h-2 bg-red-500 rounded-full inline-block"></span>
    Out of Stock
  </p>
)}

              <p className="text-gray-500 text-xs sm:text-sm mt-1 line-clamp-2 flex-grow">
                {product.description}
              </p>

              {/* Buttons */}
              {/* Buttons */}
<div className="mt-4 flex gap-2">

 {/* Add to Cart */}
<button
  onClick={(e) => {
    e.stopPropagation();
    addToCart(product);
  }}
  className="flex-1 flex items-center justify-center gap-2 bg-pink-600 text-white py-2 rounded-xl hover:bg-pink-700 transition text-sm font-medium shadow-sm"
>
  <ShoppingCart size={18} />
  <span className="hidden sm:inline">Add</span>
</button>

  {/* Details */}
  <Link
    to={`/product/${product.productId}`}
    onClick={(e) => e.stopPropagation()}
    className="flex-1"
  >
    <button
      className="w-full flex items-center justify-center gap-2 border border-pink-300 text-pink-700 py-2 rounded-xl hover:bg-pink-50 transition text-sm font-medium"
    >
      <Eye size={18} />

      {/* Show text only on desktop */}
      <span className="hidden sm:inline">Details</span>
    </button>
  </Link>

</div>




            </div>
          </div>
        ))}
      </div>
      )}

     <div className="flex justify-center mt-12">
  <Link to="/products">
    <button className="bg-pink-700 hover:bg-pink-800 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition font-medium">
      Show All Items
    </button>
  </Link>
</div>




    </div>
  );
};

export default Items;
