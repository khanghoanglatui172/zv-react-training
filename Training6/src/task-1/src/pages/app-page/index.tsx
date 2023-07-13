import React, {useEffect} from 'react';
import NavBar from "../../components/nav-bar";
import SideBar from "../../components/side-bar";
import {Navigate, Outlet} from "react-router-dom";
import {useAppSelector} from "../../hook/useAppSelector";
import {useDispatch} from "react-redux";
import {getUserDetailFetch} from "../../reducers/auth.slice";

const HomePage = () => {
    const dispatch = useDispatch()
    const currentUser = useAppSelector(state => state.auth.data);

    useEffect(() => {
        dispatch(getUserDetailFetch(null))
    },[dispatch])

    if (currentUser.token === '') {
        return <Navigate replace to='/' />
    }

    return (
        <div>
            <NavBar/>
            <div className='home-container'>
                <SideBar/>
                <div style={{textAlign: 'center'}}>
                    <Outlet context={{userDetail: currentUser.userDetail}}/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;