import React from "react";

// Controlled component - the selected quantity lives in the parent
// (ProductInfo) so it can be passed along to addToCart / WhatsApp.
const QuantitySelector = ({ quantity, onIncrease, onDecrease }) => {

  return (
    <div>
      <h3 className="text-lg font-semibold mb-3">Quantity</h3>

      <div className="flex items-center gap-3">

        <button
          type="button"
          onClick={onDecrease}
          className="w-10 h-10 border rounded-lg text-xl font-bold hover:bg-gray-100"
        >
          -
        </button>

        <span className="w-12 text-center text-lg font-semibold">
          {quantity}
        </span>

        <button
          type="button"
          onClick={onIncrease}
          className="w-10 h-10 border rounded-lg text-xl font-bold hover:bg-gray-100"
        >
          +
        </button>

      </div>
    </div>
  );
};

export default QuantitySelector;
