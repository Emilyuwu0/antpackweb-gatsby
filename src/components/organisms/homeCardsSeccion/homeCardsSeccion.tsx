import Button from '@/components/atoms/button/button'
import Title from '@/components/atoms/title/title'
import Cards from '@/components/molecules/cards/cards'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import CardsSwiperMobile from '../cardsSwiperMobile/cardsSwiperMobile'
import './homeCardsSeccion.scss'

const propertiesCard1 = ['Apps', 'Platforms', 'Integrations', 'Middleware']
const propertiesCard2 = ['CMS', 'E-commerce', 'Landing pages', 'Headless sites']
const propertiesCard3 = ['SEO/SEM', 'Analytics', 'Social', 'Paid Media']
const propertiesCard4 = ['Metaverse', 'Blockchain', 'VR / AR', 'AI / ML']




export default function HomeCardsSeccion() {
  const [t] = useTranslation('global')

  const cards = [
    <Cards hoverText={t('cards.card1.paragraph')}
      properties={propertiesCard1}
      title={t('cards.card1.title')}
      cardIcon='card1' />
    ,
    <Cards
      hoverText={t('cards.card2.paragraph')}
      properties={propertiesCard2}
      title='websites'
      cardIcon='card2' />,
    <Cards
      hoverText={t('cards.card3.paragraph')}
      properties={propertiesCard3}
      title='marketing'
      cardIcon='card3' />,
    <Cards
      hoverText={t('cards.card4.paragraph')}
      properties={propertiesCard4}
      title='Antpack lab'
      cardIcon='card4' />

  ]
  return (
    <div className='homeCardsSeccionWrapper'>
      <div className='homeCardsSeccionContainer'>
        <div className='homeCardsTitle'>
          <Title level='h1'
            text={t('cards.title')} />
        </div>
        <div className='cardsWrapper'>
          {
            cards.map((card, index) => (
              <div key={index}>
                {card}
              </div>
            ))
          }
        </div>
        {/* <CardsSwiperMobile data={cards} /> */}
        <div className='contactButton'>
          <Button text={t('contactButton.text')} to='#contact' />
        </div>
      </div>
    </div>
  )
}
