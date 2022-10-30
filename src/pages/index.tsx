import '../styles/reset.scss'
import '../styles/globalStyle.scss'
import HeroSeccion from '@/components/organisms/heroSeccion/heroSeccion';
import DefaultLayout from '@/components/templates/defaultLayout/defaultLayout';
import VideoSeccion from '@/components/organisms/videoSeccion/videoSeccion';
import HomeCardsSeccion from '@/components/organisms/homeCardsSeccion/homeCardsSeccion';
import HomeBioSeccion from '@/components/organisms/homeBioSeccion/homeBioSeccion';
import SliderSection from '@/components/organisms/sliderSection/sliderSection';
import BrandsSeccion from '@/components/organisms/brandsSeccion/brandsSeccion';
import ContactSeccion from '@/components/organisms/contactSeccion/contactSeccion';
import ApproachSeccion from '@/components/organisms/approachSeccion/approachSeccion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import '../styles/home.scss'
import { useEffect, useRef, useState } from 'react';
import Footer from '@/components/organisms/footer/footer';
import Header from '@/components/organisms/header/header';
import useIsInViewport from '@/hooks/useIsInViewport';

export default function Home() {

  const [menu, setMenu] = useState('white')

  const container0 = useRef<any>(null)
  const container1 = useRef<any>(null)
  const container2 = useRef<any>(null)
  const container3 = useRef<any>(null)
  const container4 = useRef<any>(null)
  const container5 = useRef<any>(null)
  const container6 = useRef<any>(null)
  const container7 = useRef<any>(null)


  const isInViewport0 = useIsInViewport(container0);
  const isInViewport1 = useIsInViewport(container1);
  const isInViewport2 = useIsInViewport(container2);
  const isInViewport3 = useIsInViewport(container3);
  const isInViewport4 = useIsInViewport(container4);
  const isInViewport5 = useIsInViewport(container5);
  const isInViewport6 = useIsInViewport(container6);
  const isInViewport7 = useIsInViewport(container7);


  useEffect(() => {
    let currentView: string = ''

    if (isInViewport0 === true) {
      currentView = 'seccion0'
      // setCurrentView('seccion0')
      console.log('isInViewport0: ', isInViewport0);
    } else if (isInViewport1 === true) {
      currentView = 'seccion1'
      // setCurrentView('seccion1')
      console.log('isInViewport1: ', isInViewport1);
    } else if (isInViewport2 === true) {
      currentView = 'seccion2'
      // setCurrentView('seccion2')
      console.log('isInViewport2: ', isInViewport2);
    } else if (isInViewport3 === true) {
      currentView = 'seccion3'
      // setCurrentView('seccion3')
      console.log('isInViewport3: ', isInViewport3);
    } else if (isInViewport4 === true) {
      currentView = 'seccion4'
      // setCurrentView('seccion4')
      console.log('isInViewport4: ', isInViewport4);
    } else if (isInViewport5 === true) {
      currentView = 'seccion5'
      // setCurrentView('seccion5')
      console.log('isInViewport5: ', isInViewport5);
    } else if (isInViewport6 === true) {
      currentView = 'seccion6'
      // setCurrentView('seccion6')
      console.log('isInViewport6: ', isInViewport6);
    } else if (isInViewport7 === true) {
      currentView = 'seccion7'
      // setCurrentView('seccion7')
      console.log('isInViewport7: ', isInViewport7);
    }

    switch (currentView) {
      case 'seccion0':
        setMenu('white')
        console.log('0')
        break;

      case 'seccion1':
        setMenu('white')
        console.log('1')
        break;

      case 'seccion2':
        setMenu('white')
        console.log('2')
        break;

      case 'seccion3':
        setMenu('black')
        console.log('3')
        break;

      case 'seccion4':
        setMenu('white')
        console.log('4')
        break;

      case 'seccion5':
        setMenu('white')
        console.log('5')
        break;

      case 'seccion6':
        setMenu('black')
        console.log('6')
        break;

      case 'seccion7':
        setMenu('white')
        console.log('7')
        break;

      default:
        break;
    }

  }, [isInViewport0, isInViewport1, isInViewport2, isInViewport3, isInViewport4, isInViewport5, isInViewport6, isInViewport7])





  return (
    <div className='mainWrapper'>
      <Header color={menu} />
      <div ref={container0} className='child'>
        <HeroSeccion />
      </div>

      <div ref={container1} className='child'>
        <VideoSeccion />
      </div>

      <div ref={container2} id='services' className='child'>
        <HomeCardsSeccion />
      </div>

      <div ref={container3} id='company' className='child'>
        <HomeBioSeccion />
      </div>

      <div ref={container4} id='ourCraft' className='child'>
        <SliderSection />
      </div>

      <div ref={container5} className='child'>
        <ApproachSeccion />
      </div>

      <div ref={container6} className='child'>
        <BrandsSeccion />
      </div>

      <div ref={container7} id='contact' className='child'>
        <ContactSeccion />
      </div>

      <div className='child'>
        <Footer />
      </div>
    </div>
  );
}
