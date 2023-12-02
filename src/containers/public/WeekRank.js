import React from 'react'
import chartImage from "../../assets/imgs/chart-1.jpg"
import { NavLink, useParams } from 'react-router-dom'
import { Rank } from '../../components';
const notActiveStyle = "text-[24px] text-black py-[15px] font-semibold"
const activeStyle = "text-[24px] text-hover-600 py-[15px] font-semibold border-b-2 border-[#8D22C3]"

const WeekRank = ({ weekChart }) => {
    const { pid } = useParams()
    return (
        <div>
            {/* <img src={chartImage} alt="chart" className='w-full h-[500px] object-cover grayscale' />
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-[hsla(0,0%,100%,0.9)]'></div>
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-[#CED9D9] to-transparent'></div> */}
            <div className='flex flex-col gap-4 px-[60px]'>
                <h3 className='font-bold text-[40px] text-[#8D22C3]'>Bảng xếp hạng tuần</h3>
                <div className='flex gap-8'>
                    {weekChart?.map(item => (
                        <NavLink
                            to={item.link.split('.')[0]}
                            className={({ isActive }) => isActive ? activeStyle : notActiveStyle}
                            key={item.chartId}
                        >
                            {item.country === "vn" ? "VIỆT NAM" : item.country === "us" ? "US-UK" : item.country === "korea" ? "K-POP" : ""}
                        </NavLink>
                    ))}
                </div>
                <div className='pb-8 w-full'>
                    <Rank
                        data={weekChart?.find(item => item?.link?.includes(pid))?.items}
                        number={100}
                    />
                </div>
            </div>
        </div>
    )
}

export default WeekRank