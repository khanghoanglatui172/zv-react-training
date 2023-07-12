import React from 'react';
import {User} from "../../interfaces/user.interface";
import {Link} from "react-router-dom";

type UserListProps = {
    userList: User[],
}

const UserList = ({userList}: UserListProps) => {

    const renderUserTabs = (data: User[]) => {
        return data.map((user) => <li key={user.id}><Link to={`${user.id}`} >{user.fullName}</Link></li>)
    }

    return (
        <div className='user-list'>
            <ul>
                {renderUserTabs(userList)}
            </ul>
        </div>
    );
};

export default UserList;