import React, {PropsWithChildren} from 'react';
import {Navigate} from "react-router-dom";

type  ProtectedRouteProps = {
    isLogged?: boolean,
}

const ProtectedRoute = ({isLogged, children}: PropsWithChildren<ProtectedRouteProps>) => {
    const token = localStorage.getItem('access_token');

    const isTokenExpired = (token: string) => {
        const expiry = (JSON.parse(atob(token!.split('.')[1]))).exp;
        return (Math.floor((new Date).getTime() / 1000)) >= expiry;
    }

    if (!isLogged || isTokenExpired(token!)) {
        return <Navigate replace to='/login'/>
    }

    return <>{children}</>
};

export default ProtectedRoute;