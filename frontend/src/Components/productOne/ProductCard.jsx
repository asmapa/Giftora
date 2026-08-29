import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { WishlistContext } from "../../context/WishlistContext";
import ShareButton from "../ShareButton";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { toggleWishlist, isInWishlist } = useContext(WishlistContext);

  return (
    <div
      onClick={() => navigate(`/product/${product.productId}`)}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
    >

      {/* Image */}
      <div className="relative overflow-hidden">

        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
        />

        {/* Trending Badge */}
        {product.trending === "Yes" && (
          <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs px-3 py-1 rounded-full">
            Trending
          </span>
        )}

        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {/* Wishlist */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(product);
            }}
            className="bg-white p-2 rounded-full shadow hover:bg-pink-100 transition"
          >
            <FaHeart
              className={
                isInWishlist(product.productId)
                  ? 'text-pink-600'
                  : 'text-gray-500 hover:text-pink-600'
              }
            />
          </button>

          <ShareButton product={product} />
        </div>

      </div>

      {/* Details */}
      <div className="p-4">

        <h3 className="text-lg font-semibold text-gray-800 truncate">
          {product.name}
        </h3>

        <p className="text-gray-500 text-sm mt-1">
          {product.category}
        </p>

        <p className="text-pink-600 text-2xl font-bold mt-3">
          ₹{product.price}
        </p>

        <p className="text-gray-500 text-sm mt-3 line-clamp-2">
          {product.description}
        </p>

        <Link
          to={`/product/${product.productId}`}
          onClick={(e) => e.stopPropagation()}
          className="block text-center bg-pink-600 hover:bg-pink-700 text-white font-medium py-3 rounded-xl mt-5 transition"
        >
          View Details
        </Link>

      </div>

    </div>
  );
};

export default ProductCard;
