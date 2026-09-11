import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

    const [cart, setCart] = useState(() => {

        const savedCart = localStorage.getItem("cart");

        return savedCart ? JSON.parse(savedCart) : [];

    });

    useEffect(() => {

        localStorage.setItem("cart", JSON.stringify(cart));

    }, [cart]);

    const removeFromCart = (productId, color = null) => {
  setCart((prev) =>
    prev.filter(
      (item) =>
        !(
          item.productId === productId &&
          (item.selectedColor || null) === (color || null)
        )
    )
  );
};

    // Function to add product. quantity defaults to 1, color defaults to
    // null (no color selected / not applicable). Two cart lines for the
    // same product but different colors are kept separate so the WhatsApp
    // order message can show them distinctly.
   const addToCart = (product, quantity = 1, color = null) => {

    const existingProduct = cart.find(
        item =>
            item.productId === product.productId &&
            (item.selectedColor || null) === (color || null)
    );

    if (existingProduct) {

        const updatedCart = cart.map(item =>

            item.productId === product.productId &&
            (item.selectedColor || null) === (color || null)

                ? { ...item, quantity: item.quantity + quantity }

                : item

        );

        setCart(updatedCart);

    } else {

        setCart([
            ...cart,
            {
                ...product,
                selectedColor: color || null,
                quantity
            }
        ]);

    }

};


    

    return (

        <CartContext.Provider
            value={{
                cart,
                setCart,
                addToCart,
                removeFromCart
            }}
        >

            {children}

        </CartContext.Provider>

    );

};

export default CartProvider;