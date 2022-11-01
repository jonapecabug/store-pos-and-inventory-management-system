import React from "react";
import EditProduct from "../components/EditProduct";
import SideNavigation from "../components/SideNavigation";
import UpdateList from "../components/Updatelist";
import { ProductsContextProvider } from "../context/ProductsContext";

const updateProducts = ({ setAuth }) => {
  return (
    <ProductsContextProvider>
      <div className="App">
        <div className="home-wrapper">
          <SideNavigation setAuth={setAuth} />
          <UpdateList />
          <EditProduct />
        </div>
      </div>
    </ProductsContextProvider>
  );
};

export default updateProducts;
