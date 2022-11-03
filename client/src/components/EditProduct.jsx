import React, { useState, useEffect } from "react";
import ProductsFinder from "../apis/ProductsFinder";
// import { ProductsContext } from "../context/ProductsContext";
import { useNavigate, useParams } from "react-router-dom";

const EditProduct = (props) => {
  const navigate = useNavigate();
  const { id } = useParams();
  //   console.log(id);
  //   const { products } = useContext(ProductsContext);
  const [productname, setProductname] = useState("");
  const [productdescription, setProductdescription] = useState("");
  const [productprice, setProductprice] = useState("");
  const [productstocks, setProductstocks] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProductsFinder.get(`/${id}`);
        setProductname(response.data.product_name);
        setProductdescription(response.data.product_description);
        setProductprice(response.data.product_price);
        setProductstocks(response.data.product_stocks);
      } catch (err) {
        console.error(err.message);
      }
    };
    // call the fetchData function
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleSubmit = async (e) => {
    // e.preventDefault();

    const updatedProduct = await ProductsFinder.put(`/${id}`, {
      product_name: productname,
      product_description: productdescription,
      product_price: productprice,
      product_stocks: productstocks,
    });
    console.log(updatedProduct);
    // navigate(`/ManageProducts`);
  };

  const handleBack = () => {
    navigate(`/ManageProducts`);
  };

  return (
    <div className="ProductContainer">
      <p>
        <h3 className="text-center">Update Products</h3>
      </p>
      <form>
        <div className="form-col">
          <label>Product Name:</label>
          <input
            id="productname"
            value={productname}
            onChange={(e) => setProductname(e.target.value)}
            type="text"
            className="form-control"
            placeholder="product name"
          ></input>
          <label>Product Description:</label>
          <br></br>
          <textarea
            id="productdescription"
            value={productdescription}
            onChange={(e) => setProductdescription(e.target.value)}
            rows="4"
            cols="35"
            placeholder="description"
          ></textarea>
          <label>Product Price:</label>
          <input
            id="productprice"
            value={productprice}
            onChange={(e) => setProductprice(e.target.value)}
            type="text"
            className="form-control"
            placeholder="price"
          ></input>
          <label>Product Stocks:</label>
          <input
            id="productstocks"
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
              Update Product
            </button>
            <button
              onClick={handleBack}
              type="submit"
              className="btn btn-danger me-md-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;
