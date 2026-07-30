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
    <div className="overflow-hidden py-10 bg-pink-50 mt-40">
      <div className="flex animate-slide gap-6">

        {images.map((img, index) => (
          <div
            key={index}
            className="flex-shrink-0"
          >
            <img
              src={img}
              alt=""
              className="w-60 h-72 rounded-2xl object-cover shadow-lg hover:scale-105 duration-300"
            />
          </div>
        ))}

      </div>
    </div>
  );
}