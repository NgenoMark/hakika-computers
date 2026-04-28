import React, { createContext, useContext, useEffect, useState } from "react";
import catalog from "../data/products";

const StoreContext = createContext(null);

const readStorage = (key) => {
  if (typeof window === "undefined") {
    return [];
  }

  try {
    const saved = window.localStorage.getItem(key);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    return [];
  }
};

export const StoreProvider = ({ children }) => {
  const [products] = useState(catalog);
  const [cartItems, setCartItems] = useState(() => readStorage("hakika-cart"));
  const [wishlistItems, setWishlistItems] = useState(() => readStorage("hakika-wishlist"));
  const [orderSuccess, setOrderSuccess] = useState(null);

  useEffect(() => {
    window.localStorage.setItem("hakika-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    window.localStorage.setItem("hakika-wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const addToCart = (product) => {
    setCartItems((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [...current, { ...product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (productId, nextQuantity) => {
    if (nextQuantity <= 0) {
      setCartItems((current) => current.filter((item) => item.id !== productId));
      return;
    }

    setCartItems((current) =>
      current.map((item) =>
        item.id === productId ? { ...item, quantity: nextQuantity } : item
      )
    );
  };

  const removeFromCart = (productId) => {
    setCartItems((current) => current.filter((item) => item.id !== productId));
  };

  const toggleWishlist = (product) => {
    setWishlistItems((current) => {
      const exists = current.some((item) => item.id === product.id);
      return exists
        ? current.filter((item) => item.id !== product.id)
        : [...current, product];
    });
  };

  const isWishlisted = (productId) => wishlistItems.some((item) => item.id === productId);
  const isInCart = (productId) => cartItems.some((item) => item.id === productId);

  const clearCheckout = (orderData) => {
    setCartItems([]);
    setOrderSuccess(orderData);
  };

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const cartSubtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <StoreContext.Provider
      value={{
        products,
        cartItems,
        wishlistItems,
        orderSuccess,
        setOrderSuccess,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        toggleWishlist,
        isWishlisted,
        isInCart,
        clearCheckout,
        cartCount,
        cartSubtotal,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }

  return context;
};
