import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {getUserDetail} from "../../reducers/auth.slice";
import {useAppSelector} from "../../hook/useAppSelector";
import {fetchUserDetailAPIHandler} from "../../api/users.service";

const MyInfo = () => {
    const dispatch = useDispatch();
    const userDetail = useAppSelector((state) => state.auth.data.userDetail)
    useEffect(() => {
        fetchDetail()
    }, [])

    const fetchDetail = async () => {
        const res = await fetchUserDetailAPIHandler();
        dispatch(getUserDetail({userDetail: res}))
    }

    return (
        <div>
            <p>{userDetail.email}</p>
            <p>{userDetail.fullName}</p>
            <p>{userDetail.role}</p>
        </div>
    );
};

export default MyInfo;