// import React from "react";

const logout = ({ setAuth }) => {
  localStorage.removeItem("token");
  setAuth(false);
};

export default logout;
