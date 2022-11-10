import React from "react";

export default function OrderDetails(props) {
  const { cartItems, onAdd, onRemove } = props;
  // console.log(cartItems);
  const itemsPrice = cartItems.reduce((a, c) => a + c.product_price * c.qty, 0);

  return (
    <div className="ProductContainer">
      <div>
        <h3 className="m-3 text-center fw-bold">Order Receipt</h3>
        <div>
          <span>Customer Name:</span>
          <input placeholder="search customer"></input>
        </div>
        <div className="mt-3">
          <span>Date: {new Date().toLocaleString() + ""}</span>
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
          <div key={x.product_id} className="row mt-3">
            <div className="row text-center">
              <div style={{ color: "#9c9c9c" }}>
                stocks: {x.stocks} available
              </div>
            </div>
            <div className="col-md-5 fw-lighter">{x.product_name}</div>
            <div className="col-md-auto px-1 text-center">
              <button onClick={() => onAdd(x)} className="add">
                +
              </button>
            </div>
            <div className="col-md-auto px-0 text-center">{x.qty}</div>
            <div className="col-md-auto px-1 text-center">
              <button onClick={() => onRemove(x)} className="remove">
                -
              </button>
            </div>

            <div className="col px-0 text-center">x ₱{x.product_price}</div>
            <div className="col text-center text-center">
              ₱ {x.qty * x.product_price}
            </div>
          </div>
        ))}
        {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col fw-semibold fs-5">Total Amount:</div>
              <div className="col fw-bolder text-end fs-5">
                ₱ {itemsPrice.toFixed(2)}
              </div>
            </div>
            <hr></hr>
            <div className="row mt-5">
              <div className="col">
                <button className="btn btn-secondary btn-lg">
                  Add to Credit
                </button>
              </div>
              <div className="col text-end">
                <button className="btn btn-success btn-lg">Purchase</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
