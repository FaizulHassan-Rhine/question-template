import React, { useContext } from 'react';
import { UserContextManager } from '../../../App';
import { Navigate, Outlet } from 'react-router';

const PrivateRouteDash = () => {
    const [getUserInfo, setUserInfo, getToken, setToken, getAdminUserInfo] = useContext(UserContextManager); 

    // If authorized, return an outlet that will render child elements
    // If not, return element that will navigate to login page
    return getAdminUserInfo !== 0 ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouteDash;