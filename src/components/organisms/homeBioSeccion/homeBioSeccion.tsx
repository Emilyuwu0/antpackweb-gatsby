import Paragraph from '@/components/atoms/paragraph/paragraph'
import Title from '@/components/atoms/title/title'
import React from 'react'
import './HomeBioSeccion.scss'

export default function HomeBioSeccion() {
  return (
    <div className='homeBioSeccionContainer'>
      <div className='infoWrapper'>
        <Title level='h1' titleClass='title' text={`We are dreamers with a hunger for knowledge and a crazy drive for execution.`} />
        <Paragraph text='Our team has more than 60 strategists, product and experience designers, multi-disciplinary developers, testers, copywriters, digital marketers, and optimizers distributed across 15 cities with a common passion for building beautiful products.' />
      </div>
    </div>
  )
}
