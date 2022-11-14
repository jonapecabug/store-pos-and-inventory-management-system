import React from "react";
import { useState } from "react";
import OrderDetails from "../components/OrderDetails";
import Popup from "../components/Popup";
import ProductList from "../components/ProductList";
import SideNavigation from "../components/SideNavigation";
import { ProductsContextProvider } from "../context/ProductsContext";
import { CustomerContextProvider } from "../context/CustomerContext";

const Home = ({ setAuth }) => {
  const [cartItems, setCartItems] = useState([]);

  //adding PRODUCTS TO CART
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.product_id === product.product_id);
    // console.log(exist);
    // console.log(product.product_id);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.product_id === product.product_id
            ? { ...exist, qty: exist.qty + 1, stocks: exist.stocks - 1 }
            : x
        )
      );
    } else {
      setCartItems([
        ...cartItems,
        { ...product, qty: 1, stocks: product.product_stocks - 1 },
      ]);
    }
  };

  // REMOVING PRODUCTS FROM CART
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
            ? { ...exist, qty: exist.qty - 1, stocks: exist.stocks + 1 }
            : x
        )
      );
    }
  };

  return (
    <ProductsContextProvider>
      <div className="App">
        <div className="home-wrapper">
          <Popup onRemove={onRemove} cartItems={cartItems}></Popup>
          <SideNavigation setAuth={setAuth} />
          <ProductList onAdd={onAdd} />
          <CustomerContextProvider>
            <OrderDetails
              onAdd={onAdd}
              onRemove={onRemove}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          </CustomerContextProvider>
        </div>
      </div>
    </ProductsContextProvider>
  );
};

export default Home;
