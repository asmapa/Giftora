import React, { useState } from 'react';
import { FaShoppingCart, FaTruck } from 'react-icons/fa';
import QuantitySelector from './QuantitySelector';
import ShareButton from '../ShareButton';

const ProductInfo = ({ product, addToCart }) => {

  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-xl shadow-md p-6 mt-10">

      {/* LEFT SIDE - PRODUCT IMAGE */}
      <div>

        <div className="flex justify-center items-center border rounded-xl p-2">
          <img
            src={product.images?.[selectedImage]}
            alt={product.name}
            className="w-full max-w-md rounded-xl object-cover"
          />
        </div>

        {/* Thumbnail Images */}
        {product.images?.length > 1 && (
          <div className="flex gap-3 mt-4 flex-wrap justify-center">

            {product.images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                onClick={() => setSelectedImage(index)}
                className={`w-16 h-16 rounded-lg object-cover cursor-pointer border-2 ${
                  selectedImage === index
                    ? 'border-pink-500'
                    : 'border-gray-200'
                }`}
              />
            ))}

          </div>
        )}

      </div>

      {/* RIGHT SIDE - PRODUCT DETAILS */}
      <div>

        {/* Product Name */}
        <h1 className="text-3xl lg:text-4xl font-bold text-gray-800">
          {product.name}
        </h1>

        {/* Price */}
        <div className="mt-5 flex flex-wrap items-center gap-4">

          <h2 className="text-4xl font-bold text-pink-600">
            ₹{product.price}
          </h2>

          {product.originalPrice > 0 && (
            <span className="line-through text-gray-400 text-lg">
              ₹{product.originalPrice}
            </span>
          )}

          {product.discountPercent > 0 && (
            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">
              {product.discountPercent}% OFF
            </span>
          )}

        </div>

        {/* Category & Stock */}
        <div className="mt-6 space-y-3">

          <p className="text-gray-700">
            <span className="font-semibold">Category:</span> {product.category}
          </p>

          {product.color && (
            <p className="text-gray-700">
              <span className="font-semibold">Color:</span> {product.color}
            </p>
          )}

          <p className="text-gray-700">
            <span className="font-semibold">Availability:</span>{' '}

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

          <p className="text-gray-700 flex items-center gap-2">
            <FaTruck className="text-pink-500" />
            Delivery: {product.deliveryDays}
          </p>

        </div>

        {/* Description */}
        <div className="mt-6">

          <h3 className="font-semibold text-lg mb-2">
            About this Product
          </h3>

          <p className="text-gray-600 leading-7 whitespace-pre-line">
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
            className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-lg transition shadow-md"
          >
            <FaShoppingCart />
            Add To Cart
          </button>

          <ShareButton product={product} variant="text" />

        </div>

        <p className="text-sm text-gray-500 mt-3">
          Open cart to place your order directly through WhatsApp.
        </p>

      </div>

    </div>
  );
};

export default ProductInfo;