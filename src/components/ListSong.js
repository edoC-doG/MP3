import React, { memo } from 'react'
import { ListSongItem } from "../components";
import icons from '../utils/icons';
import moment from 'moment';
import { useSelector } from 'react-redux';

const { BsDot } = icons

const ListSong = (props) => {
    const { totalDuration, isHideTime, isHideNode } = props;
    const { songs } = useSelector(state => state.music)
    return (
        <div className='w-full flex flex-col text-xs '>
            <div className=' flex justify-between items-center p-[10px] font-semibold text-gray-500 border-b border-[#F8F8F8]'>
                {<span className={`${isHideNode === 'false' ? "font-bold text-lg" : ""}`}>BÀI HÁT</span>}
                {!isHideTime && <span>ALBUM</span>}
                {!isHideTime && <span>THỜI GIAN</span>}
            </div>
            <div className='flex flex-col'>
                {songs?.map((item) => (
                    <ListSongItem key={item.encodeId} songData={item} isHideNode={true} />
                ))}
            </div>
            {totalDuration && <span className='flex items-center gap-1 text-primary-500'>
                <span>{`${songs?.length} bài hát`}</span>
                <BsDot size={24} />
                <span>{moment.utc(totalDuration * 1000).format('HH:mm:ss')}</span>
            </span>}
        </div>
    )
}

export default memo(ListSong)