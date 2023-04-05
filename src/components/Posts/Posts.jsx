import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const data = useLoaderData();
    return (
        <div>
            <h2>All posts here: {data.length}</h2>
            <div>
                {
                    data.map(post => <Post 
                    key={data.id}
                    post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;