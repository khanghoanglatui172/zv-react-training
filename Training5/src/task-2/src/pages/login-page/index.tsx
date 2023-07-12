import React from 'react';
import LoginForm from "../../components/login-form";
import {useDispatch} from "react-redux";
import {Navigate, useNavigate} from "react-router-dom";
import axios from "axios";
import {base_url} from "../../App";
import {login} from "../../reducers/auth.slice";
import {useAppSelector} from "../../hook/useAppSelector";

const LoginPage = () => {
    const dispatch = useDispatch();
    const isLogged = useAppSelector((state) => state.root.auth.data.token);
    const navigate = useNavigate()

    if (isLogged !== '') {
        return <Navigate replace to='/app'/>
    }

    const handleLogin = (email: string, password: string) => {
        const data = {email, password}
        axios.post(`${base_url}/login`, data).then((res) => {
            dispatch(login(res.data.token))
            navigate('/app')
        })
    }

    return (
        <div>
            <LoginForm handleLogin={handleLogin}/>
        </div>
    );
};

export default LoginPage;