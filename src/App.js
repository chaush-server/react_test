import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import Contact from './Pages/Contact';
import ErrorPage from './Pages/ErrorPage';
import NoPage from './Pages/NoPage';

const App = () => {
  return (
    <Router>
      <Routes>
          <Route path="" element={<Layout />} />
          <Route path="home" element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="error" element={<ErrorPage />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
};

export default App;
