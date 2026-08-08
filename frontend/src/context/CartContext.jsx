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

    const removeFromCart = (productId) => {
  setCart((prev) =>
    prev.filter((item) => item.productId !== productId)
  );
};

    // Function to add product
   const addToCart = (product) => {

    const existingProduct = cart.find(
        item => item.productId === product.productId
    );

    if (existingProduct) {

        const updatedCart = cart.map(item =>

            item.productId === product.productId

                ? { ...item, quantity: item.quantity + 1 }

                : item

        );

        setCart(updatedCart);

    } else {

        setCart([
            ...cart,
            {
                ...product,
                quantity: 1
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