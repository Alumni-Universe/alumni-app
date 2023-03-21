import React from 'react';
import UserEventItem from './UserEventItem';

const UserEvents : React.FC = () => {
    return (
        <div className="shadow-md p-2">
            <p className="text-lg font-bold text-center">User is attending: </p>
            <UserEventItem/>
            <UserEventItem/>
            <UserEventItem/>
            <UserEventItem/>
        </div>
    );
};

export default UserEvents;