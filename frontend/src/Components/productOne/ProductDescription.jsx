import React from "react";

const ProductDescription = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 mt-8">

      <h2 className="text-2xl font-bold mb-5">
        About This Product
      </h2>

      <p className="text-gray-600 leading-8 mb-8">
        {product.description}
      </p>

      <div className="grid md:grid-cols-2 gap-6">

        <div className="border rounded-lg p-4">
          <h3 className="font-semibold text-lg mb-3">
            Product Details
          </h3>

          <div className="space-y-3">

            <div className="flex justify-between">
              <span className="text-gray-500">Product ID</span>
              <span className="font-medium">{product.productId}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Category</span>
              <span className="font-medium">{product.category}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Price</span>
              <span className="font-medium text-pink-600">
                ₹{product.price}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Trending</span>

              <span
                className={`font-medium ${
                  product.trending === "Yes"
                    ? "text-green-600"
                    : "text-gray-600"
                }`}
              >
                {product.trending}
              </span>
            </div>

          </div>
        </div>

        <div className="border rounded-lg p-4">

          <h3 className="font-semibold text-lg mb-3">
            Availability
          </h3>

          <div className="space-y-3">

            <div className="flex justify-between">
              <span className="text-gray-500">Stock Status</span>

              {product.stock > 0 ? (
                <span className="text-green-600 font-medium">
                  In Stock
                </span>
              ) : (
                <span className="text-red-600 font-medium">
                  Out of Stock
                </span>
              )}
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Quantity Available</span>
              <span>{product.stock}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Delivery</span>
              <span>3 - 5 Days</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Payment</span>
              <span>Online / COD</span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDescription;