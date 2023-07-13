import React from 'react';
import LoginForm from "../../components/login-form";
import {useDispatch} from "react-redux";
import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../hook/useAppSelector";
import {loginFetch} from "../../reducers/auth.slice";

const LoginPage = () => {
    const dispatch = useDispatch();
    const isLogged = useAppSelector((state) => state.auth.data.token);

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