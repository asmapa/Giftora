import React from "react";
import {
  FaTruck,
  FaUndo,
  FaShieldAlt,
  FaMoneyBillWave,
} from "react-icons/fa";

const DelivaryInfo = () => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 mt-8">

      <h2 className="text-2xl font-bold mb-6">
        Delivery Information
      </h2>

      <div className="grid md:grid-cols-2 gap-5">

        <div className="flex items-center gap-4">
          <div className="bg-pink-100 p-3 rounded-full">
            <FaTruck className="text-pink-600 text-xl" />
          </div>

          <div>
            <h4 className="font-semibold">
              Free Delivery
            </h4>

            <p className="text-gray-500 text-sm">
              On orders above ₹499
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-pink-100 p-3 rounded-full">
            <FaMoneyBillWave className="text-pink-600 text-xl" />
          </div>

          <div>
            <h4 className="font-semibold">
              Cash on Delivery
            </h4>

            <p className="text-gray-500 text-sm">
              Available in selected locations
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-pink-100 p-3 rounded-full">
            <FaUndo className="text-pink-600 text-xl" />
          </div>

          <div>
            <h4 className="font-semibold">
              Easy Returns
            </h4>

            <p className="text-gray-500 text-sm">
              Return within 7 days
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-pink-100 p-3 rounded-full">
            <FaShieldAlt className="text-pink-600 text-xl" />
          </div>

          <div>
            <h4 className="font-semibold">
              Secure Payment
            </h4>

            <p className="text-gray-500 text-sm">
              100% secure payment gateway
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default DelivaryInfo;