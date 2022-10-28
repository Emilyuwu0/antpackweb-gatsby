import Button from '@/components/atoms/button/button'
import Icon from '@/components/atoms/icon/icon'
import Title from '@/components/atoms/title/title'
import React, { useEffect, useState } from 'react'
import Marquee from "react-fast-marquee";

import './brandsSeccion.scss'

import Previsora from '../../../assets/icons/brands/previsora.svg'
import NBC from '../../../assets/icons/brands/NBCUniversal_Logo.svg'
import Didi from '../../../assets/icons/brands/Didi.svg'
import Justo from '../../../assets/icons/brands/justo.svg'
import Hbo from '../../../assets/icons/brands/hbo.svg'
import Sura from '../../../assets/icons/brands/sura.svg'
import WM from '../../../assets/icons/brands/warnermedia1.svg'
import AmCOl from '../../../assets/icons/brands/amchamCo.svg'
import Uber from '../../../assets/icons/brands/uber-2.svg'
import Wom from '../../../assets/icons/brands/wom_logo.svg'
import Avantel from '../../../assets/icons/brands/avantel.svg'
import Undermore from '../../../assets/icons/brands/LogoUnder-armour.svg'
import Tpaga from '../../../assets/icons/brands/LogoTpaga.svg'
import Puma from '../../../assets/icons/brands/LogoPuma.svg'
import Spotify from '../../../assets/icons/brands/LogoSpotify.svg'
import Bluepalm from '../../../assets/icons/brands/Blueplam.svg'
import Miele from '../../../assets/icons/brands/miele.svg'
import Captiva from '../../../assets/icons/brands/LogoCaptivaHorizontal.svg'
import Piuts from '../../../assets/icons/brands/piuts.svg'
import Sierracol from '../../../assets/icons/brands/SierraColEnergy.svg'
import NextU from '../../../assets/icons/brands/Next-U.svg'
import Verdi from '../../../assets/icons/brands/VERDI.svg'
import ScottBolden from '../../../assets/icons/brands/Logo_ScottBolden.svg'
import HalfMoon from '../../../assets/icons/brands/HalfMoon.svg'

import BrandButton from '@/components/atoms/brandButton/brandButton'




const brands2 = [
  {
    type: 'Financial',
    data: [
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
    ]
  },
  {
    type: 'Financial',
    data: [
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
    ]
  },
  {
    type: 'Financial',
    data: [
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
    ]
  },
  {
    type: 'Financial',
    data: [
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
    ]
  },
  {
    type: 'Financial',
    data: [
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
    ]
  },
  {
    type: 'Financial',
    data: [
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
      {
        title: '',
        icon: <Previsora />
      },
    ]
  }
]


export default function BrandsSeccion() {
  const [category, setCategorie] = useState<any>('Financial')

  return (
    <div className='brandsSeccionContainer'>
      <Title level='h1' text='These brand <span>trust us</span>' />
      {/* <div className='brandsFilterMenu'>

        <BrandButton text='Financial' toDO={() => setCategorie('Financial')} />
        <BrandButton text='Retail' toDO={() => setCategorie('Retail')} />
        <BrandButton text='Logistics' toDO={() => setCategorie('Logistics')} />
        <BrandButton text='Agencies' toDO={() => setCategorie('Agencies')} />
        <BrandButton text='Luxury Products' toDO={() => setCategorie('Luxury')} />
        <BrandButton text='Transportation' toDO={() => setCategorie('Transportation')} />
      </div> */}

      <div className='brandsContainerDesktop'>
        <Previsora />
        <NBC />
        <Didi />
        <Justo />
        <Hbo />
        <Sura />
        <WM />
        <AmCOl />
        <Uber />
        <Wom />
        <Avantel />
        <Undermore />
        <Tpaga />
        <Puma />
        <Spotify />
        <Bluepalm />
        <Miele />
        <Captiva />
        <Piuts />
        <Sierracol />
        <NextU />
        <Verdi />
        <ScottBolden />
        <HalfMoon />
        {/*
        {
          category === 'Financial' ?
            brands2[0].data.map((e, index) => (
              <div key={index}>
                {e.icon}
              </div>
            ))
            : <></>
        }
        {
          category === 'Retail' ?
            brands2[1].data.map((e, index) => (
              <div key={index}>
                {e.icon}
              </div>
            ))
            : <></>
        }
        {
          category === 'Logistics' ?
            brands2[2].data.map((e, index) => (
              <div key={index}>
                {e.icon}
              </div>
            ))
            : <></>
        }
        {
          category === 'Agencies' ?
            brands2[3].data.map((e, index) => (
              <div key={index}>
                {e.icon}
              </div>
            ))
            : <></>
        }
        {
          category === 'Luxury' ?
            brands2[4].data.map((e, index) => (
              <div key={index}>
                {e.icon}
              </div>
            ))
            : <></>
        }
        {
          category === 'Transportation' ?
            brands2[5].data.map((e, index) => (
              <div key={index}>
                {e.icon}
              </div>
            ))
          : <></> 
        }
          */}
      </div>

      <div className='brandsContainerMobile'>
        <Marquee
          direction={'right'}
          speed={100}
          style={{ height: 150, width: '100vw' }}
          gradient={false}
          className='marque'
        >
          <Previsora />
          <NBC />
          <Didi />
          <Justo />
          <Hbo />
          <Sura />
          <WM />
          <AmCOl />
        </Marquee>

        <Marquee
          speed={100}
          direction={'left'}
          style={{ height: 150, width: '100vw' }}
          gradient={false}
          className='marque'
        >
          <Uber />
          <Wom />
          <Avantel />
          <Undermore />
          <Tpaga />
          <Puma />
          <Spotify />
          <Bluepalm />
        </Marquee>

        <Marquee
          speed={100}
          direction={'right'}
          style={{ height: 150, width: '100vw' }}
          gradient={false}
          className='marque'
        >
          <Miele />
          <Captiva />
          <Piuts />
          <Sierracol />
          <NextU />
          <Verdi />
          <ScottBolden />
          <HalfMoon />
        </Marquee>
      </div>


    </div >
  )
}
