import React from "react";
import { useState } from "react";
import OrderDetails from "../components/OrderDetails";
import ProductList from "../components/ProductList";
import SideNavigation from "../components/SideNavigation";
import { ProductsContextProvider } from "../context/ProductsContext";

const Report = ({ setAuth }) => {
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.product_id === product.product_id);
    // console.log(exist);
    // console.log(product.product_id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.product_id === product.product_id
            ? { ...exist, qty: exist.qty + 1 }
            : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.product_id === product.product_id);
    if (exist.qty === 1) {
      setCartItems(
        cartItems.filter((x) => x.product_id !== product.product_id)
      );
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.product_id === product.product_id
            ? { ...exist, qty: exist.qty - 1 }
            : x
        )
      );
    }
  };

  return (
    <ProductsContextProvider>
      <div className="App">
        <div className="home-wrapper">
          <SideNavigation setAuth={setAuth} />
          <ProductList onAdd={onAdd} />
          <OrderDetails
            onAdd={onAdd}
            onRemove={onRemove}
            cartItems={cartItems}
          />
        </div>
      </div>
    </ProductsContextProvider>
  );
};

export default Report;
