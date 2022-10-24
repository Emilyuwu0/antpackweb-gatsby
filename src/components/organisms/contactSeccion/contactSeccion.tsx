import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

import './contactSeccion.scss'

export default function ContactSeccion() {
  return (
    <div className='contactSeccionContainer'>
      <StaticImage
        src='../../../assets/images/contactUsBackground.png'
        alt="A dinosaur"
        placeholder="blurred"
        className='backgroundImage'
      />
    </div>
  )
}
