import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Items = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/product.json")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-10 mt-28 lg:mt-40">

      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10">
        Our Collection
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-8 lg:mr-40 lg:ml-40">

        {products.map((product) => (
          <div
            key={product.productId}
            className="bg-white rounded-xl shadow hover:shadow-2xl transition duration-300 overflow-hidden  "
          >
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-44 sm:h-56 lg:h-80 object-cover"
            />

            <div className="p-3 lg:p-5">

              <h3 className="text-sm sm:text-lg lg:text-xl font-semibold line-clamp-2">
                {product.name}
              </h3>

              <p className="text-pink-600 font-bold mt-2 text-sm sm:text-base lg:text-lg">
                ₹ {product.price}
              </p>

              <Link to={`/product/${product.productId}`}>
                <button className="mt-4 w-full border-2 border-pink-500 text-pink-600 py-2 rounded-lg hover:bg-pink-500 hover:text-white transition text-xs sm:text-sm lg:text-base">
                  More About Product
                </button>
              </Link>

            </div>
          </div>
        ))}

      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-pink-700 hover:bg-pink-800 text-white px-6 lg:px-8 py-3 rounded-full transition">
          Show All Items
        </button>
      </div>

    </div>
  );
};

export default Items;