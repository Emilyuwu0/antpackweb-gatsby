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

export default function Home() {
  return (
    <DefaultLayout>
      <HeroSeccion />
      <VideoSeccion />
      <HomeCardsSeccion />
      <HomeBioSeccion />
      <SliderSection />
      <BrandsSeccion />
      <ContactSeccion />
    </DefaultLayout>
  );
}
