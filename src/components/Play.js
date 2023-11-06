import React from 'react'
import { useSelector } from 'react-redux'

const Play = () => {

    const { curSongId } = useSelector(state => state.music)
    return (
        <div className=' bg-primary-100 border border-primary-200 px-5 h-full flex'>
            <div className="w-[30%] flex-auto">
                Detai Song
            </div>
            <div className="w-[40%] flex-auto">
                play
            </div>
            <div className="w-[30%] flex-auto">
                Volumn
            </div>
        </div>
    )
}

export default Play