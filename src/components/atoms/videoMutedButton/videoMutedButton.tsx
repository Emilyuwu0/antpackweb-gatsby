import React, { useState } from 'react'
import './videoMutedButton.scss'

import Volumeup from '../../../assets/icons/volume_up.svg'
import Volumeoff from '../../../assets/icons/volume_off.svg'

interface videoMutedButtonProps {
  onclick: any
}

export default function VideoMutedButton({ onclick }: videoMutedButtonProps) {
  const [mute, setMute] = useState(false)
  return (
    <button onClick={() => {
      onclick()
      setMute(!mute)
    }} className='videoMutedButton'>
      {
        mute
          ?
          <Volumeoff />
          :
          <Volumeup />
      }
    </button>
  )
}
