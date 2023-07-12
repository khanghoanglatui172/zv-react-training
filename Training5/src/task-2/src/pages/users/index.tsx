import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import axios from "axios";
import {base_url} from "../../App";
import {getUserList} from "../../reducers/users.slice";
import UserList from "../../components/user-list";
import {useAppSelector} from "../../hook/useAppSelector";
import {Outlet, useNavigate} from "react-router-dom";

const Users = () => {
    const dispatch = useDispatch();
    const users = useAppSelector((state) => state.root.users.data)
    const userData = useAppSelector(state => state.root.auth.data);
    const navigate = useNavigate()
    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = () => {
        axios.get(`${base_url}/api/users`, {
            headers: {
                Authorization: 'Bearer ' + userData.token
            }
        }).then((res) => {
            dispatch(getUserList(res.data.users))
        }).catch((error) => {
            if(error.response.status === 403) {
                alert('You have not permission to perform this action')
                navigate('/app')
            }
        })
    }

    return (
        <div className='users-container'>
            <UserList userList={users}/>
            <div className='user-info'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Users;