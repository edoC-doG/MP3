import React, { memo } from 'react'
import icons from '../utils/icons'
import moment from 'moment'
import * as actions from '../store/actions'
import { useDispatch } from 'react-redux'


const { BsMusicNoteBeamed } = icons

const ListSongItem = ({ songData }) => {
    const id = songData?.encodeId
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(actions.getMusicCur(id))
        console.log(id)
        dispatch(actions.playMusic(true))
    }
    return (
        <div
            className='flex justify-between items-center p-[10px] border-b border-[#F8F8F8] hover:bg-primary-300 cursor-pointer'
            onClick={() => handleClick()}
        >
            <div className='flex items-center gap-3 flex-1'>
                <span><BsMusicNoteBeamed /></span>
                <img
                    src={songData?.thumbnail}
                    alt="thumbnail"
                    className='w-10 h-10 object-cover rounded-md'
                />
                <span className='flex flex-col w-full'>
                    <span className=' text-sm font-semibold '
                    >
                        {songData?.title?.length > 30 ? `${songData?.title?.slice(0, 30)}...` : songData?.title}
                    </span>
                    <span className='text-primary-500'>{songData?.artistsNames}</span>
                </span>
            </div>
            <div className='flex items-center justify-center flex-1 text-primary-500'>
                {songData?.album?.title?.length > 30 ? `${songData?.album?.title?.slice(0, 30)}...` : songData?.album?.title}
            </div>
            <div className='flex items-center justify-end flex-1 text-primary-500'>
                {moment.utc(songData?.duration * 1000).format('mm:ss')}
            </div>
        </div>
    )
}

export default memo(ListSongItem)