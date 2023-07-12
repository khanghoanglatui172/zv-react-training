import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {User} from "../../interfaces/user.interface";
import {useAppSelector} from "../../hook/useAppSelector";

const UserDetail = () => {
    const users = useAppSelector((state) => state.root.users.data)
    const [userDetail, setUserDetail] = useState<User>({id: '', email: '', fullName: '', role: ''})
    const {id} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
            const result = users.find((user) => user.id === id)
            if(result) {
                setUserDetail(result);
            } else {
                alert('User not found');
                navigate('/app/users');
            }
    }, [id])

    return (
        <div>
            <p>{userDetail.id}</p>
            <p>{userDetail.email}</p>
            <p>{userDetail.fullName}</p>
            <p>{userDetail.role}</p>
        </div>
    );
};

export default UserDetail;