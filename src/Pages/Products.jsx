import React from 'react';
import { Routes,NavLink, Route, Outlet } from 'react-router-dom';
import Phone from './Phone';
import Tablet from './Tablet';
import ErrorPage from './ErrorPage';

const Products = () => {
  return (
    <div>
      Продукты:
      <ul>
        <li>

      <NavLink to="phones" exact activeClassName="active">
        phones
      </NavLink>
        </li>
        <li>
      <NavLink to="tablets" exact activeClassName="active">
        tablets
      </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Outlet />} />
        <Route path="phones" element={<Phone />} />
        <Route path="tablets" element={<Tablet />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default Products;