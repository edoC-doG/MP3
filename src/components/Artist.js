import React, { memo, useState } from 'react'
import * as utils from "../utils/fn"
import { AiOutlineUserAdd } from 'react-icons/ai'


const Artist = ({ image, title, follwer, link }) => {
    const [isHover, setHover] = useState(false)
    return (
        <div className='w-1/5 flex flex-col gap-[15px]'>
            <div
                className='relative overflow-hidden rounded-full cursor-pointer'
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                <img src={image} alt="avatar" className={`w-full object-contain rounded-full ${isHover ? "animate-scale-up-image" : "animate-scale-down-image"}`} />
                {isHover && <div className='absolute top-0 left-0 right-0 bottom-0 bg-overlay-30 rounded-full'></div>}
            </div>
            <div className='flex flex-col items-center gap-1'>
                <span className='text-sm font-medium'>{title}</span>
                <span className='text-xs opacity-70'>{`${utils.handleNumber(follwer)} quan tâm`}</span>
                <button
                    type="button"
                    className='bg-primary-300 mt-3 px-4 py-2 text-sm rounded-l-full rounded-r-full flex items-center justify-center gap-1'
                >
                    <span><AiOutlineUserAdd /></span>
                    <span className='text-sm opacity-70'>Quan Tâm</span>
                </button>
            </div>
        </div>
    )
}

export default memo(Artist)