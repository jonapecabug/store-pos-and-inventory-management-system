import React from "react";
import { useState } from "react";
import ProductList from "../components/ProductList";
import SideNavigation from "../components/SideNavigation";
import { ProductsContextProvider } from "../context/ProductsContext";

const Report = ({ setAuth }) => {
  return (
    <ProductsContextProvider>
      <div className="App">
        <div className="home-wrapper">
          <SideNavigation setAuth={setAuth} />
          <ProductList />
        </div>
      </div>
    </ProductsContextProvider>
  );
};

export default Report;
