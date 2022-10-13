import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import SideNavigation from "./components/SideNavigation";
import ManageProducts from "./routes/ManageProducts";
import UpdateProducts from "./routes/UpdateProducts";

const App = () => {
  return (
    <div className="App">
      <SideNavigation />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id/Update" element={<UpdateProducts />} />
          <Route path="/products" element={<ManageProducts />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
