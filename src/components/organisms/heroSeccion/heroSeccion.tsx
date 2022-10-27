import BigParagraph from '@/components/atoms/bigParagraph/bigParagraph'
import Button from '@/components/atoms/button/button'
import Icon from '@/components/atoms/icon/icon'
import React from 'react'
import './heroSeccion.scss'


export default function HeroSeccion() {
  return (
    <div className='heroContainer'>
      <div className='logo'>
        <Icon type='logo' />
      </div>
      <BigParagraph text='We create and market <span> technology </span> with <br/> craft and simplicity to transform <br/> companies, solve their problems, and <br/> better human lives.' />
      < Button to='page2' text='CONTACT US' />
    </div >
  )
}
