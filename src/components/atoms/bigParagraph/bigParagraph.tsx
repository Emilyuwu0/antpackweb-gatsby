import React from 'react'
import './bigParagraph.scss'

interface titleProps {
  text: string
}

export default function BigParagraph({ text }: titleProps) {
  return (
    <p>{text}</p>
  )
}
