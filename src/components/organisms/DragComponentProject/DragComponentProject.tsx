import { useEffect, useRef, useState } from 'react'
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";




import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import './DragComponentProject.scss'


SwiperCore.use([Navigation]);




const DragComponentProject = ({ data, over, out }: { data: any, over: any, out: any }) => {


  const [showSlider, setShowSlider] = useState<any>(null)
  const [showSliderMobile, setShowSliderMobile] = useState<any>(null)
  const [swiperRef, setSwiperRef] = useState<any>(null);

  console.log(data)


  const slideTo = (index: any) => {
    swiperRef.slideTo(index - 1, 0);
  };


  useEffect(() => {
    if (showSlider === null) {
      setTimeout(() => {
        setShowSlider(true)
        setShowSliderMobile(true)
      }, 1000);
    }
  }, [])



  return (
    <>
      {
        data
          ?
          <div style={{ backgroundColor: data.background_color }} className='dragComponentProjectContainer'>
            {
              showSlider
                ?
                <>
                  <Swiper
                    // onSwiper={setSwiperRef}
                    centeredSlides={true}
                    spaceBetween={80}
                    slidesPerView={'auto'}
                    loop={true}
                    className='swiperDesk'

                  >

                    {
                      data.data.map((item: any, index: number) => {
                        return (

                          <SwiperSlide
                            onMouseEnter={over} onMouseLeave={out}
                            key={`main${index}`}>
                            {item?.img}
                          </SwiperSlide>

                        )
                      })
                    }
                  </Swiper>
                </>
                : null
            }
            {
              showSliderMobile
                ?
                <>
                  <Swiper
                    onSwiper={setSwiperRef}
                    centeredSlides={true}
                    spaceBetween={70}
                    slidesPerView={'auto'}
                    loop={true}
                    className='swiperMobile'

                  >

                    {
                      data.data.map((item: any, index: number) => {
                        return (

                          <SwiperSlide
                            onMouseEnter={over} onMouseLeave={out}
                            key={`main${index}`}>
                            {item?.img}
                          </SwiperSlide>

                        )
                      })
                    }
                  </Swiper>
                </>
                : null
            }
          </div>
          : null
      }
    </>
  )
}

export default DragComponentProject