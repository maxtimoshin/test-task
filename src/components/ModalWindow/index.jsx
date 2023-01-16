import React from 'react';
import './style.css'
import { useDispatch } from 'react-redux';
import { setModal } from '../../redux/slices/modalSlice';
import { useGetUserAlbumsQuery } from '../../redux/api/getUsersData';

const ModalWindow = ({ id }) => {
    const dispatch = useDispatch()
    const closeModal = () => {
        dispatch(setModal())
    }
    const { data } = useGetUserAlbumsQuery(id)

    return (
        <div onClick={closeModal} className='modal-wrapper'>
            <div onClick={e => e.stopPropagation()} className="modal-window">
                <ul className='albums-list'>
                    {data?.map(album => (
                        <li className='albums-list__item' key={album.id}>
                            <div className="albums-title">{album.title}</div>
                            <div className="albums-body">{album.body}</div>
                        </li>
                    ))}
                </ul >
            </div>
        </div>
    );
};

export default ModalWindow;