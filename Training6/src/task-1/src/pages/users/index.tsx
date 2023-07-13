import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getUserListFetch} from "../../reducers/users.slice";
import UserList from "../../components/user-list";
import {useAppSelector} from "../../hook/useAppSelector";
import {Outlet, useNavigate} from "react-router-dom";

const Users = () => {
    const dispatch = useDispatch();
    const users = useAppSelector((state) => state.users)
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getUserListFetch(null))
    }, [dispatch])

    useEffect(() => {
        if(users.error !== null && users.error.status === 403 ){
            alert('You have not permission to perform this action')
            return navigate('/app')
        }
    }, [users.error])


    return (
        <div className='users-container'>
            <UserList userList={users.data}/>
            <div className='user-info'>
                <Outlet/>
            </div>
        </div>
    );
};

export default Users;