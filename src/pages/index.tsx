import '../styles/reset.scss'
import '../styles/globalStyle.scss'
import HeroSeccion from '@/components/organisms/heroSeccion/heroSeccion';
import DefaultLayout from '@/components/templates/defaultLayout/defaultLayout';
import VideoSeccion from '@/components/organisms/videoSeccion/videoSeccion';
import HomeCardsSeccion from '@/components/organisms/homeCardsSeccion/homeCardsSeccion';
import HomeBioSeccion from '@/components/organisms/homeBioSeccion/homeBioSeccion';

export default function Home() {
  return (
    <DefaultLayout>
      <HeroSeccion title='hola mundo' />
      <VideoSeccion />
      <HomeCardsSeccion />
      <HomeBioSeccion />
    </DefaultLayout>
  );
}
