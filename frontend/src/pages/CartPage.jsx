
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { FaWhatsapp, FaTrash } from 'react-icons/fa';
import BackButton from '../Components/BackButton';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const whatsappMessage = cart
    .map(
      (item) =>
        `${item.name}${item.selectedColor ? ` (Color: ${item.selectedColor})` : ''} (Qty: ${item.quantity}) - ₹${item.price * item.quantity}`
    )
    .join('%0A');

  return (
    <div className="max-w-7xl mx-auto px-4 pt-40 py-8">
    <div className="mb-4 mt-3">
      <BackButton fallback="/" />
    </div>
    <div className="text-center py-8 border-b border-pink-100 mb-8">

  <p className="text-pink-500 uppercase tracking-[4px] text-xs sm:text-sm font-semibold mb-2">
    Eshaal D'signs
  </p>

  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-gray-800 leading-tight">
    Your Jewelry Bag
  </h1>

  <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg leading-relaxed px-4">
    Beautiful choices! Your selected treasures are waiting to be wrapped with love and delivered to your doorstep.
  </p>

  <div className="flex items-center justify-center gap-3 mt-6">
    <span className="h-px w-12 bg-pink-200"></span>
    <span className="text-pink-400 text-xl">✦</span>
    <span className="h-px w-12 bg-pink-200"></span>
  </div>

</div>
      {cart.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">Your cart is empty 🛍️</p>
          <Link
            to="/"
            className="inline-block mt-4 bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-8">

          {/* Left: Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={`${item.productId}-${item.selectedColor || 'default'}`}
                onClick={() => navigate(`/product/${item.productId}`)}
                className="flex gap-4 bg-white rounded-2xl shadow-sm border border-pink-100 p-4 cursor-pointer hover:shadow-md transition"
              >
                <img
                  src={item.images?.[0] || 'https://via.placeholder.com/150'}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-xl"
                />

                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 line-clamp-2">
                    {item.name}
                  </h3>

                  <p className="text-pink-600 font-bold mt-1">
                    ₹ {item.price}
                  </p>

                  {item.selectedColor && (
                    <p className="text-sm text-gray-600 mt-1">
                      Color: <span className="font-medium">{item.selectedColor}</span>
                    </p>
                  )}

                  <p className="text-sm text-gray-500 mt-1">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromCart(item.productId, item.selectedColor);
                  }}
                  className="text-red-500 hover:text-red-600 self-start p-2"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          {/* Right: Summary */}
          <div className="bg-white rounded-2xl shadow-lg border border-pink-100 p-6 h-fit sticky top-24">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Order Summary
            </h2>

            <div className="flex justify-between text-gray-600 mb-2">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between text-gray-600 mb-4">
              <span>Subtotal</span>
              <span>₹ {totalPrice}</span>
            </div>

            <hr className="my-4" />

            <div className="flex justify-between text-lg font-bold text-gray-800 mb-6">
              <span>Total</span>
              <span>₹ {totalPrice}</span>
            </div>

            <a
              href={`https://wa.me/918086889063?text=Hi Eshaal Designs, I want to order:%0A%0A${whatsappMessage}%0A%0ATotal: ₹${totalPrice}`}
              target="_blank"
              rel="noreferrer"
            >
              <button className="w-full flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-medium shadow-md transition">
                <FaWhatsapp className="text-xl" />
                Order on WhatsApp
              </button>
            </a>

            <p className="text-xs text-gray-500 text-center mt-3">
              Your order details will open directly in WhatsApp.
            </p>
          </div>
        </div>
      )}


      {/* Developer Footer */}
<div className="mt-10 pt-6 border-t border-pink-100 text-center">
  <p className="text-sm text-gray-500">
    Crafted with ❤ by{' '}
    <span className="font-medium text-pink-700">Asma P A</span>
  </p>

  <a
    href="mailto:asmapa.dev@gmail.com"
    className="text-sm text-pink-600 hover:text-pink-700 hover:underline transition"
  >
    asmapa.dev@gmail.com
  </a>
</div>
    </div>
  );
};

export default CartPage;

