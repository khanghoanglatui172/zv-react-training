import React from 'react';
import LoginForm from "../../components/login-form";
import {useDispatch} from "react-redux";
import {getToken, loginFetch} from "../../reducers/auth.slice";
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../hook/useAppSelector";

const LoginPage = () => {
    const dispatch = useDispatch();
    const isLogged = useAppSelector(getToken);

    if (isLogged !== '') {
        return <Navigate replace to='/app'/>
    }

    const handleLogin = (email: string, password: string) => {
        const data = {email, password}
        dispatch(loginFetch(data))
    }

    return (
        <div>
            <LoginForm handleLogin={handleLogin}/>
        </div>
    );
};

export default LoginPage;