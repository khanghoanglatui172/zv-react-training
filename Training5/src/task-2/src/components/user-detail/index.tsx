import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {User} from "../../interfaces/user.interface";
import {useAppSelector} from "../../hook/useAppSelector";

const UserDetail = () => {
    const users = useAppSelector((state) => state.users.data)
    const [userDetail, setUserDetail] = useState<User>({} as User)
    const {id} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        const result = users.find((user) => user.id === id)
        if (result) {
            setUserDetail(result);
        } else {
            alert('User not found');
            navigate('/app/users');
        }
    }, [id])

    return (
        userDetail &&
        <div>
            <p>{userDetail.id}</p>
            <p>{userDetail.email}</p>
            <p>{userDetail.fullName}</p>
            <p>{userDetail.role}</p>
        </div>)
};

export default UserDetail;