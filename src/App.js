import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from './Pages/Home.jsx';
import Blogs from './Pages/Blogs.jsx';
import Contact from './Pages/Contact.jsx';
import NoPage from './Pages/NoPage.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import Products from './Pages/Products.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products/*" element={<Products />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
