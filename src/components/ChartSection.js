import React, { memo, useEffect, useRef, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { Chart } from 'chart.js/auto'
import { useSelector } from 'react-redux';
import chartImage from "../assets/imgs/chart.png"
import { ItemSong } from './';
import _ from 'lodash';
const ChartSection = () => {
    const [data, setData] = useState(null)
    const { chart, rank } = useSelector(state => state.app)
    const chartRef = useRef()
    const [tooltipState, setTooltipState] = useState({
        opacity: 0,
        top: 0,
        left: 0
    })
    // const result = Array.isArray(rank)
    //     ? rank?.filter((i, idx) => idx < 3)
    //     : [];
    const result = Object.values(rank).filter((i, idx) => {
        return idx < 3;
    });
    const options = {
        responsive: true,
        pointRadius: 0,
        maintainAspectRatio: false,
        scales: {
            y: {
                ticks: { display: false },
                grid: { color: 'rgba(255,255,255,0.3)', drawTicks: false },
                min: chart?.minScore,
                max: chart?.maxScore,
                border: { dash: [4, 4] }
            },
            x: {
                ticks: { color: 'white' },
                grid: { color: 'transparent' },
            }
        },
        plugins: {
            legend: false,
            tooltip: {
                enabled: false,
                external: ({ tooltip }) => {
                    if (!chartRef || !chartRef.current) return
                    if (tooltip.opacity === 0) {
                        if (tooltipState.opacity !== 0) setTooltipState(prev => ({ ...prev, opacity: 0 }))
                    }
                    const newTooltipDate = {
                        opacity: 1,
                        left: tooltip.cateX,
                        top: tooltip.cateY,
                    }
                    if (!_.isEqual(tooltip, newTooltipDate)) setTooltipState(newTooltipDate)
                }
            }
        },
        hover: {
            mode: 'dataset',
            intersect: false,
        }
    }
    useEffect(() => {
        const labels = (chart?.times?.filter(item => + item.hour % 2 === 0)?.map((item) => `${item.hour}:00`) || [])
        const datasets = []
        if (chart?.items) {
            for (let i = 0; i < 3; i++) {
                datasets.push({
                    data: ((chart?.items[Object.keys(chart?.items)[i]]?.filter(item => + item.hour % 2 === 0)?.map((item) => item.counter)) || []),
                    borderColor: i === 0 ? '#4A90E2' : i === 1 ? '#E14F50' : '#28B99A',
                    tension: 0.2,
                    borderWidth: 2,
                    pointBackgroundColor: 'white',
                    pointHoverRadius: 3,
                    pointBorderColor: i === 0 ? '#4A90E2' : i === 1 ? '#E14F50' : '#28B99A',
                    pointHoverBorderWidth: 3
                })
            }
            setData({ labels, datasets })
        }
    }, [chart])
    return (
        <div className=' px-[59px] mt-12 relative max-h-[430px]'>
            <img src={chartImage} alt="" className='w-full object-cover rounded-md max-h-[430px]' />
            <div className='absolute rounded-md top-0 bottom-0 left-[59px] right-[59px] z-10 bg-gradient-to-tr from-[rgba(65,15,101,0.95)] to-[#b122b9] '></div>
            <div className='absolute z-20 top-0 bottom-0 left-[59px] right-[59px] p-5 flex flex-col gap-8'>
                <h3 className='text-2xl text-white font-bold'>#zingchart</h3>
                <div className='flex gap-4 h-full'>
                    <div className='flex-3 flex flex-col h-[10%] gap-4'>
                        {result?.map((item, index) => (
                            <ItemSong
                                thumbnail={item.thumbnail}
                                artists={item.artistsNames}
                                title={item.title}
                                sid={item.encodeId}
                                order={index + 1}
                                percent={Math.round(+item.score * 100 / chart?.totalScore)}
                            />
                        ))}
                    </div>
                    <div className='flex-7 h-[90%] '>
                        {data && (<Line ref={chartRef} data={data} options={options} />)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(ChartSection)