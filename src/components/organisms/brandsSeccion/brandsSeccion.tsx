import Button from '@/components/atoms/button/button'
import Icon from '@/components/atoms/icon/icon'
import Title from '@/components/atoms/title/title'
import React, { useEffect, useState } from 'react'

import './brandsSeccion.scss'

import Previsora from '../../../assets/icons/brands/previsora.svg'
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
      <div className='brandsFilterMenu'>

        <BrandButton text='Financial' toDO={() => setCategorie('Financial')} />
        <BrandButton text='Retail' toDO={() => setCategorie('Retail')} />
        <BrandButton text='Logistics' toDO={() => setCategorie('Logistics')} />
        <BrandButton text='Agencies' toDO={() => setCategorie('Agencies')} />
        <BrandButton text='Luxury Products' toDO={() => setCategorie('Luxury')} />
        <BrandButton text='Transportation' toDO={() => setCategorie('Transportation')} />
      </div>

      <div className='brandsContainer'>
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
      </div>
    </div>
  )
}
