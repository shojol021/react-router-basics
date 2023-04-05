import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/post/${post.id}`}>Details</Link>
        </div>
    );
};

export default Post;