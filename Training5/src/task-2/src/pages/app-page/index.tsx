import React from 'react';
import NavBar from "../../components/nav-bar";
import SideBar from "../../components/side-bar";
import {Navigate, Outlet} from "react-router-dom";
import {useAppSelector} from "../../hook/useAppSelector";

const HomePage = () => {
    const currentUser = useAppSelector(state => state.root.auth.data);

    if (currentUser.token === '') {
        return <Navigate replace to='/' />
    }

    return (
        <div>
            <NavBar/>
            <div className='home-container'>
                <SideBar/>
                <div style={{textAlign: 'center'}}>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
};

export default HomePage;