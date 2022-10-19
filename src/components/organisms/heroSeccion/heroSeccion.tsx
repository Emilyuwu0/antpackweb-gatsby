import BigParagraph from '@/components/atoms/bigParagraph/bigParagraph'
import Button from '@/components/atoms/button/button'
import Icon from '@/components/atoms/icon/icon'
import React from 'react'
import './heroSeccion.scss'

interface heroProps {
  title: string
}

export default function HeroSeccion({ title }: heroProps) {
  return (
    <div className='heroContainer'>
      <div className='logo'>
        <Icon type='logo' />
      </div>
      <BigParagraph text='We create and market technology with craft and simplicity to transform companies, solve their problems, and better human lives.' />
      <Button to='page2' text='CONTACT US' />
    </div>
  )
}
