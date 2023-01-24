import React from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { Widget } from '@typeform/embed-react'

import './contactSeccion.scss'
import { useTranslation } from 'react-i18next'


export default function ContactSeccion() {
  const [t, i18n] = useTranslation('global')

  return (
    <div className='contactSeccionContainer'>
      {
        i18n.language === 'en' ?
          <Widget id="D0Ku1Zq5" style={{ width: '100%', height: '100%' }} />
          : i18n.language === 'es' ?
            <Widget id="bszp1QAp" style={{ width: '100%', height: '100%' }} />
            : <></>
      }
    </div>
  )
}
