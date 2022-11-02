import Paragraph from '@/components/atoms/paragraph/paragraph'
import Title from '@/components/atoms/title/title'
import React from 'react'
import Lottie from "lottie-react";
import BioAnim from "../../../assets/gift/Abstract.json";

import './HomeBioSeccion.scss'

export default function HomeBioSeccion() {
  return (
    <div className='homeBioSeccionContainer'>
      <div className='infoWrapper'>
        <Title level='h1' titleClass='title' text={`We are dreamers with a <span className='primary'>hunger</span> for <span>knowledge</span> and a crazy <span className='primary'>drive</span> for execution.`} />
        <Paragraph text='Our team has more than 60 <span> strategists, product and experience designers, multi-disciplinary developers, testers, copywriters, digital marketers, and optimizers </span> distributed across 15 cities with a common passion for building beautiful products.' />
        <Lottie className='bioAnim' animationData={BioAnim} loop={true} />
      </div>
    </div>
  )
}
