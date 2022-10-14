import React, { useEffect, useContext } from "react";
import ProductsFinder from "../apis/ProductsFinder";
import { ProductsContext } from "../context/ProductsContext";

const ProductList = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { products, setProducts } = useContext(ProductsContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProductsFinder.get("/");
        setProducts(response.data);
      } catch (err) {}
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ProductList">
      <div className="list-group">
        <table className="table table-light table-striped table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Available</th>
              <th scope="col">Buy</th>
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
                      <button className="btn btn-success">Buy</button>
                    </td>
                  </tr>
                );
              })}
            {/* <tr>
              <td>Coca-Cola</td>
              <td>200ml Sakto</td>
              <td>16.00</td>
              <td>12</td>
              <td>
                <button className="btn btn-success">Buy</button>
              </td>
            </tr>
            <tr>
              <td>Coca-Cola</td>
              <td>200ml Sakto</td>
              <td>16.00</td>
              <td>12</td>
              <td>
                <button className="btn btn-success">Buy</button>
              </td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
