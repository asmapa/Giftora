import React from "react";
import {
  FaShippingFast,
  FaGem,
  FaHeart,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: <FaShippingFast size={28} />,
    title: "Fast Delivery",
    description:
      "Enjoy quick and secure delivery of your favorite jewelry right to your doorstep.",
  },
  {
    icon: <FaGem size={28} />,
    title: "Premium Accessories",
    description:
      "Discover elegant bracelets, rings, necklaces, earrings, anklets, and more for every occasion.",
  },
  {
    icon: <FaHeart size={28} />,
    title: "Elegant Designs",
    description:
      "Every accessory is carefully selected to add beauty, confidence, and style to your everyday look.",
  },
  {
    icon: <FaHeadset size={28} />,
    title: "Customer Support",
    description:
      "Have questions? Our friendly team is always ready to help you with your shopping experience.",
  },
];

const Us = () => {
  return (
    <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-900">
            Why Shop With Us?
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-gray-600 mt-3 lg:mt-4">
            Beautiful accessories designed to complement your unique style.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl lg:rounded-3xl p-4 sm:p-5 lg:p-8 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 lg:hover:-translate-y-4"
            >
              <div className="w-14 h-14 lg:w-18 lg:h-18 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-white flex items-center justify-center mb-4 lg:mb-6 group-hover:rotate-12 transition-all duration-500">
                {item.icon}
              </div>

              <h3 className="text-base sm:text-lg lg:text-2xl font-semibold text-gray-800 mb-2 lg:mb-4">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm lg:text-base text-gray-500 leading-5 lg:leading-7">
                {item.description}
              </p>

              <div className="w-0 group-hover:w-full h-1 bg-pink-500 mt-4 lg:mt-6 rounded-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Us;