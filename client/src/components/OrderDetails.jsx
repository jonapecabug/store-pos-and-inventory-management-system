import React from "react";
import { useState, useContext, useEffect } from "react";
import ProductsFinder from "../apis/ProductsFinder";
import { CustomerContext } from "../context/CustomerContext";
import html2canvas from "html2canvas";
import ReceiptPopup from "./ReceiptPopup";

export default function OrderDetails(props) {
  const { cartItems, setCartItems, onAdd, onRemove } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.product_price * c.qty, 0);
  const numStocks = cartItems.map((n) => n.stocks);
  const numIDs = cartItems.map((x) => x.product_id);

  const { customer, setCustomer } = useContext(CustomerContext);

  const [value, setValue] = useState("");
  const [buttonPopup, setButtonPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProductsFinder.get("/customer/");
        setCustomer(response.data);
      } catch (err) {}
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchName) => {
    setValue(searchName);
    console.log("search", searchName);
  };

  //UPDATE PRODUCT STOCKS
  const handlePurchase = async (cartItems) => {
    for (let i = 0; i < numStocks.length; i++) {
      const curStock = numStocks[i];
      const curID = numIDs[i];

      const updatedStocks = await ProductsFinder.put(`/stocks/${curID}`, {
        product_stocks: curStock,
      });
      console.log(updatedStocks);
      // console.log("stock:" + curStock);
      // console.log("ID:" + curID);
    }
    setCartItems([]);
    const screenshotTarget = document.getElementById("orderreceipt");
    html2canvas(screenshotTarget).then((canvas) => {
      document.getElementById("ReceiptImage").appendChild(canvas);
      const OrderReceipt = canvas.toDataURL();

      console.log(OrderReceipt);

      // const base64image = canvas.toDataURL("image/png");
      // var anchor = document.createElement("a");
      // anchor.setAttribute("href", base64image);
      // anchor.setAttribute("download", "my-image.png");
      // anchor.click();
      // anchor.remove();
    });
    setButtonPopup(true);
  };

  const handleCredit = async (cartItems) => {
    for (let i = 0; i < numStocks.length; i++) {
      const curStock = numStocks[i];
      const curID = numIDs[i];

      const updatedStocks = await ProductsFinder.put(`/stocks/${curID}`, {
        product_stocks: curStock,
      });
      console.log(updatedStocks);
    }
    setCartItems([]);
    const screenshotTarget = document.getElementById("orderreceipt");
    html2canvas(screenshotTarget).then((canvas) => {
      document.getElementById("ReceiptImage").appendChild(canvas);
      const OrderReceipt = canvas.toDataURL();

      console.log(OrderReceipt);

      // const base64image = canvas.toDataURL("image/png");
      // var anchor = document.createElement("a");
      // anchor.setAttribute("href", base64image);
      // anchor.setAttribute("download", "my-image.png");
      // anchor.click();
      // anchor.remove();
    });
    setButtonPopup(true);
  };

  return (
    <div className="ProductContainer">
      <ReceiptPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <div id="ReceiptImage"></div>
      </ReceiptPopup>

      <div id="orderreceipt">
        <h3 className="m-3 text-center fw-bold">Order Receipt</h3>
        <div>
          <span>
            <b>Customer Name:</b>
          </span>

          <input
            value={value}
            onChange={onChange}
            type="text"
            placeholder="search customer"
            className="InputCustomer"
          ></input>

          <div className="dropdown">
            {customer
              .filter((name) => {
                const searchName = value.toLowerCase();
                const fullName = name.customer_name.toLowerCase();

                return (
                  searchName &&
                  fullName.includes(searchName) &&
                  fullName !== searchName
                );
              })
              .slice(0, 5)
              .map((name) => (
                <div
                  onClick={() => onSearch(name.customer_name)}
                  className="dropdown-row"
                  key={name.customer_id}
                >
                  {name.customer_name}
                </div>
              ))}
          </div>
        </div>
        <div className="mt-3">
          <span>
            <b>Date:</b> {new Date().toLocaleString() + ""}
          </span>
        </div>
        <div className="row">
          <div className="col mt-4 fw-bolder fs-5">Product list:</div>
          <div className="col mt-4 fw-semibold text-end fs-5">Sub-total</div>
        </div>

        <div>
          {cartItems.length === 0 && (
            <div className="mt-4">Shopping cart is empty</div>
          )}
        </div>
        {cartItems.map((x) => (
          <div key={x.product_id} className="row mt-3 mb-4">
            <div className="row text-center">
              <div style={{ color: "#9c9c9c" }} data-html2canvas-ignore="true">
                stocks: {x.stocks} available
              </div>
            </div>
            <div className="col-md-5 fw-lighter">{x.product_name}</div>
            <div className="col-md-auto px-1 text-center">
              <button
                onClick={() => onAdd(x)}
                className="add"
                data-html2canvas-ignore="true"
                id="data-html2canvas-ignore"
              >
                +
              </button>
            </div>
            <div className="col-md-auto px-0 text-center">{x.qty}</div>
            <div className="col-md-auto px-1 text-center">
              <button
                onClick={() => onRemove(x)}
                className="remove"
                data-html2canvas-ignore="true"
                id="data-html2canvas-ignore"
              >
                -
              </button>
            </div>

            <div className="col px-1 text-center">x ₱{x.product_price}</div>
            <div className="col px-0 text-center">
              ₱ {x.qty * x.product_price}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr />
            <div className="row mt-3 mb-2">
              <div className="col fw-semibold fs-5">Total Amount:</div>
              <div className="col fw-bolder text-end fs-5">
                ₱ {itemsPrice.toFixed(2)}
                <br />
                <br />
              </div>
            </div>
          </>
        )}
      </div>

      {cartItems.length !== 0 && (
        <div className="row mt-5">
          <div className="col">
            <button
              disabled={!value}
              onClick={handleCredit}
              className="btn btn-secondary btn-lg"
            >
              Add to Credit
            </button>
          </div>
          <div className="col text-end">
            <button
              disabled={!value}
              onClick={handlePurchase}
              className="btn btn-success btn-lg"
            >
              Purchase
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
