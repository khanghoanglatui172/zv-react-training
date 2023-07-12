import React from 'react';
import {Link} from "react-router-dom";

const SideBar = () => {
    return (
        <div className='side-bar'>
            <ul>
                <li><Link to={'/app/home'}>Home</Link></li>
                <li><Link to={'/app/users'}>Users</Link></li>
                <li><Link to={'/app/my-info'}>My Info</Link></li>
            </ul>
        </div>
    );
};

export default SideBar;