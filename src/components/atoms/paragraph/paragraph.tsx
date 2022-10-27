import React from 'react'
import './paragraph.scss'
const HtmlToReactParser = require('html-to-react').Parser;

interface titleProps {
  text: string
}

export default function Paragraph({ text }: titleProps) {
  const htmlParce = new HtmlToReactParser();
  return (
    <p className='paragraph'>{htmlParce.parse(text)}</p>
  )
}
