import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h2>This is individual detail</h2>
            <h3>{data.id}</h3>
            <h3>{data.name}</h3>
            <h3>{data.email}</h3>
        </div>
    );
};

export default FriendDetail;