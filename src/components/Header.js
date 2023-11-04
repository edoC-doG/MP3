import React from 'react'
import icons from '../utils/icons'

const { AiOutlineArrowLeft, AiOutlineArrowRight } = icons

const Header = () => {
  return (
    <div className='flex justify-between w-full'>
      <div class="flex">
        <div className='flex '>
          <span><AiOutlineArrowLeft size={24}/></span>
          <span> <AiOutlineArrowRight size={24}/></span>
        </div>
        <div className=''>
          SEARCH
        </div>
      </div>
      <div className=''>
        Action Header
      </div>
    </div>
  )
}

export default Header