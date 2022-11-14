import React from "react";

function ReceiptPopup(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="close-btn" onClick={() => props.setTrigger(false)}>
          close
        </div>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default ReceiptPopup;
