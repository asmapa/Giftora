import React from "react";
import { FaStar, FaShoppingCart, FaBolt } from "react-icons/fa";
import QuantitySelector from "./QuantitySelector";

const ProductInfo = ({ product, addToCart }) => {
  return (
    <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-xl shadow-md p-6">

      {/* LEFT SIDE - PRODUCT IMAGE */}
      <div className="flex justify-center items-center">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full max-w-md rounded-xl object-cover border"
        />
      </div>

      {/* RIGHT SIDE - PRODUCT DETAILS */}
      <div>

        {/* Product Name */}
        <h1 className="text-4xl font-bold text-gray-800">
          {product.name}
        </h1>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">
          <div className="flex text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <span className="text-gray-500 text-sm">
            (120 Reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mt-5 flex items-center gap-4">

          <h2 className="text-4xl font-bold text-pink-600">
            ₹{product.price}
          </h2>

          <span className="line-through text-gray-400">
            ₹{Math.round(product.price * 1.2)}
          </span>

          <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
            20% OFF
          </span>

        </div>

        {/* Category */}
        <div className="mt-6">

          <p className="text-gray-700">
            <span className="font-semibold">
              Category :
            </span>{" "}
            {product.category}
          </p>

          <p className="mt-3">

            <span className="font-semibold">
              Availability :
            </span>{" "}

            {product.stock > 0 ? (
              <span className="text-green-600 font-semibold">
                In Stock ({product.stock})
              </span>
            ) : (
              <span className="text-red-600 font-semibold">
                Out of Stock
              </span>
            )}

          </p>

        </div>

        {/* Description */}
        <div className="mt-6">

          <h3 className="font-semibold text-lg mb-2">
            About this Product
          </h3>

          <p className="text-gray-600 leading-7">
            {product.description}
          </p>

        </div>

        {/* Quantity */}
        <div className="mt-8">
          <QuantitySelector />
        </div>

        {/* Buttons */}

        <div className="flex flex-wrap gap-4 mt-8">

          <button
            onClick={() => addToCart(product)}
            className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg transition"
          >
            <FaShoppingCart />
            Add To Cart
          </button>

          <button
            className="flex items-center gap-2 bg-black hover:bg-gray-900 text-white px-8 py-3 rounded-lg transition"
          >
            <FaBolt />
            Buy Now
          </button>

        </div>

      </div>

    </div>
  );
};

export default ProductInfo;