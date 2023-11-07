import React, { memo } from 'react'
import icons from '../utils/icons'
import moment from 'moment'
const { BsMusicNoteBeamed } = icons
const ListSongItem = (props) => {
    const { songData } = props
    return (
        <div className='flex justify-between items-center p-[10px]'>
            <div className='flex items-center gap-3 flex-1'>
                <span><BsMusicNoteBeamed /></span>
                <img
                    src={songData?.thumbnail}
                    alt="thumbnail"
                    className='w-10 h-10 object-cover rounded-md'
                />
                <span className='flex flex-col w-full'>
                    <span className='text-sm font-semibold'
                    >
                        {songData?.title?.length > 30 ? `${songData?.title?.slice(0, 30)}...` : songData?.title}
                    </span>
                    <span>{songData?.artistsNames}</span>
                </span>
            </div>
            <div className='flex items-center justify-center flex-1'>
                {songData?.album?.title}
            </div>
            <div className='flex items-center justify-end flex-1'>
                {moment.utc(songData?.duration * 1000).format('mm:ss')}
            </div>
        </div>
    )
}

export default memo(ListSongItem)