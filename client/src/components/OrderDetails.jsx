import React from "react";

const OrderDetails = () => {
  return (
    <div className="ProductContainer">
      <p>
        <b>Order Details</b>
      </p>
      <form>
        <div className="form-col">
          <label>Customer Name:</label>
          <input type="text" className="form-control"></input>
          <label>Order List:</label>
          <br></br>
          <textarea id="w3review" name="w3review" rows="4" cols="35"></textarea>
          <label>Number of Items:</label>
          <input type="text" className="form-control"></input>
          <label>Total Price:</label>
          <input type="text" className="form-control"></input>
          <br />
          <div className="d-grid gap-2 col-6 mx-auto">
            <button className="btn btn-primary me-md-2" type="button">
              Add to Credit
            </button>
            <button className="btn btn-primary" type="button">
              Purchase
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default OrderDetails;
