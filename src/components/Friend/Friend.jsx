import React from 'react';
import './friend.css';
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    const {name, email, phone,id} = friend;
    return (
        <div className='friend'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link to= {`/friend/${id}`}>Show Details</Link>
        </div>
    );
};

export default Friend;