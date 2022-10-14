import React from "react";

const OrderDetails = () => {
  return (
    <div className="ProductContainer">
      <p>
        <b>Order Details</b>
      </p>
      <form>
        <div className="form-col">
          <label>Product Name:</label>
          <input type="text" className="form-control"></input>
          <label>Product Description:</label>
          <br></br>
          <textarea id="w3review" name="w3review" rows="4" cols="35"></textarea>
          <label>Product Price:</label>
          <input type="text" className="form-control"></input>
          <label>Product Stocks:</label>
          <input type="text" className="form-control"></input>
          <button className="btn btn-primary" type="button">
            Credit
          </button>
          <button className="btn btn-primary" type="button">
            Purchase
          </button>
        </div>
      </form>
    </div>
  );
};

export default OrderDetails;
