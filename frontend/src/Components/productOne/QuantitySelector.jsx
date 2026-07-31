import React, { useState } from "react";

const QuantitySelector = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => {
    setQuantity((prev) => prev + 1);
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Quantity</h3>

      <div className="flex items-center gap-3">

        <button
          onClick={decreaseQty}
          className="w-10 h-10 border rounded-lg text-xl font-bold hover:bg-gray-100"
        >
          -
        </button>

        <span className="w-12 text-center text-lg font-semibold">
          {quantity}
        </span>

        <button
          onClick={increaseQty}
          className="w-10 h-10 border rounded-lg text-xl font-bold hover:bg-gray-100"
        >
          +
        </button>

      </div>
    </div>
  );
};

export default QuantitySelector;