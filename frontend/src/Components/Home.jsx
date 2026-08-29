import React from "react";
import { useNavigate } from "react-router-dom";

// Category label shown to the user + the exact value used for filtering
// on the Products page (must match the <option> values there).
const categories = [
  { emoji: "💎", label: "Necklace", value: "Necklace" },
  { emoji: "✨", label: "Neck Chain", value: "Neck Chain" },
  { emoji: "🩷", label: "Bracelet", value: "Bracelet" },
  { emoji: "🌸", label: "Anklet", value: "Anklet" },
  { emoji: "🌺", label: "Earrings", value: "Earring" },
  { emoji: "🎀", label: "Hairband", value: "Hairband" },
  { emoji: "💍", label: "Rings", value: "Ring" },
  { emoji: "🎁", label: "Others", value: "Others" },
];

const Home = () => {
  const navigate = useNavigate();

  const goToCategory = (value) => {
    navigate(`/products?category=${encodeURIComponent(value)}`);
  };

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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4 mt-10">

          {categories.map((item) => (
            <div
              key={item.label}
              onClick={() => goToCategory(item.value)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") goToCategory(item.value);
              }}
              className="cursor-pointer bg-white rounded-xl shadow-md py-4 text-center hover:shadow-lg hover:-translate-y-1 hover:bg-pink-50 active:scale-95 transition"
            >
              <p className="font-semibold text-gray-700 text-sm lg:text-base">
                {item.emoji} {item.label}
              </p>
            </div>
          ))}

        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => navigate("/products")}
            className="bg-pink-700 hover:bg-pink-800 text-white px-8 py-3 rounded-full text-sm sm:text-base transition shadow-md hover:shadow-lg active:scale-95"
          >
            Shop Collection
          </button>
        </div>

      </div>

    </section>
  );
};

export default Home;
