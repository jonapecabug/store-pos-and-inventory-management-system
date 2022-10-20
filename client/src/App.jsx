import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./routes/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Logout from "./components/logout";
import ManageProducts from "./routes/ManageProducts";
import UpdateProducts from "./routes/UpdateProducts";
import { ProductsContextProvider } from "./context/ProductsContext";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  // function that toggles true/false authentication
  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
  };
  // function for navigating elements on routes
  // function authenticate login
  const authLogin = (props) => {
    return !isAuthenticated ? (
      <Login {...props} setAuth={setAuth} />
    ) : (
      <Navigate to="/" />
    );
  };
  // function authenticate register
  const authReg = (props) => {
    return !isAuthenticated ? (
      <Register {...props} setAuth={setAuth} />
    ) : (
      <Navigate to="/login" />
    );
  };
  // function authenticate home/dashboard
  const authHome = (props) => {
    return isAuthenticated ? (
      <Home {...props} setAuth={setAuth} />
    ) : (
      <Navigate to="/login" />
    );
  };

  // function authenticate logout
  const authLogout = (props) => {
    return isAuthenticated ? (
      <Logout {...props} setAuth={setAuth} />
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
          <Route path="/logout" element={authLogout()} />
        </Routes>
      </ProductsContextProvider>
    </Router>
  );
};

export default App;
