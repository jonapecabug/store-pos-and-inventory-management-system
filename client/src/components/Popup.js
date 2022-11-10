import React from "react";

function Popup(props) {
  const { cartItems, onRemove } = props;
  return cartItems.map((x) =>
    x.stocks < 0 ? (
      <div className="popup">
        <div className="popup-inner">
          <div className="close-btn" onClick={() => onRemove(x)}>
            close
          </div>
          <h5>
            Sorry, <strong>{x.product_name}</strong> is out of stock
          </h5>
          {props.children}
        </div>
      </div>
    ) : (
      ""
    )
  );
}

export default Popup;
