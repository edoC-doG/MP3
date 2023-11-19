import React, { memo } from 'react'
import { Triangle } from 'react-loader-spinner'

const Loading = () => {
    return (
        <Triangle
            height="80"
            width="80"
            color="#9F49CA"
            ariaLabel='triangle-loading'
            wrapperClass=''
            wrapperStyle={{}}
            visible
        />
    )
}

export default memo(Loading)