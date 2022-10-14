import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import SideNavigation from "./components/SideNavigation";
import ManageProducts from "./routes/ManageProducts";
import UpdateProducts from "./routes/UpdateProducts";
import { ProductsContextProvider } from "./context/ProductsContext";

const App = () => {
  return (
    <ProductsContextProvider>
      <div className="App">
        <SideNavigation />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id/Update" element={<UpdateProducts />} />
            <Route path="/ManageProducts" element={<ManageProducts />} />
          </Routes>
        </Router>
      </div>
    </ProductsContextProvider>
  );
};

export default App;
