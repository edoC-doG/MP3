import React, { useEffect, useRef, useState } from 'react'
import { apiGetChartHome } from '../../apis/Music'
import { Line } from 'react-chartjs-2'
import { Chart } from 'chart.js/auto'
import chartImage from "../../assets/imgs/chart-1.jpg"
import { ItemSong, Rank } from '../../components';
import _ from 'lodash';
const ZingChart = () => {

    const [chartData, setChartData] = useState(null)
    const [data, setData] = useState(null)
    const [select, setSelect] = useState(null)

    const chartRef = useRef()
    const [tooltipState, setTooltipState] = useState({
        opacity: 0,
        top: 0,
        left: 0
    })
    const hoverChart = Array.isArray(chartData?.RTChart?.items)
        ? chartData?.RTChart?.items?.find(i => i.encodeId === select)
        : [];
    const options = {
        responsive: true,
        pointRadius: 0,
        maintainAspectRatio: false,
        scales: {
            y: {
                ticks: { display: false },
                grid: { color: 'rgba(0,0,0,0.2)', drawTicks: false },
                min: chartData?.RTChart?.chart?.minScore,
                max: chartData?.RTChart?.chart?.maxScore,
                border: { dash: [2, 4] }
            },
            x: {
                ticks: { color: 'gray' },
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
                    const counters = []
                    for (let i = 0; i < 3; i++) {
                        counters.push({
                            data: chartData?.RTChart?.chart?.items[Object.keys(chartData?.RTChart?.chart?.items)[i]]?.filter(item => + item.hour % 2 === 0)?.map((item) => item.counter),
                            encodeId: Object.keys(chartData?.RTChart?.chart?.items)[i]
                        })
                    }
                    const rs = counters.find(i => i.data.some(n => n === ((+tooltip.body[0] || [])?.lines[0] || [])?.replace(',', '')))
                    setSelect(rs.encodeId)
                    const newTooltipDate = {
                        opacity: 1,
                        left: tooltip.caretX,
                        top: tooltip.caretY,
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
        const fetchChartData = async () => {
            const res = await apiGetChartHome()
            if (res.data.err === 0) setChartData(res.data.data)
        }
        fetchChartData()
    }, [])
    useEffect(() => {
        const labels = (chartData?.RTChart?.chart?.times?.filter(item => + item.hour % 2 === 0)?.map((item) => `${item.hour}:00`) || [])
        const datasets = []
        if (chartData?.RTChart?.chart?.items) {
            for (let i = 0; i < 3; i++) {
                datasets.push({
                    data: ((chartData?.RTChart?.chart?.items[Object.keys(chartData?.RTChart?.chart?.items)[i]]?.filter(item => + item.hour % 2 === 0)?.map((item) => item.counter)) || []),
                    borderColor: i === 0 ? '#4A90E2' : i === 1 ? '#E14F50' : '#28B99A',
                    tension: 0.2,
                    borderWidth: 2,
                    pointBackgroundColor: 'white',
                    pointHoverRadius: 4,
                    pointBorderColor: i === 0 ? '#4A90E2' : i === 1 ? '#E14F50' : '#28B99A',
                    pointHoverBorderWidth: 5
                })
            }
            setData({ labels, datasets })
        }
    }, [chartData])
    return (
        <div className=''>
            <div className='flex flex-col'>
                <div className='relative w-full h-[500px]'>
                    <div className='absolute top-0 left-0 right-0 bottom-1/2 bg-primary-100'></div>
                    <div className='absolute top-0 left-0 right-0 flex items-center px-[60px] mt-[40px]'>
                        <h3 className='font-bold text-[40px] text-[#8D22C3]'>#zingchart</h3>
                    </div>
                    <div className='absolute top-1/3 left-0 right-0 bottom-0 px-[60px]'>
                        {data && (<Line ref={chartRef} data={data} options={options} />)}
                        <div className='tooltip' style={{ top: tooltipState.top, left: tooltipState.left, opacity: tooltipState.opacity, position: 'absolute' }}>
                            <ItemSong
                                key={hoverChart?.encodeId}
                                thumbnail={hoverChart?.thumbnail}
                                artists={hoverChart?.artistsNames}
                                title={hoverChart?.title}
                                sid={hoverChart?.encodeId}
                                style='bg-white'
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='px-[60px] mt-12'>
                <Rank data={chartData?.RTChart?.items} number={10} />
            </div>
            <div className='relative'>
                <img src={chartImage} alt="chart" className='w-full h-[650px] object-cover grayscale' />
                <div className='absolute top-0 left-0 right-0 bottom-0 bg-[hsla(0,0%,100%,0.9)]'></div>
                <div className='absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-[#CED9D9] to-transparent'></div>
                <div className='absolute top-0 left-0 right-0 bottom-1/2 flex flex-col gap-4 mt-8 px-[60px]'>
                    <h3 className='font-bold text-[40px] text-[#8D22C3]'>Bảng xếp hạng tuần</h3>
                    <div className='flex gap-4 h-fit'>
                        {chartData?.weekChart && Object.entries(chartData?.weekChart)?.map((item, idx) => (
                            <div className='flex-1 bg-[hsla(0,0%,100%,0.5)] rounded-md px-[10px] py-5 ' key={idx}>
                                <h3 className='text-[24px] text-[#8D22C3] font-bold'>{(item[0] || []) === "vn" ? "Việt Nam" : (item[0] || []) === "us" ? "US-UK" : (item[0] || []) === "korea" ? "K-Pop" : ""}</h3>
                                <div className='mt-4'>
                                    <Rank
                                        data={(item[1] || [])?.items}
                                        isHideAlbum={true}
                                        number={5}
                                        link={(item[1] || [])?.link}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='w-full h-[150px]'>

            </div>
        </div>
    )
}

export default ZingChart