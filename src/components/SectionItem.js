import React, { memo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import icons from '../utils/icons';


const { AiOutlineHeart, BsFillPlayFill, PiDotsThreeBold } = icons

const SectionItem = ({ link, thumbnailM, title, sortDescription, artistsNames, data }) => {
    const navigate = useNavigate()
    const [isHover, setIsHover] = useState(false)
    const imageRef = useRef()
    const handleMouse = () => {
        setIsHover(true)
        imageRef.current.classList?.remove('animate-scale-down-image')
        imageRef.current.classList?.add('animate-scale-up-image')
    }
    const handleMove = () => {
        setIsHover(false)
        imageRef.current.classList?.remove('animate-scale-up-image')
        imageRef.current.classList?.add('animate-scale-down-image')
    }
    return (
        <div
            className='flex flex-col justify-start gap-3 flex-1 p-4 text-sm cursor-pointer'
            onClick={() => {
                navigate(link?.split('.')[0], { state: { playAlbum: false } })
            }}
        >
            <div
                onMouseEnter={handleMouse}
                onMouseLeave={handleMove}
                className=" w-full relative overflow-hidden rounded-lg "
            >
                {isHover && <div className=' flex items-center justify-center gap-2 absolute top-0 bottom-0 left-0 right-0 z-40 bg-overlay-30 text-white rounded-lg '  >
                    <span><AiOutlineHeart size={25} /></span>
                    <span>
                        <BsFillPlayFill
                            className='p-1 border border-white rounded-full' size={35}
                            onClick={(e) => {
                                e.stopPropagation()
                                navigate(link?.split('.')[0], { state: { playAlbum: true } })
                            }}
                        />
                    </span>
                    <span><PiDotsThreeBold size={25} /></span>
                </div>}
                <img
                    ref={imageRef}
                    src={thumbnailM}
                    alt="avatar"
                    className='w-full h-auto rounded-lg'
                />
            </div>
            <span className='flex flex-col'>
                <span className='font-semibold'>
                    {title?.length > 30 ? title?.slice(0, 30) + "..." : title}
                </span>
                {(data?.sectionId === 'h100' || data?.sectionId === 'hAlbum')
                    ? <span>{artistsNames}</span>
                    : <span>
                        {sortDescription?.length >= 60 ? `${sortDescription?.slice(0, 60)}...` : sortDescription}
                    </span>
                }
            </span>
        </div>
    )
}

export default memo(SectionItem)