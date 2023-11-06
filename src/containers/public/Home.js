import React, { useEffect } from 'react';
import Header from '../../components/Header';
import * as apis from '../../apis';

const Home = () => {

  useEffect(() => {
    const fetchDataHome = async() =>  {
      const res = await apis.getHome()
      console.log(res)
    }

    fetchDataHome()

  }, [])

  return (
    <div className='overflow-y-auto'>
      <div className=' flex items-center h-[70px] px-[59px] '
      >
        <Header/>
      </div>
    </div>
  )
}

export default Home