import React from "react";

const ManageList = () => {
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
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Coca-Cola</td>
              <td>200ml Sakto</td>
              <td>16.00</td>
              <td>12</td>
              <td>
                <button className="btn btn-warning">Update</button>
              </td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Coca-Cola</td>
              <td>200ml Sakto</td>
              <td>16.00</td>
              <td>12</td>
              <td>
                <button className="btn btn-warning">Update</button>
              </td>
              <td>
                <button className="btn btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageList;
