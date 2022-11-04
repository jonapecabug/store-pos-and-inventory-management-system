import React, { useEffect, useContext } from "react";
import { useState } from "react";
import ProductsFinder from "../apis/ProductsFinder";
// import { ProductsContext } from "../context/ProductsContext";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import { CustomerContext } from "../context/CustomerContext";

const CustomerList = (props) => {
  const { onAdd } = props;
  // fetch the data from the server
  const { customer, setCustomer } = useContext(CustomerContext);
  // const { products, setProducts } = useContext(ProductsContext);
  const [sorted, setSorted] = useState({
    sorted: "customer_name",
    reversed: false,
  });
  const [searchPhrase, setSearchPhrase] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ProductsFinder.get("/customer/");
        setCustomer(response.data);
      } catch (err) {}
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sortedByName = () => {
    setSorted({
      sorted: "customer_name",
      reversed: !sorted.reversed,
    });
    const customerCopy = [...customer];
    customerCopy.sort((customerA, customerB) => {
      const fullProductNameA = `${customerA.customer_name}`;
      const fullProductNameB = `${customerB.customer_name}`;

      if (sorted.reversed) {
        return fullProductNameB.localeCompare(fullProductNameA);
      }

      return fullProductNameA.localeCompare(fullProductNameB);
    });
    setCustomer(customerCopy);
  };

  const sortedByPurchase = () => {
    setSorted({
      sorted: "purchase_num",
      reversed: !sorted.reversed,
    });
    const customerCopy = [...customer];
    customerCopy.sort((customerA, customerB) => {
      if (sorted.reversed) {
        return customerA.purchase_num - customerB.purchase_num;
      }
      return customerB.purchase_num - customerA.purchase_num;
    });
    setCustomer(customerCopy);
  };

  const sortedByCredit = () => {
    setSorted({
      sorted: "credit_num",
      reversed: !sorted.reversed,
    });
    const customerCopy = [...customer];
    customerCopy.sort((customerA, customerB) => {
      if (sorted.reversed) {
        return customerA.credit_num - customerB.credit_num;
      }
      return customerB.credit_num - customerA.credit_num;
    });
    setCustomer(customerCopy);
  };

  //SEARCH BAR FUNCTION
  const searchProduct = (e) => {
    const matchedCustomer = customer.filter((customer) => {
      // console.log(e.target.value);
      if (e.target.value === "") {
        const fetchData = async () => {
          try {
            const response = await ProductsFinder.get("/customer/");
            // console.log(response.data);
            setCustomer(response.data);
          } catch (err) {}
        };
        fetchData();
      }
      return customer.customer_name
        .toLowerCase()
        .includes(e.target.value.toLowerCase());
    });
    setCustomer(matchedCustomer);
    setSearchPhrase(e.target.value);
  };

  const renderCostumer = () => {
    return customer.map((customer) => {
      return (
        <tr key={customer.customer_id}>
          <td>{customer.customer_name}</td>
          <td>{customer.purchase_num}</td>
          <td>{customer.credit_num}</td>
          <td>{customer.customer_status}</td>
          <td>
            <button onClick={() => onAdd(customer)} className="btn btn-success">
              Update
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
    <div className="CustomerList">
      {/* filter component */}
      <div className="filter">
        <div className="form-outline">
          <input
            className="form-control"
            type="text"
            placeholder="search costumer"
            value={searchPhrase}
            onChange={searchProduct}
          />
        </div>
      </div>

      {/* TABLE AREA */}
      <div className="tableFixHead">
        <table className="table table-light table-striped table-hover table-bordered">
          <thead className="table-dark">
            <tr>
              <th onClick={sortedByName} scope="col">
                <span>Customer Name</span>
                {sorted.sorted === "customer_name" ? renderArrow() : null}
              </th>
              <th onClick={sortedByPurchase} scope="col">
                {" "}
                <span>Purchase Amount</span>{" "}
                {sorted.sorted === "purchase_num" ? renderArrow() : null}
              </th>
              <th onClick={sortedByCredit} scope="col">
                <span>Credit Amount</span>
                {sorted.sorted === "credit_num" ? renderArrow() : null}
              </th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>{renderCostumer()}</tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
