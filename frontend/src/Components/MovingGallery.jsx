import bracelte from "../assets/bracelte.webp";
import card from "../assets/card.png";
import earings from "../assets/earings.jpg";
import hairbow from "../assets/hairbow.jpg";
import neckChain from "../assets/neckChain.jpg";
import ring from "../assets/ring.jpg"

const images = [
  bracelte,
  card,
  earings,
  hairbow,
  neckChain,
  ring,

  // duplicate for smooth looping
  bracelte,
  card,
  earings,
  hairbow,
  neckChain,
  ring,
];

export default function MovingGallery() {
  return (
    <div className="relative overflow-hidden py-10 bg-gradient-to-b from-pink-100 via-pink-50 to-pink-50 mt-40">

      {/* Intro badge */}
      <div className="relative z-20 flex justify-center mb-6 animate-fade-in-up">
        <span className="inline-flex items-center gap-2 bg-white/90 backdrop-blur px-5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-pink-700 shadow-md border border-pink-200 tracking-[2px] uppercase">
          ✦ Welcome to Eshaal D'signs ✦
        </span>
      </div>

      {/* Edge fade overlays */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-pink-50 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-pink-50 to-transparent z-10" />

      <div className="flex animate-slide gap-6">

        {images.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0 group"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl group-hover:shadow-pink-300/50 transition-all duration-500">
              <img
                src={img}
                alt=""
                className="w-60 h-72 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
