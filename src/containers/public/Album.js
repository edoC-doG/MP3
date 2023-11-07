import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import * as apis from "../../apis"
import moment from 'moment'
import { ListSong } from '../../components'

const Album = () => {

    const { pid } = useParams()
    const [playData, setPlayData] = useState({})
    useEffect(() => {
        const fetchPlayListDetail = async () => {
            const res = await apis.apiGetDetailPlayList(pid)
            if (res?.data.err === 0) {
                setPlayData(res.data?.data)
            }
        }

        fetchPlayListDetail()
    }, [pid])
    return (
        <div className='flex gap-8 w-full px-[59px]'>
            <div className=' flex-none w-1/4 flex flex-col items-center gap-2   '>
                <img
                    src={playData?.thumbnailM}
                    alt="Hình ảnh bài hát"
                    className='w-full object-cover rounded-md shadow-md'
                />
                <div className='flex-col flex  items-center'>
                    <h3 className='text-[20px] font-bold text-gray-800'>{playData?.title}</h3>
                    <span className='flex gap-2 items-center text-primary-500 text-xs pb-1'>
                        <span>Cập nhật:</span>
                        <p>{moment.unix(playData?.contentLastUpdate).format("DD/MM/YYYY")}</p>
                    </span>
                    <span className='flex items-center text-primary-500 text-xs pb-1'>{playData?.artistsNames}</span>
                    <span className='flex items-center text-primary-500 text-xs'>{`${Math.round(playData?.like / 1000)}K người yêu thích`}</span>
                </div>
            </div>
            <div className='flex-auto'>
                <span className='text-sm'>
                    <span className='text-gray-500'>Lời tựa </span>
                    <span>{playData?.sortDescription}</span>
                </span>
                <ListSong songList={playData.song?.items} totalDuration={playData.song?.totalDuration} />
            </div>
        </div>
    )
}

export default Album