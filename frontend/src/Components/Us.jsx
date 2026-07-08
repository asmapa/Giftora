import React from "react";
import {
  FaShippingFast,
  FaGift,
  FaHeart,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShippingFast size={35} />,
    title: "Lightning Fast Delivery",
    description:
      "Get your favorite products delivered safely and quickly right to your doorstep.",
  },
  {
    icon: <FaGift size={35} />,
    title: "Unique Handmade Products",
    description:
      "Every item is crafted with love, making your gifts truly special and memorable.",
  },
  {
    icon: <FaHeart size={35} />,
    title: "Made With Love",
    description:
      "We believe every product should bring happiness, warmth, and beautiful memories.",
  },
  {
    icon: <FaHeadset size={35} />,
    title: "24/7 Friendly Support",
    description:
      "Need help? Our support team is always here to assist you anytime.",
  },
];

const Us = () => {
  return (
    <section className=" py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-pink-900">
            Why Shop With Us?
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            We don't just sell products—we create experiences you'll love.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4"
            >
              <div className="w-18 h-18 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-white flex items-center justify-center mb-6 group-hover:rotate-12 transition-all duration-500">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-500 leading-7">
                {item.description}
              </p>

              <div className="w-0 group-hover:w-full h-1 bg-pink-500 mt-6 rounded-full transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Us;