import React from 'react';
import LoginForm from "../../components/login-form";
import {useDispatch} from "react-redux";
import {Navigate} from "react-router-dom";
import {getToken, login} from "../../reducers/auth.slice";
import {useAppSelector} from "../../hook/useAppSelector";
import {loginAPIHandler} from "../../api/login.service";

const LoginPage = () => {
    const dispatch = useDispatch();
    const isLogged = useAppSelector(getToken);

    if (isLogged !== '') {
        return <Navigate replace to='/app'/>
    }

    const handleLogin = async (email: string, password: string) => {
        const data = {email, password}
        const res = await loginAPIHandler(data);
        dispatch(login(res.token))
    }

    return (
        <div>
            <LoginForm handleLogin={handleLogin}/>
        </div>
    );
};

export default LoginPage;