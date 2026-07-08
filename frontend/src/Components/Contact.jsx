import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-pink-50 py-20 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-pink-900">
            Get In Touch
          </h2>

          <p className="text-gray-600 mt-4">
            We'd love to hear from you. Reach us anytime!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">

          {/* Left Side */}
          <div className="space-y-8">

            <div className="flex items-start gap-5">
              <div className="bg-pink-600 text-white p-4 rounded-full">
                <FaMapMarkerAlt size={22} />
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-2">
                  Address
                </h3>

                <p className="text-gray-600">
                 27, 3rd Cross Rd, Ananth Nagar, Phase 1, Kammasandra, Electronic City, Hebbagodi, Karnataka 560100
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="bg-pink-600 text-white p-4 rounded-full">
                <FaPhoneAlt size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-xl">
                  Phone
                </h3>

                <p className="text-gray-600">
                  +91 9645493868
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="bg-pink-600 text-white p-4 rounded-full">
                <FaEnvelope size={20} />
              </div>

              <div>
                <h3 className="font-semibold text-xl">
                  Email
                </h3>

                <p className="text-gray-600">
                  asmapa.dev@gmail.com
                </p>
              </div>
            </div>

          </div>

          {/* Right Side */}
          <div className="bg-white rounded-3xl shadow-xl p-10">

            <h3 className="text-3xl font-semibold mb-8 text-pink-900">
              Send us a Message
            </h3>

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-pink-600"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none focus:border-pink-600"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-xl p-4 outline-none resize-none focus:border-pink-600"
              ></textarea>

              <button className="bg-pink-700 hover:bg-pink-800 transition text-white px-8 py-4 rounded-xl font-semibold">
                Send Message
              </button>

            </form>

            {/* Social Icons */}
            <div className="flex gap-5 mt-10">

              <div className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-pink-600 hover:text-white transition cursor-pointer">
                <FaInstagram />
              </div>

              <div className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-pink-600 hover:text-white transition cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-pink-600 hover:text-white transition cursor-pointer">
                <FaYoutube />
              </div>

              <div className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-pink-600 hover:text-white transition cursor-pointer">
                <FaPinterestP />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;