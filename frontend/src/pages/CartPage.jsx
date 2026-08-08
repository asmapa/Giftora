
import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { FaWhatsapp, FaTrash } from 'react-icons/fa';

const CartPage = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const whatsappMessage = cart
    .map(
      (item) =>
        `${item.name} (Qty: ${item.quantity}) - ₹${item.price * item.quantity}`
    )
    .join('%0A');

  return (
    <div className="max-w-7xl mx-auto px-4 pt-35 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Shopping Cart</h1>

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
                key={item.productId}
                className="flex gap-4 bg-white rounded-2xl shadow-sm border border-pink-100 p-4"
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

                  <p className="text-sm text-gray-500 mt-1">
                    Quantity: {item.quantity}
                  </p>
                </div>

                <button
                  onClick={() => removeFromCart(item.productId)}
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
              href={`https://wa.me/919876543210?text=Hi Eshaal Designs, I want to order:%0A%0A${whatsappMessage}%0A%0ATotal: ₹${totalPrice}`}
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
    </div>
  );
};

export default CartPage;

