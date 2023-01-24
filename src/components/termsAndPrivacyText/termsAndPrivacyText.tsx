import React from 'react'
import { useTranslation } from 'react-i18next'

const HtmlToReactParser = require('html-to-react').Parser;

import LenguageIconBlack from '../../assets/icons/languageBlack.svg'

export default function TermsAndPrivacyText() {
  const [t, i18n] = useTranslation('global')
  const htmlParce = new HtmlToReactParser();
  return (
    <div>
      <div className='lenguageButtons'>
        <LenguageIconBlack />
        {
          i18n.language === 'es'
            ?
            <button style={{ color: 'black' }} onClick={() => i18n.changeLanguage('en')}>EN</button>
            : i18n.language === 'en'
              ?
              <button style={{ color: 'black' }} onClick={() => i18n.changeLanguage('es')}>ES</button>
              : <></>
        }
      </div>
      {
        htmlParce.parse(t('TermsAndPrivacy.text'))
      }
    </div>
  )
}
