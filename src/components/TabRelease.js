import React, { memo } from 'react'

const TabRelease = ({ text, style }) => {
    return (
        <button
            type="button"
            className={style ? style : 'py-1 px-4 rounded-r-full rounded-l-full bg-transparent'}
        >
            {text}
        </button>
    )
}

export default memo(TabRelease)