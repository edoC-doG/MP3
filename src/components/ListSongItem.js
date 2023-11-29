import React, { memo } from 'react'
import icons from '../utils/icons'
import moment from 'moment'
import * as actions from '../store/actions'
import { useDispatch } from 'react-redux'


const { BsMusicNoteBeamed } = icons

const ListSongItem = ({ songData, isHideAlbum }) => {
    const id = songData?.encodeId
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(actions.getMusicCur(id))
        dispatch(actions.playMusic(true))
        dispatch(actions.playAlbum(true))
        dispatch(actions.setRecent({ thumbnail: songData?.thumbnail, title: songData?.title, sid: songData?.sid, artists: songData?.artistsNames }))
    }
    return (
        <div
            className='flex justify-between items-center p-[10px] border-b border-[#F8F8F8] hover:bg-primary-300 cursor-pointer'
            onClick={() => handleClick()}
        >
            <div className='flex items-center gap-3 flex-1'>
                {!isHideAlbum && <span><BsMusicNoteBeamed /></span>}
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
                    <span className='text-primary-500 text-xs'>{songData?.artistsNames}</span>
                </span>
            </div>
            {!isHideAlbum && <div className='flex items-center justify-center flex-1 text-primary-500'>
                {songData?.album?.title?.length > 30 ? `${songData?.album?.title?.slice(0, 30)}...` : songData?.album?.title}
            </div>}
            <div className='flex items-center justify-end flex-1 text-primary-500 text-xs'>
                {moment.utc(songData?.duration * 1000).format('mm:ss')}
            </div>
        </div>
    )
}

export default memo(ListSongItem)