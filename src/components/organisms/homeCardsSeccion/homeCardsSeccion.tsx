import Button from '@/components/atoms/button/button'
import Title from '@/components/atoms/title/title'
import Cards from '@/components/molecules/cards/cards'
import React, { useState } from 'react'
import './homeCardsSeccion.scss'

const propertiesCard1 = ['Apps', 'Platforms', 'Integrations', 'Middleware']
const propertiesCard2 = ['Apps', 'Platforms', 'Integrations', 'Middleware']
const propertiesCard3 = ['Apps', 'Platforms', 'Integrations', 'Middleware']
const propertiesCard4 = ['Apps', 'Platforms', 'Integrations', 'Middleware']

export default function HomeCardsSeccion() {
  return (
    <div className='homeCardsSeccionContainer'>
      <Title level='h1'
        text={
          `
          <div className='homeCardsTitle'>
            <span>We build technology that makes <br /> sense</span> and make sure the world sees it
          </div>
          `
        } />
      <div className='cardsWrapper'>
        <Cards hoverText={`
            Our software development division uses the most popular frameworks. This protects the lifetime of your investment and vendor lock-in.
            <br/><br/>
            We ve built video, transactional, automation, and inventory management platforms. Created middlewares to connect multiple data sources, and built hybrid and native apps for large utility operators. 
          `}
          properties={propertiesCard1}
          title='code'
          cardIcon='card1' />
        <Cards
          hoverText={`
            Our websites are ultra-optimized, combining the convenience of well-known content management systems with fast loading technologies such as gatsby and react. 
            <br/><br/>
            Our headless approach to E-Commerce leverages functionality of shopify and VTEX with third-party ERP, CRM, PIM software. This approach achieves a true omnichannel experience.
          `}
          properties={propertiesCard2}
          title='websites'
          cardIcon='card2' />
        <Cards
          hoverText={`
            We build your digital marketing architecture with solutions aligned to the need of your business and budget.
            <br/><br/>
            We focus on efficiency, performance, and creativity in the strategies.
            <br/><br/>
            We offer an analytics solution for marketing actions and  results.
          `}
          properties={propertiesCard3}
          title='Code3'
          cardIcon='card3' />
        <Cards
          hoverText={`
            Antpack lab is our experimental division. We work on developing products with emerging technologies. 
            <br/><br/>
            We built an AI image recognition engine for a property management company, a branded VR video game experience, an orchid exhibition in the metaverse for a museum, and a blockchain-powered proposal platform for a presidential candidate.
          `}
          properties={propertiesCard4}
          title='marketing'
          cardIcon='card4' />
      </div>
      <div className='contactButton'>
        <Button text='CONTACT US' to='page2' />
      </div>
    </div>
  )
}
