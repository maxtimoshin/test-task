import React, { useState } from 'react';
import { useGetUsersQuery } from '../../redux/api/getUsersData';
import './style.css'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../../redux/slices/modalSlice';
import ModalWindow from '../../components/ModalWindow';

const UsersList = () => {
    const [currentUserId, setCurrentUserId] = useState(null)
    const dispatch = useDispatch()
    const { data } = useGetUsersQuery([])
    const isModalOpened = useSelector(state => state.modal.isModalOpened)
    const modalHandler = (id) => {
        dispatch(setModal())
        setCurrentUserId(id)
    }
    return (
        <>
            {isModalOpened ? <ModalWindow id={currentUserId} /> : null}
            <ul className='users-list'>
                {data?.map(user => (
                    <li key={user.id} className='users-list__item'>
                        {user.id}. {user.name}
                        <div className='users-list__buttons'>
                            <Link target="_blank" to={`/user/${user.id}/posts`}>
                                <button>Posts</button>
                            </Link>
                            <button onClick={() => modalHandler(user.id)}>Albums</button>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default UsersList;