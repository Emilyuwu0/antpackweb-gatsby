import React from 'react'
import './bigParagraph.scss'

const HtmlToReactParser = require('html-to-react').Parser;

interface titleProps {
  text: string
}

export default function BigParagraph({ text }: titleProps) {
  const htmlParce = new HtmlToReactParser();

  return (
    <p className='bigParagraph'>{htmlParce.parse(text)}</p>
  )
}
