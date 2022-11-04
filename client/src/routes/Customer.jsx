import React from "react";
import SideNavigation from "../components/SideNavigation";
import { ProductsContextProvider } from "../context/ProductsContext";

const Customer = ({ setAuth }) => {
  return (
    <ProductsContextProvider>
      <div className="App">
        <div className="home-wrapper">
          <SideNavigation setAuth={setAuth} />
        </div>
      </div>
    </ProductsContextProvider>
  );
};

export default Customer;
