import React, { useEffect, useState, memo } from 'react'
import { ListSongItem } from './';
import { useNavigate } from 'react-router-dom';
import path from '../utils/path';

const Rank = ({ data, isHideAlbum, number, link }) => {
    const navigate = useNavigate()
    const [isShow, setShow] = useState(false)
    const [songs, setSong] = useState(null)
    useEffect(() => {
        if (!isShow) {
            setSong(data?.filter((i, idx) => idx < number))
        } else {
            setSong(data)
        }
    }, [isShow, data])
    return (
        <div className='w-full'>
            {songs?.map((item, index) => (
                <ListSongItem
                    songData={item}
                    key={item.encodeId}
                    order={index + 1}
                    isHideAlbum={isHideAlbum}
                />
            ))}
            <div className='flex w-full justify-center items-center'>
                <button
                    type='button'
                    className='px-6 my-4 py-2 border border-hover-600 rounded-l-full rounded-r-full text-hover-600 text-sm hover:text-white hover:bg-hover-600'
                    onClick={() => link ? navigate((link.split('.')[0] || [])) : setShow(prev => !prev)}
                >
                    {isShow ? "Ẩn bớt" : "Xem tất cả"}
                </button>
            </div>
        </div>
    )
}

export default memo(Rank)