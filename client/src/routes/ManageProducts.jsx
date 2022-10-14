import React from "react";
import AddProduct from "../components/AddProduct";
import ProductList from "../components/ProductList";

const ManageProducts = () => {
  return (
    <div className="home-wrapper">
      <ProductList />
      <AddProduct />
    </div>
  );
};

export default ManageProducts;
