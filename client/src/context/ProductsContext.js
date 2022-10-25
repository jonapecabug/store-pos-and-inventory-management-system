import React, { useState, createContext } from "react";

export const ProductsContext = createContext();

export const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  const addProducts = (product) => {
    setProducts([...product, product]);
  };

  return (
    <ProductsContext.Provider value={{ products, setProducts, addProducts }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
