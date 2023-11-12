import React from "react";
import { createContext } from "react";
import { useState } from "react";

export const ShoppingCartContext = createContext();

const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const [productToShow, setProductToShow] = useState({});
  const [cartProduct, setCartProduct] = useState([]);

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const openProductDetail = () => setIsProductDetailOpen(true);
  const closeProductDetail = () => setIsProductDetailOpen(false);

  const [isCheckoutsideMenu, setIsPCheckoutsideMenuOpen] = useState(false);
  const openCheckoutsideMenu = () => setIsPCheckoutsideMenuOpen(true);
  const closeCheckoutsideMenu = () => setIsPCheckoutsideMenuOpen(false);

  console.log(count);
  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        openProductDetail,
        closeProductDetail,
        isProductDetailOpen,
        productToShow,
        setProductToShow,
        cartProduct,
        setCartProduct,
        isCheckoutsideMenu,
        setIsPCheckoutsideMenuOpen,
        openCheckoutsideMenu,
        closeCheckoutsideMenu
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
