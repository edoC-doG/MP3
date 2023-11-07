import React, { useState } from 'react'
import * as apis from "../apis"
import icons from '../utils/icons'


const MainPlay = (props) => {
    const { curSongId, isPlaying } = props
    const { MdSkipNext, MdSkipPrevious, CiRepeat, CiShuffle, BsFillPlayFill, BsPauseFill } = icons

    const handlePlay = () => {

    }

    return (
        <div className=''
        >
            <div className='flex gap-8 justify-center items-center'>
                <span className='cursor-pointer' title='Bật phát ngẫu nhiên'>
                    <CiShuffle size={20} />
                </span>
                <span className='cursor-pointer'>
                    <MdSkipPrevious size={20} />
                </span>
                <span className='p-1 border border-black rounded-full
                 hover:text-hover-600 hover:border-hover-600 cursor-pointer'
                    onClick={handlePlay}
                >
                    {isPlaying ? <BsFillPlayFill size={24} /> : <BsPauseFill size={24} />}
                </span>
                <span className='cursor-pointer'>
                    <MdSkipNext size={20} />
                </span>
                <span className='cursor-pointer' title='Bật phát lại tất cả'>
                    <CiRepeat size={20} />
                </span>
            </div>
            <div className='flex justify-center items-center'>
                Thanh Chạy
            </div>
        </div>
    )
}

export default MainPlay