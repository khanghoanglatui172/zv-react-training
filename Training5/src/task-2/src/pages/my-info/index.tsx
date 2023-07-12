import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import axios from "axios";
import {base_url} from "../../App";
import {getUserDetail} from "../../reducers/auth.slice";
import {useAppSelector} from "../../hook/useAppSelector";

const MyInfo = () => {
    const dispatch = useDispatch();
    const userData = useAppSelector((state) => state.root.auth.data)

    useEffect(() => {
        fetchDetail()
    }, [])

    const fetchDetail = () => {
        axios.get(`${base_url}/api/users/my`,{
            headers: {
                Authorization: 'Bearer ' + userData.token
            }
        }).then(res=> {
            dispatch(getUserDetail({userDetail: res.data}))
        })
    }

    return (
        <div>
            <p>{userData.userDetail.email}</p>
            <p>{userData.userDetail.fullName}</p>
            <p>{userData.userDetail.role}</p>
        </div>
    );
};

export default MyInfo;