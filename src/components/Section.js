import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



const Section = () => {
    const { chill } = useSelector(state => state.app)
    const navigate = useNavigate()
    return (
        <div
            className='mt-12 px-[59px] flex flex-col gap-5 '
        >
            <div className='flex items-center justify-between'>
                <h3 className='text-[20px] font-bold '>{chill?.title}</h3>
                <span className='text-xs'>TẤT CẢ</span>
            </div>
            <div
                className='flex flex-wrap items-center justify-between gap-[28px] '
            >
                {chill && chill?.items?.length > 0 && chill.items.map((item) => (
                    <div
                        key={item.encodeId}
                        className='flex flex-col gap-3 w-1/6 flex-auto text-sm cursor-pointer'
                        onClick={() => {
                            navigate(item?.link?.split('.')[0])
                            console.log(item?.link?.split('.')[0])
                        }}
                    >
                        <img
                            src={item.thumbnailM}
                            alt="avatar"
                            className='w-full h-auto rounded-lg' />
                        <span className='flex flex-col'>
                            <span
                                className='font-semibold'
                            >
                                {item.title}
                            </span>
                            <span>
                                {`${item.sortDescription?.slice(0, 40)}...`}
                            </span>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default memo(Section)