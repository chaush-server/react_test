import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/products/*" element={<Products />} />
          <Route path="*" element={<h2>Ресурс не найден</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
