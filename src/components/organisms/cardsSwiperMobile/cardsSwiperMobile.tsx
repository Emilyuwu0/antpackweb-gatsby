import React, { useEffect, useState } from 'react'


import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import './CardsSwiperMobile.scss'

import SwiperCore, {
  Pagination,
  Navigation
} from 'swiper';

SwiperCore.use([Pagination, Navigation]);

interface cardsSwiperMobileProps {
  data: any
}

export default function CardsSwiperMobile({ data }: cardsSwiperMobileProps) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setShow(true)
    }, 4000);

  }, [])
  return (
    <>
      {show ?
        <Swiper
          spaceBetween={0}
          slidesPerView={'auto'}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          className={`ReviewsSwiper`}
        >
          {
            data.map((item: any) => (

              <SwiperSlide>
                {item}
              </SwiperSlide>
            ))
          }
        </Swiper>
        : <></>
      }
    </>
  )
}