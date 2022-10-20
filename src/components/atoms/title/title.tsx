import React from 'react'
import './title.scss'
const HtmlToReactParser = require('html-to-react').Parser;

interface titleProps {
  level: string
  text: string
  titleClass?: string
}

export default function Title({ level, text, titleClass }: titleProps) {
  const htmlParce = new HtmlToReactParser();
  return (
    <>
      {level === 'h1' && <h1 className={titleClass}>{htmlParce.parse(text)}</h1>}
      {level === 'h2' && <h2 className={titleClass}>{htmlParce.parse(text)}</h2>}
      {level === 'h3' && <h3 className={titleClass}>{htmlParce.parse(text)}</h3>}
    </>
  )
}
