import React from 'react';
import {useAppSelector} from "../../hook/useAppSelector";

const MyInfo = () => {
    const userDetail = useAppSelector((state) => state.auth.data.userDetail);

    return (
        <div>
            <p>{userDetail.email}</p>
            <p>{userDetail.fullName}</p>
            <p>{userDetail.role}</p>
        </div>
    );
};

export default MyInfo;