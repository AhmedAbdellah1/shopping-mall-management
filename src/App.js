import "./App.css";
import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import AddCustomer from "./components/addCustomer";
import AllCustomer from "./components/allCustomer";
import EditCustomer from "./components/updateCustomer";

function App() {
  return (
    <Routes>
      <Route path="/customers/add" element={<AddCustomer />} />
      <Route path="/customers/edit/:id" element={<EditCustomer />} />
      <Route path="/" element={<AllCustomer />} />
    </Routes>
  );
}

export default App;
