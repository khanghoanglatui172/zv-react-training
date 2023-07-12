import React from 'react';
import logo from '../../logo.svg';

const NavBar = () => {

    return (
        <div className='nav-bar'>
            <div className='nav-left'>
                <img src={logo} alt="logo" width={50} height={50}/>
            </div>
            <div className='nav-right'>
                <div className='avatar' >
                    <span>KH</span>
                    <div className='dropdown'>
                        <ul>
                            <li>Khang Hoang</li>
                            <li><button>Log out</button></li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NavBar;