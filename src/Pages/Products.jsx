import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";

function Phone() {
  return <h3>Смартфоны</h3>;
}

function Tablet() {
  return <h3>Планшеты</h3>;
}

const Products = () => {
  return (
    <div>
      <h2>Товары</h2>
      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route path="phones" element={<Phone />} />
        <Route path="tablets" element={<Tablet />} />
      </Routes>
    </div>
  );
};

export default Products;
