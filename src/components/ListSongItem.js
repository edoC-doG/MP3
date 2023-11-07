import React from 'react'

const ListSongItem = (props) => {
    const { songData } = props
    return (
        <div className='flex justify-between items-center'>
            <div>
                info
            </div>
            <div>
                album
            </div>
            <div>
                time
            </div>
        </div>
    )
}

export default ListSongItem