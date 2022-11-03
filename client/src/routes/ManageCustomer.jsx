import React from "react";
import SideNavigation from "../components/SideNavigation";

const ManageCustomer = ({ setAuth }) => {
  return (
    <div className="App">
      <div className="home-wrapper">
        <div>Manage Customer</div>
        <SideNavigation setAuth={setAuth} />
      </div>
    </div>
  );
};

export default ManageCustomer;
