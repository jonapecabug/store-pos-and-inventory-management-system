import React, { useState, createContext } from "react";

export const ProductsContext = createContext();

export const ProductsContextProvider = (props) => {
  const [products, setProducts] = useState([]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {props.children}
    </ProductsContext.Provider>
  );
};
