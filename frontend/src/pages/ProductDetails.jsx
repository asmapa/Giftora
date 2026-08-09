import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { CartContext } from "../context/CartContext";

import ProductInfo from "../Components/productOne/ProductInfo";
import DelivaryInfo from "../Components/productOne/DelivaryInfo";
import ProductDescription from "../Components/productOne/ProductDescription";
import RelatedProducts from "../Components/productOne/RelatedProducts";

const ProductDetails = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  // Scroll to top when product changes
  window.scrollTo({ top: 0, behavior: 'smooth' });

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

}, [productId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-semibold">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-semibold">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-28 pb-16">

      <div className="max-w-7xl mx-auto px-5">

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