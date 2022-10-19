import React from 'react'
import './title.scss'
const HtmlToReactParser = require('html-to-react').Parser;

interface titleProps {
  level: string
  text: string
}

export default function Title({ level, text }: titleProps) {
  const htmlParce = new HtmlToReactParser();
  return (
    <>
      {level === 'h1' && <h1>{htmlParce.parse(text)}</h1>}
      {level === 'h2' && <h2>{htmlParce.parse(text)}</h2>}
      {level === 'h3' && <h3>{htmlParce.parse(text)}</h3>}
    </>
  )
}
