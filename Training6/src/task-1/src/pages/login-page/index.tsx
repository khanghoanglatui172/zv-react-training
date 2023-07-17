import React from 'react';
import LoginForm from "../../components/login-form";
import {useDispatch} from "react-redux";
import {loginFetch} from "../../reducers/auth.slice";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleLogin = (email: string, password: string) => {
        const data = {email, password}
        dispatch(loginFetch(data))
        navigate('/app')
    }

    return (
        <div>
            <LoginForm handleLogin={handleLogin}/>
        </div>
    );
};

export default LoginPage;