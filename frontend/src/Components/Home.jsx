import React from "react";
import home from "../assets/home.png";

const Home = () => {
  return (
    <section className="w-full mt-28 lg:mt-36">

      

      {/* Content */}
      <div className="bg-gradient-to-br from-rose-50 via-pink-100 to-purple-100 rounded-2xl lg:rounded-3xl shadow-xl mx-4 sm:mx-8 lg:mx-12 my-8 p-6 sm:p-8 lg:p-16">

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-pink-700">
          Shine with Every Detail ✨
        </h2>

        <p className="text-center text-gray-600 mt-3 italic text-sm sm:text-base lg:text-lg">
          Elegant Accessories for Every Style
        </p>

        <div className="w-20 lg:w-24 h-1 bg-pink-500 mx-auto rounded-full my-6"></div>

        <p className="max-w-5xl mx-auto text-center text-gray-700 text-base sm:text-lg leading-8">
          At <span className="font-semibold text-pink-600">Eshaal D'signs</span>,
          we bring you a beautiful collection of fashion accessories designed to
          complement every outfit and occasion. Discover elegant
          <span className="font-semibold"> necklaces</span>,
          <span className="font-semibold"> neck chains</span>,
          <span className="font-semibold"> bracelets</span>,
          <span className="font-semibold"> anklets</span>,
          <span className="font-semibold"> earrings</span>,
          <span className="font-semibold"> hairbands</span>, and
          <span className="font-semibold"> rings</span> that add charm to your
          everyday style. Whether you're dressing up for a celebration or
          looking for the perfect gift, our carefully selected collection offers
          beauty, quality, and affordability all in one place.
        </p>

        {/* Categories */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4 mt-10">

          {[
            "💎 Necklace",
            "✨ Neck Chain",
            "🩷 Bracelet",
            "🌸 Anklet",
            "🌺 Earrings",
            "🎀 Hairband",
            "💍 Rings",
          ].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow-md py-4 text-center hover:shadow-lg hover:-translate-y-1 transition"
            >
              <p className="font-semibold text-gray-700 text-sm lg:text-base">
                {item}
              </p>
            </div>
          ))}

        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-pink-700 hover:bg-pink-800 text-white px-8 py-3 rounded-full text-sm sm:text-base transition">
            Shop Collection
          </button>
        </div>

      </div>

    </section>
  );
};

export default Home;