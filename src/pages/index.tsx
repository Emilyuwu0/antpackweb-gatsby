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

import '../styles/home.scss'

export default function Home() {
  return (
    <DefaultLayout>
      <main className='mainWrapper'>
        <div className='child'>
          <HeroSeccion />
        </div>
        <div className='child'>
          <VideoSeccion />
        </div>
        <div className='child'>
          <HomeCardsSeccion />
        </div>

        <div className='child'>
          <HomeBioSeccion />
        </div>

        <div className='child'>
          <SliderSection />
        </div>

        <div className='child'>
          <ApproachSeccion />
        </div>

        <div className='child'>
          <BrandsSeccion />
        </div>

        <div className='child'>
          <ContactSeccion />
        </div>
      </main>
    </DefaultLayout>
  );
}
