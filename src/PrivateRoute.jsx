import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({ element: Element, ...rest }) => {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
    if (!isAuthenticated) {
        return (<Navigate to="/login"/>)
    }
    alert(isAuthenticated)
    return (<div>Dashboard</div>);

};

export default PrivateRoute;
