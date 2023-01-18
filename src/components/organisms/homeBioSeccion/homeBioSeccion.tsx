import Paragraph from '@/components/atoms/paragraph/paragraph'
import Title from '@/components/atoms/title/title'
import React from 'react'
import Lottie from "lottie-react";
import BioAnim from "../../../assets/gift/Abstract.json";
import { useTranslation } from 'react-i18next';

import './HomeBioSeccion.scss'

export default function HomeBioSeccion() {
  const [t] = useTranslation('global')

  return (
    <div className='homeBioSeccionWrapper'>
      <div className='homeBioSeccionContainer'>
        <div className='infoWrapper'>
          <Title level='h1' titleClass='title' text={t('HomeBioSeccion.title')} />
          <Paragraph text={t('HomeBioSeccion.paragraph')} />
          <Lottie className='bioAnim' animationData={BioAnim} loop={true} />
        </div>
      </div>
    </div>
  )
}
