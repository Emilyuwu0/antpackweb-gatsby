import React from 'react'
import './paragraph.scss'

interface titleProps {
  text: string
}

export default function Paragraph({ text }: titleProps) {
  return (
    <p className='paragraph'>{text}</p>
  )
}
