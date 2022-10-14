import React from "react";
import AddProduct from "../components/AddProduct";
import ManageList from "../components/ManageList";

const ManageProducts = () => {
  return (
    <div className="home-wrapper">
      <ManageList />
      <AddProduct />
    </div>
  );
};

export default ManageProducts;
