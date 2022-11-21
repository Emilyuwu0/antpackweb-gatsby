import CardAnim from '@/components/atoms/cardAnim/cardAnim';
import Gif from '@/components/atoms/gif/gif';
import Icon from '@/components/atoms/icon/icon'
import React, { useState } from 'react'

const HtmlToReactParser = require('html-to-react').Parser;


import './card.scss'

interface cardsProps {
  cardIcon: string
  title: string
  properties: string[]
  hoverText: string
}

export default function Cards({ cardIcon, title, properties, hoverText }: cardsProps) {
  const [isHovering, setIsHovering] = useState<boolean>(false);

  const htmlParce = new HtmlToReactParser();

  const handleMouseOver = () => {
    setIsHovering(!isHovering);
  };

  return (
    <>
      {
        !isHovering
          ?
          <div key={'key' + title} className='cardContainer' onClick={handleMouseOver} >
            <div className='title_wrapper'>
              <Icon type={cardIcon} />
              <h3>{title}</h3>
            </div>
            {
              properties.map((prop: string, index: number) => {
                return (
                  <p className='propertiesText' key={`paragraph${index}`}>{prop}</p>
                )
              })
            }
          </div>
          :
          <div style={{ backgroundColor: 'white', paddingTop: '50px' }} key={'key' + title} className='cardContainer' onClick={handleMouseOver}>
            <CardAnim type={cardIcon} />
            <p style={{ fontFamily: 'Satoshi-Light', fontSize: '14px', color: 'black', textTransform: 'initial' }}>
              {htmlParce.parse(hoverText)}
            </p>
          </div>
      }
    </>
  )
}
