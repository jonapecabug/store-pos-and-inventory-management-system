import React, { Fragment } from "react";

const logout = ({ setAuth }) => {
  return (
    <Fragment>
      <h1>successfully logout</h1>
      <button onClick={() => setAuth(false)} className="btn btn-primary">
        go back to log-in
      </button>
    </Fragment>
  );
};

export default logout;
