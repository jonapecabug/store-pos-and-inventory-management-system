import React from "react";
// import { useState } from "react";
// import ProductsFinder from "../apis/ProductsFinder";
// // import { ProductsContext } from "../context/ProductsContext";
// import { FaArrowUp, FaArrowDown } from "react-icons/fa";
// import { CustomerContext } from "../context/CustomerContext";

const PuchaseCredit = (props) => {
  // fetch the data from the server
  //   const { customer, setCustomer } = useContext(CustomerContext);
  // const { products, setProducts } = useContext(ProductsContext);
  //   const [sorted, setSorted] = useState({
  //     sorted: "customer_name",
  //     reversed: false,
  //   });
  //   const [searchPhrase, setSearchPhrase] = useState("");

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await ProductsFinder.get("/customer/");
  //         setCustomer(response.data);
  //       } catch (err) {}
  //     };
  //     fetchData();
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  //   }, []);

  //   const sortedByName = () => {
  //     setSorted({
  //       sorted: "customer_name",
  //       reversed: !sorted.reversed,
  //     });
  //     const customerCopy = [...customer];
  //     customerCopy.sort((customerA, customerB) => {
  //       const fullProductNameA = `${customerA.customer_name}`;
  //       const fullProductNameB = `${customerB.customer_name}`;

  //       if (sorted.reversed) {
  //         return fullProductNameB.localeCompare(fullProductNameA);
  //       }

  //       return fullProductNameA.localeCompare(fullProductNameB);
  //     });
  //     setCustomer(customerCopy);
  //   };

  //   const sortedByPurchase = () => {
  //     setSorted({
  //       sorted: "purchase_num",
  //       reversed: !sorted.reversed,
  //     });
  //     const customerCopy = [...customer];
  //     customerCopy.sort((customerA, customerB) => {
  //       if (sorted.reversed) {
  //         return customerA.purchase_num - customerB.purchase_num;
  //       }
  //       return customerB.purchase_num - customerA.purchase_num;
  //     });
  //     setCustomer(customerCopy);
  //   };

  //   const sortedByCredit = () => {
  //     setSorted({
  //       sorted: "credit_num",
  //       reversed: !sorted.reversed,
  //     });
  //     const customerCopy = [...customer];
  //     customerCopy.sort((customerA, customerB) => {
  //       if (sorted.reversed) {
  //         return customerA.credit_num - customerB.credit_num;
  //       }
  //       return customerB.credit_num - customerA.credit_num;
  //     });
  //     setCustomer(customerCopy);
  //   };

  //   //SEARCH BAR FUNCTION
  //   const searchProduct = (e) => {
  //     const matchedCustomer = customer.filter((customer) => {
  //       // console.log(e.target.value);
  //       if (e.target.value === "") {
  //         const fetchData = async () => {
  //           try {
  //             const response = await ProductsFinder.get("/customer/");
  //             // console.log(response.data);
  //             setCustomer(response.data);
  //           } catch (err) {}
  //         };
  //         fetchData();
  //       }
  //       return customer.customer_name
  //         .toLowerCase()
  //         .includes(e.target.value.toLowerCase());
  //     });
  //     setCustomer(matchedCustomer);
  //     setSearchPhrase(e.target.value);
  //   };

  //   const renderCostumer = () => {
  //     return customer.map((customer) => {
  //       return (
  //         <tr key={customer.customer_id}>
  //           <td>{customer.customer_name}</td>
  //           <td>₱ {customer.purchase_num}</td>
  //           <td>₱ {customer.credit_num}</td>
  //           <td>{customer.customer_status}</td>
  //           <td>
  //             <button className="btn btn-success">View</button>
  //           </td>
  //         </tr>
  //       );
  //     });
  //   };

  return (
    <div className="MainList">
      {/* filter component */}
      <div className="row mb-3">
        <div className="col form-outline">
          <input
            className="form-control"
            type="text"
            placeholder="search costumer"
          />
        </div>
        <div className="col">
          <button className="btn btn-primary">search</button>
        </div>
      </div>

      {/* TABLE AREA */}
      <div className="">
        <div className="row">
          <div className="col">
            <table className="table table-light table-striped table-hover table-bordered">
              <thead className="table-dark">
                <tr>
                  <th scope="col">
                    <span>Purchase Date</span>
                  </th>
                  <th scope="col">
                    {" "}
                    <span>Purchase Amount</span>{" "}
                  </th>
                  <th scope="col">
                    <span>Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10-31-2022 1:00PM</td>
                  <td>₱ 50.00</td>
                  <td>
                    <button className="btn btn-success">View</button>
                  </td>
                </tr>
                <tr>
                  <td>10-25-2022 8:23PM</td>
                  <td>₱ 10.00</td>
                  <td>
                    <button className="btn btn-success">View</button>
                  </td>
                </tr>
                <tr>
                  <td>10-23-2022 3:12PM</td>
                  <td>₱ 20.00</td>
                  <td>
                    <button className="btn btn-success">View</button>
                  </td>
                </tr>

                <tr>
                  <td>10-23-2022 7:12AM</td>
                  <td>₱ 20.00</td>
                  <td>
                    <button className="btn btn-success">View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="col">
            <table className="table table-light table-striped table-hover table-bordered">
              <thead className="table-dark">
                <tr>
                  <th scope="col">
                    <span>Credit Date</span>
                  </th>
                  <th scope="col">
                    {" "}
                    <span>Credit Amount</span>{" "}
                  </th>
                  <th scope="col">
                    <span>Action</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10-30-2022 5:10PM</td>
                  <td>₱ 52.00</td>
                  <td>
                    <button className="btn btn-success">View</button>
                  </td>
                </tr>

                <tr>
                  <td>11-1-2022 3:11PM</td>
                  <td>₱ 200.00</td>
                  <td>
                    <button className="btn btn-success">View</button>
                  </td>
                </tr>

                <tr>
                  <td>11-1-2022 5:10PM</td>
                  <td>₱ 75.00</td>
                  <td>
                    <button className="btn btn-success">View</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuchaseCredit;
