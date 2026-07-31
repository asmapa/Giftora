import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import { CartContext } from "../context/CartContext";

import ProductInfo from "../components/productOne/ProductInfo";
import DelivaryInfo from "../components/productOne/DelivaryInfo";
import ProductDescription from "../components/productOne/ProductDescription";
import RelatedProducts from "../components/productOne/RelatedProducts";

const ProductDetails = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/product.json")
      .then((response) => {
        setProducts(response.data);

        const foundProduct = response.data.find(
          (item) => item.productId === productId
        );

        setProduct(foundProduct);
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