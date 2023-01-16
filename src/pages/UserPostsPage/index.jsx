import React from 'react';
import { useGetUserPostsQuery } from '../../redux/api/getUsersData';
import { useParams } from 'react-router-dom';
import './style.css'

const SingleUserPage = () => {
    const { id } = useParams()
    const { data } = useGetUserPostsQuery(id)
    return (
        <ul className='posts-list'>
            {data?.map(post => (
                <li className='posts-list__item' key={post.id}>
                    <div className="post-title">{post.title}</div>
                    <div className="post-body">{post.body}</div>
                </li>
            ))}
        </ul >
    );
};

export default SingleUserPage;
