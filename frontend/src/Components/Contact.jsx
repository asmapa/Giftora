
import React from "react";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaWhatsapp,
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

            {/* Contact Person */}
            <div className="flex items-center gap-4 lg:gap-5">
              <div className="bg-pink-600 text-white p-3 lg:p-4 rounded-full flex-shrink-0">
                <FaPhoneAlt size={18} />
              </div>

              <div>
                <h3 className="font-semibold text-lg lg:text-xl">
                  Contact Person
                </h3>

                <p className="text-pink-700 font-bold text-xl">
                  Jasi
                </p>
              </div>
            </div>

            {/* WhatsApp Number */}
            <div className="flex items-center gap-4 lg:gap-5">
              <div className="bg-pink-600 text-white p-3 lg:p-4 rounded-full flex-shrink-0">
                <FaWhatsapp size={18} />
              </div>

              <div>
                <h3 className="font-semibold text-lg lg:text-xl">
                  Call or Text
                </h3>

                <a
                  href="https://wa.me/918086889063"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-700 font-bold text-2xl hover:text-pink-800 transition"
                >
                  8086889063
                </a>

                <p className="text-gray-600 mt-1">
                  For more queries, feel free to call or text us on WhatsApp.
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4 lg:gap-5">
              <div className="bg-pink-600 text-white p-3 lg:p-4 rounded-full flex-shrink-0">
                <FaMapMarkerAlt size={18} />
              </div>

              <div>
                <h3 className="font-semibold text-lg lg:text-xl">
                  Location
                </h3>

                <p className="text-gray-600 text-lg">
                  Thrissur, Kerala
                </p>
              </div>
            </div>

          </div>

          {/* Right Side */}
          <div className="bg-white rounded-2xl lg:rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10 flex flex-col justify-center">

            <h3 className="text-2xl lg:text-4xl font-bold text-pink-900 mb-6 text-center">
              Have a Query?
            </h3>

            <p className="text-gray-600 text-center leading-7 mb-8 text-base lg:text-lg">
              Call or text us on WhatsApp for more details.
              <br />
              We're always happy to help!
            </p>

            <div className="flex justify-center">
              <a
                href="https://wa.me/918086889063"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-700 hover:bg-pink-800 text-white px-8 py-4 rounded-xl font-semibold text-base lg:text-lg transition duration-300 flex items-center gap-3"
              >
                <FaWhatsapp size={22} />
                Call or Text Now
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10 text-center">
              <div>
                <div className="text-3xl mb-2">💬</div>
                <p className="text-sm text-gray-600">
                  Quick Response
                </p>
              </div>

              <div>
                <div className="text-3xl mb-2">❤️</div>
                <p className="text-sm text-gray-600">
                  Friendly Support
                </p>
              </div>

              <div>
                <div className="text-3xl mb-2">🤝</div>
                <p className="text-sm text-gray-600">
                  Always Happy To Help
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Developer Credit */}
      <div className="mt-12 pt-6 border-t border-pink-100 text-center">

        <p className="text-sm sm:text-base text-gray-500">
          Website designed & developed with ❤️ by
        </p>

        <p className="text-base sm:text-lg font-semibold text-pink-800 mt-1">
          Asma P A
        </p>

        <a
          href="mailto:asmapa.dev@gmail.com"
          className="text-pink-600 hover:text-pink-700 underline underline-offset-4 text-sm sm:text-base"
        >
          asmapa.dev@gmail.com
        </a>

        <p className="text-xs text-gray-400 mt-3">
          MERN Stack & Odoo Developer
        </p>

      </div>
    </section>
  );
};

export default Contact;
