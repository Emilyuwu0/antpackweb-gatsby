import BigParagraph from '@/components/atoms/bigParagraph/bigParagraph'
import Button from '@/components/atoms/button/button'
import Icon from '@/components/atoms/icon/icon'
import React from 'react'
import './heroSeccion.scss'

import { useTranslation } from 'react-i18next'


export default function HeroSeccion() {
  const [t] = useTranslation('global')

  return (
    <div className='heroWrapper'>
      <div className='heroContainer'>
        <div className='logo'>
          <Icon type='logo' />
        </div>
        <BigParagraph text={t('hero.title')} />
        < Button to='#contact' text={t('contactButton.text')} />
      </div >
    </div>
  )
}
