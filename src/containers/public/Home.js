import React, { useEffect } from 'react';
import { Header, Slider } from '../../components';
import * as apis from '../../apis';


const Home = () => {


  return (
    <div className='overflow-y-auto w-full'>
      <div className=' flex items-center h-[70px] px-[59px] w-full '
      >
        <Header />
      </div>
      <Slider />
    </div>
  )
}

export default Home