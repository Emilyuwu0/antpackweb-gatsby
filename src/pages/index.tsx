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

export default function Home() {

  const [menu, setMenu] = useState('white')
  // gsap.registerPlugin(ScrollTrigger);
  const main = useRef<any>(null)

  useEffect(() => {
    // gsap.set('.mainWrapper', { height: window.innerHeight, })

    // let sections = gsap.utils.toArray(".child");

    // gsap.to(sections, {
    //   yPercent: -90 * (sections.length - 1),
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".mainWrapper",
    //     pin: true,
    //     pinSpacing: true,
    //     scrub: 1,
    //     markers: true,
    //     snap: {
    //       snapTo: 1 / (sections.length - 1),
    //       duration: 1,
    //       delay: 0.1,
    //       ease: "power1.inOut"
    //     },
    //     // base vertical scrolling on how wide the container is so it feels more natural.
    //     end: window.innerHeight
    //   }
    // });


  }, [])



  return (
    <>
      <div onMouseEnter={() => setMenu('white')} className='child'>
        <Header color={menu} />
        <HeroSeccion />
      </div>
      <div onMouseEnter={() => setMenu('black')} className='child'>
        <VideoSeccion />
      </div>
      <div onMouseEnter={() => setMenu('white')} className='child'>
        <HomeCardsSeccion />
      </div>

      <div onMouseEnter={() => setMenu('black')} className='child'>
        <HomeBioSeccion />
      </div>

      <div onMouseEnter={() => setMenu('black')} className='child'>
        <SliderSection />
      </div>

      <div onMouseEnter={() => setMenu('white')} className='child'>
        <ApproachSeccion />
      </div>

      <div onMouseEnter={() => setMenu('black')} className='child'>
        <BrandsSeccion />
      </div>

      <div onMouseEnter={() => setMenu('white')} className='child'>
        <ContactSeccion />
      </div>

      <div className='child'>
        <Footer />
      </div>
    </>
  );
}
