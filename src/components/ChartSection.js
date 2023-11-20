import React, { memo, useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart } from 'chart.js/auto'
import { useSelector } from 'react-redux';

const ChartSection = () => {
    const [data, setData] = useState({})
    const { chart, rank } = useSelector(state => state.app)
    useEffect(() => {
        const labels = chart?.times?.filter(item => +item.hour % 2 === 0)?.map(item => item.hour)
        const datasets = []
        if (chart?.items) {
            for (let i = 0; i < 3; i++) {
                datasets.push({
                    data: chart?.items[Object.keys(chart?.items)[i]]?.filter(item => +item.hour % 2 === 0)?.map(item => item.counter)
                })
            }
            setData({ labels, datasets })
        }
    }, [chart])
    return (
        <div className='h-[375px] px-[59px] mt-12 relative   '>
            <div className=' bg-gradient-to-tr from-[rgba(65,15,101,0.95)] to-[#50259a] rounded-md absolute top-0 bottom-0 left-[59px] right-[59px]'></div>
            <div className='absolute z-10 top-0 bottom-0 left-[59px] right-[59px] p-5'>
                <h3 className='text-2xl text-white font-bold'>#zingchart</h3>
                <div className='flex gap-4'>
                    <div className='flex-4 border border-white'>
                        rank
                    </div>
                    <div className='flex-6 border border-white'>
                        <Line data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ChartSection)