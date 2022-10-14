import React from "react";
import OrderDetails from "../components/OrderDetails";
import ProductList from "../components/ProductList";

const Home = () => {
  return (
    <div className="home-wrapper">
      <ProductList />
      <OrderDetails />
    </div>
  );
};

export default Home;
