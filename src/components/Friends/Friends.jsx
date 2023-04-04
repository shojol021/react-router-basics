import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';

const Friends = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h2>Total friends: {data.length}</h2>
            <div>
                {
                    data.map(friend => <Friend
                    key={friend.id}
                    friend = {friend}
                    ></Friend>)
                }
            </div>
        </div>
    );
};

export default Friends;