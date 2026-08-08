import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import { CartContext } from '../context/CartContext';
import { FaTrash, FaShoppingCart } from 'react-icons/fa';

const WishlistPage = () => {

  const { wishlist, toggleWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  return (
    <div className="max-w-6xl mx-auto px-4 pt-32 lg:pt-28 pb-8">

      <h1 className="text-3xl font-bold text-gray-800 mb-2">
        Wishlist 
      </h1>

      <p className="text-gray-500 mb-6">
        A little collection of things you love 
      </p>

      {wishlist.length === 0 ? (

        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">
            Your wishlist is empty 🤍
          </p>
        </div>

      ) : (

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

          {wishlist.map((item) => (

            <div
              key={item.productId}
              className="bg-white rounded-2xl shadow-sm border border-pink-100 p-3 sm:p-4 hover:shadow-lg transition"
            >

              <img
                src={item.images?.[0] || 'https://via.placeholder.com/300'}
                alt={item.name}
                className="w-full h-44 sm:h-52 object-cover rounded-xl mb-4"
              />

              <h3 className="font-semibold text-sm sm:text-base line-clamp-2 text-gray-800">
                {item.name}
              </h3>

              <p className="text-pink-600 font-bold mt-2 text-sm sm:text-base">
                ₹ {item.price}
              </p>

              <div className="flex gap-2 mt-4">

                {/* Add to Cart */}
                <button
                  onClick={() => addToCart(item)}
                  className="flex-1 flex items-center justify-center gap-2 bg-pink-600 text-white py-2 rounded-xl hover:bg-pink-700 transition text-sm font-medium"
                >
                  <FaShoppingCart />
                  <span className="hidden sm:inline">Add</span>
                </button>

                {/* Remove from Wishlist */}
                <button
                  onClick={() => toggleWishlist(item)}
                  className="p-2 border rounded-xl text-red-500 hover:bg-red-50 transition"
                >
                  <FaTrash />
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default WishlistPage;