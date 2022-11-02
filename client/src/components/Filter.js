import React, { useContext, useEffect } from "react";
import ProductsFinder from "../apis/ProductsFinder";
import { ProductsContext } from "../context/ProductsContext";

const Filter = (props) => {
  const { products, setProducts } = useContext(ProductsContext);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProductsFinder.get("/");
        // const numrows = response.data.length;
        // console.log("DATA" + response.data);

        // console.log("Rows" + numrows);
        setProducts(response.data);
      } catch (err) {}
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onFilterValueChanged = async (e) => {
    props.filterValueSelected(e.target.value);
  };

  return (
    <div className="filter">
      <div className="filter-result">{products.length} Products</div>
      <div className="search-container">
        <input type="text" placeholder="search products" />
      </div>
      <div className="filter-category">
        category:{" "}
        <select name="ProductCategory" onChange={onFilterValueChanged}>
          <option value="all">ALL</option>
          {products &&
            products.map((product) => {
              return (
                <option key={product.product_id} value={product.category}>
                  {product.category}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
};

export default Filter;
