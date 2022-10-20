import Button from '@/components/atoms/button/button'
import Icon from '@/components/atoms/icon/icon'
import Title from '@/components/atoms/title/title'
import React from 'react'

import './sliderInfo.scss'

interface sliderInfoProp {
  name: string
  date: string
  categories: string[]
  colorText?: string
  url?: string
}

export default function SliderInfo({ name, categories, date, colorText, url }: sliderInfoProp) {
  return (
    <div style={{ color: `${colorText}`, }} className='sliderInfoContainer'>
      <Icon type={name} />
      <ul>
        <li>
          <Title titleClass='date' level='h3' text={date} />
        </li>
        {
          categories.map((category, index) => (
            <li key={index}>
              <Title level='h3' text={category} />
            </li>
          ))
        }
      </ul>
      <div className='buttonWrapper'>
        <Button color={`${colorText}`} to={url || ''} text='VIEW' />
      </div>
    </div>
  )
}
