import React from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import CustomLink from './CustomLink.jsx'
import './active.css';
const Layout = ({ children }) => {
  const location = useLocation();
  const setActive = ({isActive}) => ({color : isActive ? 'magenta': ''})
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/" exact activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <Link to="/blogs" className={location.pathname === '/blogs' ? 'YES' : 'NO'}>
              Blogs
            </Link>
          </li>
          <li>
            <CustomLink to="/contact" >
              Contact
            </CustomLink>
          </li>
          <li>
            <NavLink to="/some" style={setActive}>
              Some
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" activeClassName="active">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
