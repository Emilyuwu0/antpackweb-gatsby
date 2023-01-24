
import i18next from 'i18next'
import React from 'react'
import { useTranslation } from 'react-i18next'

import globalES from '../translations/es/global.json'
import globalEN from '../translations/en/global.json'

import { I18nextProvider } from 'react-i18next'

import '../styles/globalStyle.scss'
import TermsAndPrivacyText from '@/components/termsAndPrivacyText/termsAndPrivacyText'

export default function TermsAndPrivacy() {
  i18next.init({
    interpolation: { escapeValue: false },
    lng: 'en',
    resources: {
      es: {
        global: globalES
      },
      en: {
        global: globalEN
      },
    }
  })
  return (
    <I18nextProvider i18n={i18next}>
      <div className='termsAndPrivacy'>
        <TermsAndPrivacyText />
      </div>

    </I18nextProvider>
  )
}
