import React, { useEffect, useContext, useState } from "react";
import ProductsFinder from "../apis/ProductsFinder";
import { ProductsContext } from "../context/ProductsContext";
import { useNavigate } from "react-router-dom";

const UpdateList = (props) => {
  // fetch the data from the server
  const { products, setProducts } = useContext(ProductsContext);
  const [searchPhrase, setSearchPhrase] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProductsFinder.get("/products/");
        setProducts(response.data);
        // console.log(response);
      } catch (err) {}
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDelete = async (product_id) => {
    try {
      const response = await ProductsFinder.delete(`/products/${product_id}`);
      setProducts(
        products.filter((product) => {
          return product.product_id !== product_id;
        })
      );
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit = (product_id) => {
    navigate(`/products/${product_id}/Update`);
  };

  //SEARCH BAR FUNCTION
  const searchProduct = (e) => {
    const matchedProducts = products.filter((product) => {
      // console.log(e.target.value);
      if (e.target.value === "") {
        const fetchData = async () => {
          try {
            const response = await ProductsFinder.get("/products/");
            // console.log(response.data);
            setProducts(response.data);
          } catch (err) {}
        };
        fetchData();
      }
      return product.product_name
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setProducts(matchedProducts);
    setSearchPhrase(e.target.value);
  };

  return (
    <div className="ProductList">
      {/* filter component */}
      <div className="filter">
        <div className="form-outline">
          <div className="filter-result">{products.length} Products</div>
          <input
            className="form-control"
            type="text"
            placeholder="search products"
            value={searchPhrase}
            onChange={searchProduct}
          />
        </div>
      </div>

      <div className="tableFixHead">
        <table className="table table-light table-striped table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Available</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => {
                return (
                  <tr key={product.product_id}>
                    <td>{product.product_name}</td>
                    <td>{product.product_description}</td>
                    <td>₱ {product.product_price}</td>
                    <td>{product.product_stocks}</td>
                    <td>
                      <button
                        onClick={() => handleEdit(product.product_id)}
                        className="btn btn-info"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(product.product_id)}
                        className="btn btn-warning"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UpdateList;
