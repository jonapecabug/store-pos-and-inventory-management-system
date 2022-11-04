import React, { useContext, useState } from "react";
import ProductsFinder from "../apis/ProductsFinder";
import { CustomerContext } from "../context/CustomerContext";

const AddCostumer = () => {
  const { AddCostumer } = useContext(CustomerContext);
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    // e.preventDefault();
    try {
      const response = await ProductsFinder.post("/customer/", {
        customer_name: name,
      });
      AddCostumer(response.data);
      //   console.log(response.data);
    } catch (err) {}
  };

  return (
    <div className="ProductContainer">
      <div>
        <form action="">
          <div className="row">
            <div className="col">
              <h3 className="">Manage Costumer</h3>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="form-control mt-5"
                placeholder="enter costumer name"
              />
              <div className="text-center">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="btn btn-lg position-relative btn-primary mt-3"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCostumer;
