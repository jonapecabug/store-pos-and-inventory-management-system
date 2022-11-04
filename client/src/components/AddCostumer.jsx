import React from "react";

const AddCostumer = () => {
  return (
    <div className="ProductContainer">
      <div>
        <form action="">
          <div className="row">
            <div className="col">
              <h3 className="">Manage Costumer</h3>
              <input
                type="text"
                className="form-control mt-5"
                placeholder="enter costumer name"
              />
              <div className="text-center">
                <button className="btn btn-lg position-relative btn-primary mt-3">
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
