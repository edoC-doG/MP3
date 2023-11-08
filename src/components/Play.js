import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as apis from "../apis"
import icons from '../utils/icons'
import * as actions from '../store/actions'
import moment from 'moment'


const { AiOutlineHeart, PiDotsThreeBold, MdSkipNext, MdSkipPrevious, CiRepeat, CiShuffle, BsFillPlayFill, BsPauseFill } = icons
var intervalId
const Play = () => {
    const dispatch = useDispatch()
    const { curSongId, isPlaying } = useSelector(state => state.music)
    const [songInfo, setSong] = useState(null)
    const [audio, setAudio] = useState(new Audio())
    const [curSeconds, setCurrent] = useState(0)
    const thumbRef = useRef()

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
                audio.pause()
                setAudio(new Audio(res2.data.data[`128`]))
            }
        }
        fetchSongDetail()
    }, [curSongId])

    useEffect(() => {
        if (isPlaying) {
            intervalId = setInterval(() => {
                let percent = Math.round(audio.currentTime * 10000 / songInfo.duration) / 100
                thumbRef.current.style.cssText = `right:${100 - percent}%`
                setCurrent(Math.round(audio.currentTime))
            }, 100)
        } else {
            intervalId && clearInterval(intervalId)
        }
    }, [isPlaying])

    useEffect(() => {
        audio.load()
        if (isPlaying) audio.play()
    }, [audio])

    const handlePlay = async () => {
        if (isPlaying) {
            audio.pause()
            dispatch(actions.playMusic(false))
        } else {
            audio.play()
            dispatch(actions.playMusic(true))
        }
    }

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
            <div className="w-[40%] flex-auto flex flex-col items-center justify-center gap-1 py-2">
                <div className='flex  gap-8 justify-center items-center'>
                    <span className='cursor-pointer' title='Bật phát ngẫu nhiên'>
                        <CiShuffle size={20} />
                    </span>
                    <span className='cursor-pointer'>
                        <MdSkipPrevious size={20} />
                    </span>
                    <span className='p-1 border border-black rounded-full hover:text-hover-600 hover:border-hover-600 cursor-pointer'
                        onClick={handlePlay}
                    >
                        {isPlaying === true ? <BsPauseFill size={24} /> : <BsFillPlayFill size={24} />}
                    </span>
                    <span className='cursor-pointer'>
                        <MdSkipNext size={20} />
                    </span>
                    <span className='cursor-pointer' title='Bật phát lại tất cả'>
                        <CiRepeat size={20} />
                    </span>
                </div>
                <div className='w-full flex items-center justify-center gap-1 text-xs gap-3 '>
                    <span className='text-[#98989E]'>{moment.utc(curSeconds * 1000).format('mm:ss')}</span>
                    <div className='w-4/5 h-[3px] relative bg-[#E5E5E5] rounded-sm'>
                        <div ref={thumbRef} className='absolute top-0 left-0 h-[3px] bg-[#8D22C3] rounded-sm'></div>
                    </div>
                    <span className='text-[#32323D]'>{moment.utc(songInfo?.duration * 1000).format('mm:ss')}</span>
                </div>
            </div>
            <div className="w-[30%] flex-auto">
                Volumn
            </div>
        </div>
    )
}

export default Play