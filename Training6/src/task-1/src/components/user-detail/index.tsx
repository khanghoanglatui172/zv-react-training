import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useAppSelector} from "../../hook/useAppSelector";
import {useDispatch} from "react-redux";
import {getParticularUserDetailFetch} from "../../reducers/users.slice";

const UserDetail = () => {
    const dispatch = useDispatch();
    const userList = useAppSelector((state) => state.users.data)
    const users = useAppSelector((state) => state.users)
    const {id} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getParticularUserDetailFetch({userList, id}))
    }, [id])

    useEffect(() => {
        if (users.error === 'User not found') {
            navigate('/app/users')
        }
    }, [users.error])

    return (
        <div>
                {users.userDetail !== null && <>
                    <p>{users.userDetail.id}</p>
                    <p>{users.userDetail.email}</p>
                    <p>{users.userDetail.fullName}</p>
                    <p>{users.userDetail.role}</p>
                </>}
        </div>
    );
};

export default UserDetail;