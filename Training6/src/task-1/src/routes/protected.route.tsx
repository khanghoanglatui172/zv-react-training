import React, {PropsWithChildren} from 'react';
import {Navigate} from "react-router-dom";

type  ProtectedRouteProps = {
    isLogged?: boolean,
}

const ProtectedRoute = ({isLogged, children}: PropsWithChildren<ProtectedRouteProps>) => {

    if (!isLogged) {
        return <Navigate replace to='/login'/>
    }

    return <>{children}</>
};

export default ProtectedRoute;