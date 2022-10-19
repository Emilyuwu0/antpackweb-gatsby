import React from 'react'
import './videoMutedButton.scss'

interface videoMutedButtonProps {
  onclick: any
  text: string
}

export default function VideoMutedButton({ onclick, text }: videoMutedButtonProps) {
  return (
    <button onClick={onclick} className='videoMutedButton'>
      {text}
    </button>
  )
}
