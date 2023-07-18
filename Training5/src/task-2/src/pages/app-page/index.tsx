import React from 'react';
import NavBar from "../../components/nav-bar";
import SideBar from "../../components/side-bar";
import {Outlet} from "react-router-dom";

const HomePage = () => {
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