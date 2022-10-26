import React from 'react'

import './brandButton.scss'

interface brandButtonProps {
  text: string,
  toDO: any
}

export default function BrandButton({ text, toDO }: brandButtonProps) {
  return (
    <button onClick={toDO}>{text}</button>
  )
}
