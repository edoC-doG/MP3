import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getArrSlider } from '../utils/fn'

const Slider = () => {
  const { banner } = useSelector(state => state.app)
  useEffect(() => {
    const sliderEls = document.getElementsByClassName("slider-item");
    let min = 0;
    let max = 2;
    const intervalId = setInterval(() => {
      const list = getArrSlider(min, max, sliderEls.length - 1);
      for (let i = 0; i < sliderEls.length; i++) {
        //DELETE 
        sliderEls[i].classList.remove("animate-slide-right", "order-last", "z-20")
        sliderEls[i].classList.remove("animate-slide-left", "order-first", "z-10")
        sliderEls[i].classList.remove("animate-slide-left-2", "order-2", "z-10")

        // HIDE
        list.some(item => item === i)
          ? sliderEls[i].style.cssText = `display: block`
          : sliderEls[i].style.cssText = `display: none`

      }
      // ADD ANIMATION BY ADDING CLASS
      list.forEach(item => {
        if (item === max) {
          sliderEls[item].classList.add("animate-slide-right", "order-last", "z-20")
        } else if (item === min) {
          sliderEls[item].classList.add("animate-slide-left", "order-first", "z-10")
        } else {
          sliderEls[item].classList.add("animate-slide-left-2", "order-2", "z-10")
        }
      })
      min = (min === sliderEls.length - 1) ? 0 : min + 1;
      max = (max === sliderEls.length - 1) ? 0 : max + 1;
    }, 300)
    return () => {
      intervalId && clearInterval(intervalId)
    }
  }, [])

  return (
    <div className=' w-full overflow-hidden px-[59px]'>
      <div className='flex gap-8 w-full pt-8'>
        {banner?.map((item, index) => (
          <img
            src={item.banner}
            key={item.encodeId}
            className={`slider-item flex-1 object-contain w-[30%] rounded-lg ${index <= 2 ? "block" : "hidden"}`}
            alt="Song" />
        ))}
      </div>
    </div>
  )
}

export default Slider