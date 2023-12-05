import React from 'react';
import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><NavLink exact to="/home" activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/blogs" activeClassName="active">Blogs</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
            <li><NavLink to="/error" activeClassName="active">Error</NavLink></li>

          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
