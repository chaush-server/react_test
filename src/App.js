import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserList from './UserList';
import UserDetails from './UserDetails';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/users/:userId" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
