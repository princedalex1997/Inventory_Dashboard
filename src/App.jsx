import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashboard from "./components/Dashboard";
import Products from "./components/Products";
import Order from "./components/pages/Order";
import Customers from "./components/pages/Customers";
import Transactions from "./components/pages/Transactions";
import Messages from "./components/pages/Messages";
import Settings from "./components/pages/Settings";
import Help from "./components/pages/Help";
import CustDetails from "./components/pages/CustDetails";
import PrdDetails from "./components/pages/PrdDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Dashboard/>} />
          <Route  path="products" element={<Products/>} />
          <Route  path="orders" element={<Order/>} />
          <Route  path="customers" element={<Customers/>} />
          <Route  path="transactions" element={<Transactions/>} />
          <Route  path="messages" element={<Messages/>} />
          <Route  path="settings" element={<Settings/>} />
          <Route  path="support" element={<Help/>} />
          <Route  path="customerDetails/:id" element={<CustDetails  />} />
          <Route path="productDetails/:id" element={<PrdDetails/>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
