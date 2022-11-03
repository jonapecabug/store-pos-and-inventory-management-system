import React, { useEffect, useContext } from "react";
import { useState } from "react";
import ProductsFinder from "../apis/ProductsFinder";
import { ProductsContext } from "../context/ProductsContext";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const ProductList = (props) => {
  const { onAdd } = props;
  // fetch the data from the server
  const { products, setProducts } = useContext(ProductsContext);
  const [sorted, setSorted] = useState({
    sorted: "product_name",
    reversed: false,
  });
  const [searchPhrase, setSearchPhrase] = useState("");

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

  const sortedByName = () => {
    setSorted({
      sorted: "product_name",
      reversed: !sorted.reversed,
    });
    const productsCopy = [...products];
    productsCopy.sort((productA, productB) => {
      const fullProductNameA = `${productA.product_name}`;
      const fullProductNameB = `${productB.product_name}`;

      if (sorted.reversed) {
        return fullProductNameB.localeCompare(fullProductNameA);
      }

      return fullProductNameA.localeCompare(fullProductNameB);
    });
    setProducts(productsCopy);
  };

  const sortedByPrice = () => {
    setSorted({
      sorted: "product_price",
      reversed: !sorted.reversed,
    });
    const productsCopy = [...products];
    productsCopy.sort((productA, productB) => {
      if (sorted.reversed) {
        return productA.product_price - productB.product_price;
      }
      return productB.product_price - productA.product_price;
    });
    setProducts(productsCopy);
  };

  //SEARCH BAR FUNCTION
  const searchProduct = (e) => {
    const matchedProducts = products.filter((product) => {
      // console.log(e.target.value);
      if (e.target.value === "") {
        const fetchData = async () => {
          try {
            const response = await ProductsFinder.get("/");
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

  const renderUsers = () => {
    return products.map((product) => {
      return (
        <tr key={product.product_id}>
          <td>{product.product_name}</td>
          <td>{product.product_description}</td>
          <td>₱ {product.product_price}</td>
          <td>{product.product_stocks}</td>
          <td>
            <button onClick={() => onAdd(product)} className="btn btn-success">
              Buy
            </button>
          </td>
        </tr>
      );
    });
  };

  const renderArrow = () => {
    if (sorted.reversed) {
      return <FaArrowUp />;
    }
    return <FaArrowDown />;
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
        <div className="filter-result">
          <span>category: </span>
          <select className="form-select" name="ProductCategory">
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

      {/* TABLE AREA */}
      <div className="tableFixHead">
        <table className="table table-light table-striped table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th onClick={sortedByName} scope="col">
                <span>Name</span>
                {sorted.sorted === "product_name" ? renderArrow() : null}
              </th>
              <th scope="col">Description</th>
              <th onClick={sortedByPrice} scope="col">
                <span>Price</span>
                {sorted.sorted === "product_price" ? renderArrow() : null}
              </th>
              <th scope="col">Available</th>
              <th scope="col">Buy</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr>
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
            {renderUsers()}
            {/* {products &&
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
              })} */}
          </tbody>
          <tbody>{renderUsers()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
