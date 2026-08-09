import React from 'react';
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ children }) => {

  const isAuthenticated = localStorage.getItem('adminAuth') === 'true';

  return isAuthenticated
    ? children
    : <Navigate to="/admin" replace />;
};

export default AdminRoute;