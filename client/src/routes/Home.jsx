import React from "react";
import OrderDetails from "../components/OrderDetails";
import ProductList from "../components/ProductList";
import SideNavigation from "../components/SideNavigation";
import { ProductsContextProvider } from "../context/ProductsContext";

const Home = ({ setAuth }) => {
  return (
    <ProductsContextProvider>
      <div className="App">
        <div className="home-wrapper">
          <SideNavigation setAuth={setAuth} />
          <ProductList />
          <OrderDetails />
        </div>
      </div>
    </ProductsContextProvider>
  );
};

export default Home;
