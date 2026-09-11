import React, { useEffect, useState } from 'react';
import { FaShoppingCart, FaTruck } from 'react-icons/fa';
import QuantitySelector from './QuantitySelector';
import ShareButton from '../ShareButton';

// Best-effort hex mapping for common jewelry color names so the swatch
// actually looks like the color. Anything not in this list still shows
// as a clickable pill, just without a colored dot filled in.
const COLOR_HEX_MAP = {
  gold: '#D4AF37',
  golden: '#D4AF37',
  'rose gold': '#B76E79',
  rosegold: '#B76E79',
  silver: '#C0C0C0',
  black: '#000000',
  white: '#FFFFFF',
  red: '#DC2626',
  blue: '#2563EB',
  'sky blue': '#38BDF8',
  green: '#16A34A',
  pink: '#EC4899',
  'baby pink': '#F9A8D4',
  purple: '#9333EA',
  lavender: '#C4B5FD',
  yellow: '#EAB308',
  orange: '#F97316',
  brown: '#92400E',
  maroon: '#7F1D1D',
  navy: '#1E3A8A',
  beige: '#E8DCC8',
  cream: '#FFFDD0',
  peach: '#FFE5B4',
  teal: '#0D9488',
  turquoise: '#40E0D0',
  grey: '#9CA3AF',
  gray: '#9CA3AF',
  copper: '#B87333',
  bronze: '#CD7F32',
  mint: '#A7F3D0'
};

const getSwatchColor = (colorName) => {
  const hex = COLOR_HEX_MAP[colorName.trim().toLowerCase()];
  return hex || '#f3f4f6';
};

const ProductInfo = ({ product, addToCart }) => {

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] || null
  );
  const [quantity, setQuantity] = useState(1);

  // Reset the selected color/quantity/image whenever the customer
  // navigates to a different product (this component instance is reused
  // across product pages, so its state doesn't reset on its own).
  useEffect(() => {
    setSelectedImage(0);
    setSelectedColor(product.colors?.[0] || null);
    setQuantity(1);
  }, [product.productId]);

  const increaseQty = () => setQuantity((prev) => prev + 1);
  const decreaseQty = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

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

        {/* Colors - only shown when the product actually has color options */}
        {product.colors?.length > 0 && (
          <div className="mt-8">

            <h3 className="font-semibold text-lg mb-3">
              Color{selectedColor ? `: ${selectedColor}` : ''}
            </h3>

            <div className="flex flex-wrap gap-3">

              {product.colors.map((c) => {
                const isSelected = selectedColor === c;
                return (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setSelectedColor(c)}
                    title={c}
                    className={`flex items-center gap-2 pl-1 pr-3 py-1 rounded-full border-2 transition ${
                      isSelected
                        ? 'border-pink-600 bg-pink-50'
                        : 'border-gray-200 hover:border-pink-300'
                    }`}
                  >
                    <span
                      className="w-6 h-6 rounded-full border border-gray-300 shadow-inner"
                      style={{ backgroundColor: getSwatchColor(c) }}
                    />
                    <span className="text-sm font-medium text-gray-700">
                      {c}
                    </span>
                  </button>
                );
              })}

            </div>

          </div>
        )}

        {/* Quantity */}
        <div className="mt-8">
          <QuantitySelector
            quantity={quantity}
            onIncrease={increaseQty}
            onDecrease={decreaseQty}
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">

          <button
            onClick={() => addToCart(product, quantity, selectedColor)}
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
