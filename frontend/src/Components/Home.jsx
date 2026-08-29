import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
    <section id="home-hero" className="w-full mt-28 lg:mt-36">

      {/* Content */}
      <div className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-100 to-purple-100 rounded-2xl lg:rounded-3xl shadow-xl mx-4 sm:mx-8 lg:mx-12 my-8 p-6 sm:p-8 lg:p-16">

        {/* Decorative floating sparkles */}
        <span className="hidden sm:block absolute top-8 left-10 text-pink-300 text-2xl animate-float select-none">✦</span>
        <span className="hidden sm:block absolute top-16 right-16 text-purple-300 text-3xl animate-float-slow select-none">✧</span>
        <span className="hidden sm:block absolute bottom-14 left-20 text-rose-300 text-xl animate-float select-none">✦</span>
        <span className="hidden sm:block absolute bottom-24 right-24 text-pink-400 text-2xl animate-float-slow select-none">✧</span>
        <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 bg-pink-300/30 rounded-full blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 bg-purple-300/30 rounded-full blur-3xl" />

        {/* Badge */}
        <div className="relative flex justify-center animate-fade-in-up">
          <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-pink-600 shadow-sm border border-pink-200 tracking-wide">
            ✨ New Collection Just Landed
          </span>
        </div>

        <h2 className="relative text-3xl sm:text-4xl lg:text-5xl font-bold text-center mt-5 bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 bg-clip-text text-transparent animate-shimmer-text animate-fade-in-up animation-delay-100">
          Shine with Every Detail ✨
        </h2>

        <p className="relative text-center text-gray-600 mt-3 italic text-sm sm:text-base lg:text-lg animate-fade-in-up animation-delay-200">
          Elegant Accessories for Every Style
        </p>

        <div className="relative w-20 lg:w-24 h-1 bg-gradient-to-r from-pink-400 to-rose-500 mx-auto rounded-full my-6 animate-fade-in-up animation-delay-300"></div>

        <p className="relative max-w-5xl mx-auto text-center text-gray-700 text-base sm:text-lg leading-8 animate-fade-in-up animation-delay-300">
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
        <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4 mt-10">

          {categories.map((item, index) => (
            <div
              key={item.label}
              onClick={() => goToCategory(item.value)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") goToCategory(item.value);
              }}
              style={{ animationDelay: `${300 + index * 80}ms` }}
              className="animate-fade-in-up cursor-pointer bg-white/90 rounded-xl shadow-md py-4 text-center hover:shadow-xl hover:shadow-pink-200/60 hover:-translate-y-1.5 hover:bg-white active:scale-95 transition-all duration-300"
            >
              <p className="text-xl mb-1">{item.emoji}</p>
              <p className="font-semibold text-gray-700 text-xs sm:text-sm lg:text-base">
                {item.label}
              </p>
            </div>
          ))}

        </div>

        {/* Button */}
        <div className="relative flex justify-center mt-10 animate-fade-in-up animation-delay-600">
          <button
            onClick={() => navigate("/products")}
            className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 to-rose-600 hover:from-pink-700 hover:to-rose-700 text-white px-8 py-3 rounded-full text-sm sm:text-base font-medium transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-pink-400/50 hover:scale-105 animate-glow-pulse"
          >
            Shop Collection
            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

      </div>

    </section>
  );
};

export default Home;
