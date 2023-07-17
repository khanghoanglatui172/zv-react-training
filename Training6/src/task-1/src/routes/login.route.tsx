import React, {PropsWithChildren} from 'react';
import {Navigate} from "react-router-dom";

type  LoginRouteProps = {
    token?: string,
}

const LoginRoute = ({token,children}:PropsWithChildren<LoginRouteProps>) => {

    if (token !== '') {
        return <Navigate replace to='/app'/>
    }

    return <>{children}</>
};

export default LoginRoute;