import React, { useState } from 'react'
import icons from '../utils/icons'

const { ImBin } = icons

const SidebarRight = () => {
    const [isRecent, setIsRecent] = useState(false)
    return (
        <div className='flex flex-col text-xs w-full'>
            <div className='h-[70px] w-full flex-none py-[14px] px-2 gap-8 flex justify-between items-center'>
                <div className='flex flex-auto justify-center bg-primary-200 rounded-l-full rounded-r-full py-[6px] px[6px] cursor-pointer'>
                    <span className={`py-[5px] ${!isRecent && 'bg-primary-200'}`}>Danh Sach</span>
                    <span className={`py-[5px] ${!isRecent && 'bg-primary-200'}`}>Nghe Gan day</span>
                </div>
                <span><ImBin size={14} /></span>
            </div>
            <div>
                body
            </div>
        </div>
    )
}

export default SidebarRight