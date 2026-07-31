import React from "react";
import ProductCard from "./ProductCard"; // Change the path if your ProductCard is elsewhere

const RelatedProducts = ({ currentProduct, products }) => {
  const relatedProducts = products.filter(
    (item) =>
      item.category === currentProduct.category &&
      item.productId !== currentProduct.productId
  );

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-8">
        Related Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {relatedProducts.map((item) => (
          <ProductCard
            key={item.productId}
            product={item}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;