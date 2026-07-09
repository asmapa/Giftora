import React from 'react'
import home from "../assets/home.png"
const Home = () => {
  return (
    <section className="w-full h-screen mt-35">
      <img
        src={home}
        alt="Giftora by Asma"
        className="w-full h-1/2 object-contain "
      />

      <div className="bg-gradient-to-r from-pink-100 via-rose-50 to-purple-100 py-16 px-8 rounded-3xl shadow-xl my-8 mx-8">

  <h2 className="text-5xl font-serif text-center text-pink-700 font-bold">
    Beautiful • Affordable • Handmade
  </h2>

  <p className="text-center text-gray-500 mt-3 italic text-lg">
    Crafted with Love, Delivered with Care ❤️
  </p>

  <div className="w-24 h-1 bg-pink-500 mx-auto rounded-full my-6"></div>

  <p className="max-w-5xl mx-auto text-center text-gray-700 text-lg leading-9">
    At <span className="font-semibold text-pink-600">Giftora by Asma</span>,
    every gift tells a story. We specialize in beautifully handcrafted gifts,
    personalized greeting cards, and creative gift collections designed with
    care and attention to detail. Our mission is to make heartfelt gifting
    affordable, memorable, and accessible to everyone. Whether it's a birthday,
    anniversary, wedding, festival, or a simple gesture of appreciation,
    Giftora helps you express your love with handmade creations delivered
    anywhere in India.
  </p>

<div className="flex justify-center mt-8">
  <button className="bg-pink-950 text-white rounded-2xl px-8 py-3 hover:bg-pink-800 transition duration-300">
    SHOP NOW
  </button>
</div>

</div>
    </section>
  )
}

export default Home
