import React from 'react';

const Friend = ({friend}) => {
    const {name, username} = friend;
    return (
        <div>
            <h3>Name: {name}</h3>
            <h6>User Name: {username}</h6>
        </div>
    );
};

export default Friend;