import Button from '@/components/atoms/button/button'
import Icon from '@/components/atoms/icon/icon'
import Title from '@/components/atoms/title/title'
import React, { useState } from 'react'

import './brandsSeccion.scss'

import Previsora from '../../../assets/icons/brands/previsora.svg'


const brands = [
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


export default function BrandsSeccion() {
  const [category, setfirst] = useState()
  return (
    <div className='brandsSeccionContainer'>
      <Title level='h1' text='These brand <span>trust us</span>' />
      <div className='brandsFilterMenu'>
        <Button color='black' text='help' to='' />
        <Button color='black' text='help' to='' />
        <Button color='black' text='help' to='' />
        <Button color='black' text='help' to='' />
        <Button color='black' text='help' to='' />
        <Button color='black' text='help' to='' />
      </div>

      <div className='brandsContainer'>
        {
          brands.map((e, index) => (
            <div key={index}>
              {e.icon}
            </div>
          ))
        }
      </div>
    </div>
  )
}
