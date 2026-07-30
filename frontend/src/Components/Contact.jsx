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
    <section className="bg-pink-50 py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-pink-900">
            Get In Touch
          </h2>

          <p className="text-sm sm:text-base text-gray-600 mt-3 lg:mt-4">
            We'd love to hear from you. Reach us anytime!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Left Side */}
          <div className="space-y-8">

            {/* Address */}
            <div className="flex items-start gap-4 lg:gap-5">
              <div className="bg-pink-600 text-white p-3 lg:p-4 rounded-full flex-shrink-0">
                <FaMapMarkerAlt size={18} />
              </div>

              <div>
                <h3 className="font-semibold text-lg lg:text-xl mb-2">
                  Address
                </h3>

                <p className="text-sm lg:text-base text-gray-600 break-words leading-7">
                  27, 3rd Cross Rd, Ananth Nagar, Phase 1, Kammasandra,
                  Electronic City, Hebbagodi, Karnataka 560100
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 lg:gap-5">
              <div className="bg-pink-600 text-white p-3 lg:p-4 rounded-full flex-shrink-0">
                <FaPhoneAlt size={18} />
              </div>

              <div>
                <h3 className="font-semibold text-lg lg:text-xl">
                  Phone
                </h3>

                <p className="text-sm lg:text-base text-gray-600">
                  +91 9645493868
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 lg:gap-5">
              <div className="bg-pink-600 text-white p-3 lg:p-4 rounded-full flex-shrink-0">
                <FaEnvelope size={18} />
              </div>

              <div>
                <h3 className="font-semibold text-lg lg:text-xl">
                  Email
                </h3>

                <p className="text-sm lg:text-base text-gray-600 break-all">
                  asmapa.dev@gmail.com
                </p>
              </div>
            </div>

          </div>

          {/* Right Side */}
          <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10">

            <h3 className="text-2xl lg:text-3xl font-semibold mb-6 lg:mb-8 text-pink-900">
              Send us a Message
            </h3>

            <form className="space-y-5 lg:space-y-6">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 rounded-xl p-3 lg:p-4 text-sm lg:text-base outline-none focus:border-pink-600"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 rounded-xl p-3 lg:p-4 text-sm lg:text-base outline-none focus:border-pink-600"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border border-gray-300 rounded-xl p-3 lg:p-4 text-sm lg:text-base outline-none resize-none focus:border-pink-600"
              ></textarea>

              <button
                type="submit"
                className="w-full sm:w-auto bg-pink-700 hover:bg-pink-800 transition duration-300 text-white px-6 lg:px-8 py-3 lg:py-4 rounded-xl font-semibold text-sm lg:text-base"
              >
                Send Message
              </button>

            </form>

            {/* Social Icons */}
            <div className="flex flex-wrap justify-center sm:justify-start gap-3 lg:gap-5 mt-8 lg:mt-10">

              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border flex items-center justify-center hover:bg-pink-600 hover:text-white transition duration-300 cursor-pointer">
                <FaInstagram />
              </div>

              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border flex items-center justify-center hover:bg-pink-600 hover:text-white transition duration-300 cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border flex items-center justify-center hover:bg-pink-600 hover:text-white transition duration-300 cursor-pointer">
                <FaYoutube />
              </div>

              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border flex items-center justify-center hover:bg-pink-600 hover:text-white transition duration-300 cursor-pointer">
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