import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { CartContext } from "../context/CartContext";

import ProductInfo from "../Components/productOne/ProductInfo";
import DelivaryInfo from "../Components/productOne/DelivaryInfo";
import ProductDescription from "../Components/productOne/ProductDescription";
import RelatedProducts from "../Components/productOne/RelatedProducts";
import BackButton from "../Components/BackButton";
import Loader from "../Components/Loader";

const ProductDetails = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  // Scroll to top when product changes
  window.scrollTo({ top: 0, behavior: 'smooth' });

  setLoading(true);

  axios
    .get(`https://giftora-7mmv.onrender.com/api/products/${productId}`)
    .then((response) => {
      setProduct(response.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setLoading(false);
    });

  // Fetch full catalog too, so "Related Products" has data to work with
  axios
    .get('https://giftora-7mmv.onrender.com/api/products')
    .then((response) => setProducts(response.data))
    .catch((err) => console.log(err));

}, [productId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Loader label="Loading product details..." />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col justify-center items-center h-screen gap-6 text-center px-4">
        <p className="text-2xl font-semibold text-gray-700">Product Not Found</p>
        <BackButton label="Go Back" fallback="/products" />
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-28 pb-16">

      <div className="max-w-7xl mx-auto px-5">

        {/* Back */}
        <div className="mb-4 mt-4">
          <BackButton fallback="/products" />
        </div>

        {/* Product Information */}
        <ProductInfo
          product={product}
          addToCart={addToCart}
        />

        {/* Delivery */}
        <DelivaryInfo />

        {/* Description */}
        <ProductDescription
          product={product}
        />

        {/* Related Products */}
        <RelatedProducts
          currentProduct={product}
          products={products}
        />

      </div>

    </div>
  );
};

export default ProductDetails;
