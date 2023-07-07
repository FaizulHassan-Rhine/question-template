
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { UserContextManager } from '../../App';

const PrivateRoute = () => {
    const [getUserInfo] = useContext(UserContextManager); 

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return getUserInfo !== 0 ? <Outlet /> : <Navigate to="/" />;
}

export default PrivateRoute;