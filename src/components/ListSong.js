import React from 'react'
import { ListSongItem } from "../components";
const ListSong = (props) => {
    const { songList, totalDuration } = props
    return (
        <div className='w-full flex flex-col text-xs '>
            <div className=' flex justify-between items-center p-[10px] font-semibold text-gray-500'>
                <span>BÀI HÁT</span>
                <span>ALBUM</span>
                <span>THỜI GIAN</span>
            </div>
            <div className='flex flex-col'>
                {songList?.map((item) => (
                    <ListSongItem key={item.encodeId} songData={item} />
                ))}
            </div>
        </div>
    )
}

export default ListSong