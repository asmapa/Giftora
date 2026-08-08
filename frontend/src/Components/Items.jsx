import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';

const Items = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('/product.json')
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="py-10 px-3 sm:px-6 lg:px-8 bg-pink-50 min-h-screen">
      <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-3">
        Our Collection
      </h2>

      <p className="text-center text-gray-500 mb-10 max-w-2xl mx-auto">
        Discover handmade gifts crafted with love for every special moment.
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-8 max-w-7xl mx-auto">
        {products.map((product) => (
          <div
            key={product.productId}
            className="group bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-pink-100 hover:-translate-y-1"
          >
            {/* Image Section */}
            <div className="relative overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-48 sm:h-60 lg:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Wishlist Button */}
              <button
                className="absolute top-3 right-3 bg-white/90 backdrop-blur p-2 rounded-full shadow hover:bg-pink-100 transition"
                aria-label="Add to wishlist"
              >
                <Heart size={18} className="text-pink-600" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 flex flex-col h-[220px]">
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 line-clamp-2 min-h-[48px]">
                {product.name}
              </h3>

              <p className="text-pink-600 font-bold text-lg mt-2">
                ₹ {product.price}
              </p>

              <p className="text-gray-500 text-xs sm:text-sm mt-1 line-clamp-2 flex-grow">
                {product.description}
              </p>

              {/* Buttons */}
              <div className="mt-4 flex gap-2">
                <button
                  className="flex-1 flex items-center justify-center gap-2 bg-pink-600 text-white py-2 rounded-xl hover:bg-pink-700 transition text-sm font-medium shadow-sm"
                >
                  <ShoppingCart size={16} />
                  Add
                </button>

                <Link
                  to={`/product/${product.productId}`}
                  className="flex-1"
                >
                  <button className="w-full border border-pink-300 text-pink-700 py-2 rounded-xl hover:bg-pink-50 transition text-sm font-medium">
                    Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show All */}
      <div className="flex justify-center mt-12">
        <button className="bg-pink-700 hover:bg-pink-800 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition font-medium">
          Show All Items
        </button>
      </div>
    </div>
  );
};

export default Items;