import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getUserList} from "../../reducers/users.slice";
import UserList from "../../components/user-list";
import {useAppSelector} from "../../hook/useAppSelector";
import {Outlet, useNavigate} from "react-router-dom";
import {fetchUsersAPIHandler} from "../../api/users.service";

const Users = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const users = useAppSelector((state) => state.users.data)


    useEffect(() => {
        fetchUsers()
    }, [])


    const fetchUsers = async () => {
        const res = await fetchUsersAPIHandler();

        if (res.status === 403) {
            alert('You have not permission to perform this action')
            navigate('/app')
        } else {
            dispatch(getUserList(res.users))
        }
    }

    return (
        users && <div className='users-container'>
            <UserList userList={users}/>
            <div className='user-info'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Users;