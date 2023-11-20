import React from 'react'
import { memo } from 'react'
import moment from 'moment'
import 'moment/locale/vi'
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions'

const ItemSong = ({ thumbnail, title, artists, releaseDate, sid }) => {
    const dispatch = useDispatch()
    return (
        <div
            onClick={() => {
                dispatch(actions.getMusicCur(sid))
                dispatch(actions.playMusic(true))
            }}
            className='w-[45%] min-[1024px]:w-[30%] flex flex-auto p-[10px] gap-[10px] rounded-md cursor-pointer hover:bg-primary-400'
        >
            <img src={thumbnail} alt="thumbnail" className='w-[60px] h-[60px] object-cover rounded-md' />
            <div className='flex flex-col'>
                <span className='text-sm font-semibold'>{title}</span>
                <span className='text-xs text-gray-700'>{artists}</span>
                <span className='text-xs text-gray-700'>{moment(releaseDate * 1000).fromNow()}</span>

            </div>
        </div>
    )
}

export default memo(ItemSong)