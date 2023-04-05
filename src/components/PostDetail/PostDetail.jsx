import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import './postdetail.css'

const PostDetail = () => {
    const data = useLoaderData()
    const nevigate = useNavigate();

    const buttonHandle = () => {
        nevigate(-1);
    }
    return (
        <div className='postdetail'>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
            <button onClick={buttonHandle}>Go Back</button>
        </div>
    );
};

export default PostDetail;