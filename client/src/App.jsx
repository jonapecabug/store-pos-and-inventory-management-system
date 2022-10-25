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
import LogOut from "./components/logOut";
import ManageProducts from "./routes/ManageProducts";
import UpdateProducts from "./routes/UpdateProducts";
import { ProductsContextProvider } from "./context/ProductsContext";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // function that toggles true/false authentication
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };

  async function isAuth() {
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
  }

  useEffect(() => {
    isAuth();
  });

  //toastify
  const notify = () => {
    toast("Default Notification !");

    toast.success("Success Notification !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

    toast.error("Error Notification !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  // function for navigating elements on routes
  // function authenticate login
  const authLogin = (props) => {
    return !isAuthenticated ? (
      <Login {...props} setAuth={setAuth} notify={notify} />
    ) : (
      <Navigate to="/" />
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

  // function authenticate logout
  const authLogout = (props) => {
    return isAuthenticated ? (
      <LogOut {...props} setAuth={setAuth} notify={notify} />
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
          <Route path="/" element={authHome()} />
          <Route path="/products/:id/Update" element={<UpdateProducts />} />
          <Route path="/ManageProducts" element={<ManageProducts />} />
          <Route path="/logOut" element={authLogout()} />
        </Routes>
      </ProductsContextProvider>
      <ToastContainer />
    </Router>
  );
};

export default App;
