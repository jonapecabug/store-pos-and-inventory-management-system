import React, { useState, createContext } from "react";

export const CustomerContext = createContext();

export const CustomerContextProvider = (props) => {
  const [customer, setCustomer] = useState([]);

  return (
    <CustomerContext.Provider value={{ customer, setCustomer }}>
      {props.children}
    </CustomerContext.Provider>
  );
};
