import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './sliderSection.scss';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import { StaticImage } from 'gatsby-plugin-image';

import SwiperCore, {
  Pagination,
  Navigation,
  Autoplay,
  Mousewheel,
  Parallax,
} from 'swiper';
import SliderInfo from '@/components/molecules/sliderInfo/sliderInfo';
import useWindowDimensions from '../../../hooks/UseWindowDimensions';
import { useTranslation } from 'react-i18next';

SwiperCore.use([Pagination, Navigation, Mousewheel, Autoplay]);

export default function SliderSection() {
  const { height, width } = useWindowDimensions();

  const [t] = useTranslation('global');

  const defaultData = [t('SliderSection.platform'), t('SliderSection.website')];
  const mubico = [t('SliderSection.platform'), t('SliderSection.metaverse')];
  return (
    <div className="bannerSliderWrapper">
      {width <= 500 ? (
        <Swiper
          className="banner_slider_container"
          direction={'vertical'}
          // preventInteractionOnTransition
          grabCursor={false}
          freeMode={false}
          loop
          autoplay={{
            delay: 4000,
          }}
          allowTouchMove={false}
          onSliderMove={() => console.log('movee')}
          // onSlideChange={() => alert('slide change')}
          onSlideChangeTransitionStart={(e) => {
            console.log(e);
            let currentImage: any = document.querySelector('.backgroundImage');
            if (e.activeIndex === 0) {
              currentImage.style.scale = 1;
            } else {
              currentImage.style.scale = 2;
            }
            // console.log(currentImage)
          }}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide className="bannerSlider">
            <SliderInfo
              date="2022"
              name="mubicoWhite"
              colorText="white"
              categories={mubico}
            />
            <SliderInfo
              date="2022"
              name="mubicoWhite"
              colorText="white"
              categories={mubico}
            />
            <StaticImage
              src="../../../assets/images/sliderImages/mubicoScreen.jpg"
              alt="A dinosaur"
              placeholder="blurred"
              className="backgroundImage"
            />
          </SwiperSlide>

          <SwiperSlide className="bannerSlider">
            <SliderInfo
              date="2022"
              name="hbo"
              colorText="white"
              categories={defaultData}
            />
            <StaticImage
              src="../../../assets/images/sliderImages/hboScreen.jpg"
              alt="A dinosaur"
              placeholder="blurred"
              className="backgroundImage"
            />
          </SwiperSlide>

          <SwiperSlide className="bannerSlider">
            <SliderInfo
              date="2022"
              name="verdi"
              colorText="white"
              categories={defaultData}
            />
            <StaticImage
              src="../../../assets/images/sliderImages/verdiScreen.jpg"
              alt="A dinosaur"
              placeholder="blurred"
              className="backgroundImage"
            />
          </SwiperSlide>

          <SwiperSlide className="bannerSlider">
            <SliderInfo
              date="2022"
              name="siigo"
              colorText="white"
              categories={defaultData}
            />
            <StaticImage
              src="../../../assets/images/sliderImages/sigoScreen.jpg"
              alt="A dinosaur"
              placeholder="blurred"
              className="backgroundImage"
            />
          </SwiperSlide>
        </Swiper>
      ) : (
        <Swiper
          className="banner_slider_container"
          direction={'vertical'}
          mousewheel={{
            releaseOnEdges: true,
            forceToAxis: true,
          }}
          // preventInteractionOnTransition
          grabCursor={false}
          freeMode={false}
          allowTouchMove={true}
          onSliderMove={() => console.log('movee')}
          // onSlideChange={() => alert('slide change')}
          onSlideChangeTransitionStart={(e) => {
            console.log(e);
            let currentImage: any = document.querySelector('.backgroundImage');
            if (e.activeIndex === 0) {
              currentImage.style.scale = 1;
            } else {
              currentImage.style.scale = 2;
            }
            // console.log(currentImage)
          }}
          pagination={{
            clickable: true,
          }}
        >
          <SwiperSlide className="bannerSlider">
            <SliderInfo
              date="2022"
              name="mubico"
              colorText="black"
              categories={mubico}
            />

            <StaticImage
              src="../../../assets/images/sliderImages/mubicoScreen.jpg"
              alt="A dinosaur"
              placeholder="blurred"
              className="backgroundImage"
            />
          </SwiperSlide>

          <SwiperSlide className="bannerSlider">
            <SliderInfo
              date="2022"
              name="hbo"
              colorText="white"
              categories={defaultData}
            />
            <StaticImage
              src="../../../assets/images/sliderImages/hboScreen.jpg"
              alt="A dinosaur"
              placeholder="blurred"
              className="backgroundImage"
            />
          </SwiperSlide>

          <SwiperSlide className="bannerSlider">
            <SliderInfo
              date="2022"
              name="verdi"
              colorText="white"
              categories={defaultData}
            />
            <StaticImage
              src="../../../assets/images/sliderImages/verdiScreen.jpg"
              alt="A dinosaur"
              placeholder="blurred"
              className="backgroundImage"
            />
          </SwiperSlide>

          <SwiperSlide className="bannerSlider">
            <SliderInfo
              date="2022"
              name="siigo"
              colorText="white"
              categories={defaultData}
            />
            <StaticImage
              src="../../../assets/images/sliderImages/sigoScreen.jpg"
              alt="A dinosaur"
              placeholder="blurred"
              className="backgroundImage"
            />
          </SwiperSlide>
        </Swiper>
      )}
    </div>
  );
}
