import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import * as apis from "../apis"
import icons from '../utils/icons'
const Play = () => {
    const { AiOutlineHeart, PiDotsThreeBold } = icons
    const { curSongId } = useSelector(state => state.music)
    const [songInfo, setSong] = useState(null)
    useEffect(() => {
        const fetchSongDetail = async () => {
            const res = await apis.getSongDetail(curSongId)
            if (res.data.err === 0) {
                setSong(res.data.data)
            }
        }
        fetchSongDetail()
    }, [curSongId])
    return (
        <div className=' bg-primary-100 border border-primary-200 px-5 h-full flex'>
            <div className="w-[30%] flex-auto flex items-center">
                <img src={songInfo?.thumbnail} alt="Hình ảnh bài hát" className='w-16 h-16 object-cover rounded-md mr-[10px]' />
                <div className='flex flex-col'>
                    <span className='font-semibold text-sm'>{songInfo?.title}</span>
                    <h3 className='text-primary-500 text-xs'>{songInfo?.artistsNames}</h3>
                </div>
                <div className='flex ml-[10px]'>
                    <span className='p-2'><AiOutlineHeart size={16} /></span>
                    <span className='p-2'><PiDotsThreeBold size={16} /></span>
                </div>
            </div>
            <div className="w-[40%] flex-auto">
                play
            </div>
            <div className="w-[30%] flex-auto">
                Volumn
            </div>
        </div>
    )
}

export default Play