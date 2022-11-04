import React from "react";
import AddCostumer from "../components/AddCostumer";
import CustomerList from "../components/CustomerList";
import SideNavigation from "../components/SideNavigation";
import { CustomerContextProvider } from "../context/CustomerContext";

const EditCustomer = ({ setAuth }) => {
  return (
    <CustomerContextProvider>
      <div className="App">
        <div className="home-wrapper">
          <SideNavigation setAuth={setAuth} />
          <CustomerList />
          <AddCostumer />
        </div>
      </div>
    </CustomerContextProvider>
  );
};

export default EditCustomer;
