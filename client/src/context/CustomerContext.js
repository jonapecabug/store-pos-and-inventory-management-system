import React, { useState, createContext } from "react";

export const CustomerContext = createContext();

export const CustomerContextProvider = (props) => {
  const [customer, setCustomer] = useState([]);

  const addCustomer = (name) => {
    setCustomer([...customer, customer]);
  };

  return (
    <CustomerContext.Provider value={{ customer, setCustomer, addCustomer }}>
      {props.children}
    </CustomerContext.Provider>
  );
};
