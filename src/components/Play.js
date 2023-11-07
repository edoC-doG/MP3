import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import * as apis from "../apis"
import icons from '../utils/icons'
import MainPlay from './MainPlay'
const Play = () => {
    const audioEl = new Audio()
    const { AiOutlineHeart, PiDotsThreeBold } = icons
    const { curSongId, isPlaying } = useSelector(state => state.music)
    const [songInfo, setSong] = useState(null)
    const [course, setCourse] = useState(null)
    useEffect(() => {
        const fetchSongDetail = async () => {
            const [res1, res2] = await Promise.all([
                apis.apiGetSongDetail(curSongId),
                apis.apiGetSong(curSongId)
            ])
            if (res1.data.err === 0) {
                setSong(res1.data.data)
            }
            if (res2.data.err === 0) {
                setCourse(res2.data.data)
            }
        }
        fetchSongDetail()
    }, [curSongId])

    useEffect(() => {
        // audioEl.play()
    })

    return (
        <div className=' bg-primary-100 border border-primary-200 px-5 h-full flex '>
            <div className="w-[30%] flex-auto flex items-center">
                <img src={songInfo?.thumbnail} alt="Hình ảnh bài hát" className='w-16 h-16 object-cover rounded-md mr-[10px]' />
                <div className='flex flex-col'>
                    <span className='font-semibold text-sm'>{songInfo?.title || "Tên bài hát"}</span>
                    <h3 className='text-primary-500 text-xs'>{songInfo?.artistsNames || "Tên Nghệ sĩ"}</h3>
                </div>
                <div className='flex ml-[10px]'>
                    <span className='p-2'><AiOutlineHeart size={16} /></span>
                    <span className='p-2'><PiDotsThreeBold size={16} /></span>
                </div>
            </div>
            <div className="w-[40%] flex-auto flex items-center justify-center gap-4 py-2">
                <MainPlay curSongId={curSongId} isPlaying={isPlaying} />
            </div>
            <div className="w-[30%] flex-auto">
                Volumn
            </div>
        </div>
    )
}

export default Play