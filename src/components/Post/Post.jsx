import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './post.css'

const Post = ({post}) => {
    const navigate = useNavigate();
    const navigateHandle = () =>{
        navigate(`/post/${post.id}`)
    }
    return (
        <div className='post'>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/post/${post.id}`}><button>Details</button></Link>
            <button onClick={navigateHandle}>Navigate Details</button>
        </div>
    );
};

export default Post;