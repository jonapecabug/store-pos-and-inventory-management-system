import React from "react";
import PurchaseCredit from "../components/PuchaseCredit";
import SideNavigation from "../components/SideNavigation";

import { CustomerContextProvider } from "../context/CustomerContext";

const Customer = ({ setAuth }) => {
  return (
    <CustomerContextProvider>
      <div className="App">
        <div className="home-wrapper">
          <SideNavigation setAuth={setAuth} />
          <PurchaseCredit />
        </div>
      </div>
    </CustomerContextProvider>
  );
};

export default Customer;
