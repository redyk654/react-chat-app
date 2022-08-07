import React, { useContext } from 'react';
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../Context/UserIsLogin";
import Login from '../Login/Login';

export default function ProtectedRoutes() {

    const { isAuth } = useContext(UserContext)

  return isAuth ? (
        <Outlet /> 
    ) : (
        <Navigate to='/' />
    )
}
