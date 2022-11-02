import React, { useContext, useState } from "react";
import ProductsFinder from "../apis/ProductsFinder";
import { ProductsContext } from "../context/ProductsContext";
// import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  // const navigate = useNavigate();
  const { AddProducts } = useContext(ProductsContext);
  const [productname, setProductname] = useState("");
  const [productcategory, setProductcategory] = useState("");
  const [productdescription, setProductdescription] = useState("");
  const [productprice, setProductprice] = useState("");
  const [productstocks, setProductstocks] = useState("");

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const response = await ProductsFinder.post("/", {
        product_name: productname,
        category: productcategory,
        product_description: productdescription,
        product_price: productprice,
        product_stocks: productstocks,
      });
      AddProducts(response.data);
    } catch (error) {}
  };

  return (
    <div className="ProductContainer">
      <p>
        <b>Manage Products</b>
      </p>
      <form>
        <div className="form-col">
          <label>Product Name:</label>
          <input
            value={productname}
            onChange={(e) => setProductname(e.target.value)}
            type="text"
            className="form-control"
            placeholder="product name"
          ></input>
          <label>Category:</label>
          <input
            value={productcategory}
            onChange={(e) => setProductcategory(e.target.value)}
            type="text"
            className="form-control"
            placeholder="product category"
          ></input>
          <label>Product Description:</label>
          <br></br>
          <textarea
            value={productdescription}
            onChange={(e) => setProductdescription(e.target.value)}
            rows="4"
            cols="35"
            placeholder="description"
          ></textarea>
          <label>Product Price:</label>
          <input
            value={productprice}
            onChange={(e) => setProductprice(e.target.value)}
            type="text"
            className="form-control"
            placeholder="price"
          ></input>
          <label>Product Stocks:</label>
          <input
            value={productstocks}
            onChange={(e) => setProductstocks(e.target.value)}
            type="text"
            className="form-control"
            placeholder="stocks"
          ></input>
          <br />
          <div className="d-grid gap-2 col-6 mx-auto">
            <button
              onClick={handleSubmit}
              type="submit"
              className="btn btn-primary me-md-2"
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
