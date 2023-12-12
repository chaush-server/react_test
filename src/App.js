import React, {useContext} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import PrivateRoute from './PrivateRoute';
import {AuthContext} from './AuthContext';
// import Home from './Home';
// import Login from './Login';
// import Dashboard from './Dashboard';

function Home() {
  return (
    <div>Home</div>
  )
}

function Login() {
  return (
    <div>Login</div>
  )
}

function Dashboard() {
  return (
    <div>Dashboard</div>
  )
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route exact path='/dashboard' element={<PrivateRoute />}/>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
