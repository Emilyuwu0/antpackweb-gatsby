import React from 'react'
import Lottie from "lottie-react";
import CodeAnim from "../../../assets/gift/Abstract.json";
import Card1 from '../../../assets/gift/CODE.json'
import Card2 from '../../../assets/gift/website.json'
import Card3 from '../../../assets/gift/Marketing.json'
import Card4 from '../../../assets/gift/Triángulo.json'

import './cardAnim.scss'

interface cardAnimProps {
  type: string
}

export default function CardAnim({ type }: cardAnimProps) {
  return (
    <>
      {type === 'card1' && <Lottie className='cardAnim' animationData={Card1} loop={false} />}
      {type === 'card2' && <Lottie className='cardAnim' animationData={Card2} loop={false} />}
      {type === 'card3' && <Lottie className='cardAnim' animationData={Card3} loop={false} />}
      {type === 'card4' && <Lottie className='cardAnim' animationData={Card4} loop={false} />}
    </>
  )
}
