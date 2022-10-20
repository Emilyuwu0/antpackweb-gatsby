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
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  return (
    <>
      <div key={'key' + title} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className='cardContainer'>
        {
          !isHovering
            ?
            <>
              <div className='title_wrapper'>
                <Icon type={cardIcon} />
                <h3>{title}</h3>
              </div>
              {
                properties.map((prop: string, index: number) => {
                  return (
                    <p key={`paragraph${index}`}>{prop}</p>
                  )
                })
              }
            </>
            :
            <>
              <CardAnim type={cardIcon} />
              <p>
                {htmlParce.parse(hoverText)}
              </p>
            </>
        }
      </div>

    </>
  )
}
