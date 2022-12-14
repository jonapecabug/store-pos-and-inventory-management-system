import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./routes/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import ManageProducts from "./routes/ManageProducts";
import UpdateProducts from "./routes/UpdateProducts";
import { ProductsContextProvider } from "./context/ProductsContext";
import Customer from "./routes/Customer";
import EditCustomer from "./routes/EditCustomer";
import Report from "./routes/Report";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // function that toggles true/false authentication
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  const isAuth = async () => {
    try {
      const response = await fetch("http://localhost:5000/auth/is-verify", {
        method: "GET",
        headers: { token: localStorage.token },
      });

      const parseRes = await response.json();

      parseRes === true ? setIsAuthenticated(true) : setIsAuthenticated(false);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    isAuth();
  }, []);

  //toastify
  const notify = () => {
    toast("Default Notification !");
  };

  // function for navigating elements on routes
  // function authenticate login
  const authLogin = (props) => {
    return !isAuthenticated ? (
      <Login {...props} setAuth={setAuth} notify={notify} />
    ) : (
      <Navigate to="/Home" />
    );
  };
  // function authenticate register
  const authReg = (props) => {
    return !isAuthenticated ? (
      <Register {...props} setAuth={setAuth} notify={notify} />
    ) : (
      <Navigate to="/login" />
    );
  };

  // function authenticate home/dashboard
  const authHome = (props) => {
    return isAuthenticated ? (
      <Home {...props} setAuth={setAuth} notify={notify} />
    ) : (
      <Navigate to="/login" />
    );
  };

  return (
    <Router>
      <ProductsContextProvider>
        <Routes>
          <Route path="/Login" element={authLogin()} />
          <Route path="/Register" element={authReg()} />
          <Route path="/Home" element={authHome()} />
          <Route path="/ManageProducts" element={<ManageProducts />} />
          <Route path="/products/:id/Update" element={<UpdateProducts />} />
          <Route path="/Customer" element={<Customer />} />
          <Route path="/EditCustomer" element={<EditCustomer />} />
          <Route path="/Report" element={<Report />} />
        </Routes>
      </ProductsContextProvider>
      <ToastContainer />
    </Router>
  );
};

export default App;
