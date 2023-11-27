import React from 'react'
import { memo } from 'react'
import moment from 'moment'
import 'moment/locale/vi'
import { useDispatch } from 'react-redux';
import * as actions from '../store/actions';


const ItemSong = ({ thumbnail, title, artists, releaseDate, sid, order, percent, style }) => {
    const dispatch = useDispatch()
    return (
        <div
            onClick={() => {
                dispatch(actions.getMusicCur(sid))
                dispatch(actions.playMusic(true))
            }}
            className={`w-full flex flex-auto justify-between items-center p-[10px] gap-[10px] rounded-md cursor-pointer ${style || 'text-black  hover:bg-primary-400 '
                }`}
        >
            <div className='flex gap-4 '>
                {order && <span className={`${order === 1 ? 'text-shadow-no1' : order === 2 ? 'text-shadow-no2' : 'text-shadow-no3'} text-[rgba(65,15,101,0.95)] text-[32px] m-auto`}>{order}</span>}
                <img src={thumbnail} alt="thumbnail" className='w-[60px] h-[60px] object-cover rounded-md' />
                <div className='flex flex-col'>
                    <span className='text-sm font-semibold'>{title}</span>
                    <span className='text-xs opacity-70'>{artists}</span>
                    {releaseDate && <span className={`text-xs opacity-70`}>{moment(releaseDate * 1000).fromNow()}</span>}
                </div>
            </div>
            {percent && <span className='font-bold'>{`${percent}% `}</span>}
        </div>
    )
}

export default memo(ItemSong)