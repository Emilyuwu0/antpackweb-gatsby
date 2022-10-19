import VideoMutedButton from '@/components/atoms/videoMutedButton/videoMutedButton'
import PrimaryVideo from '@/components/molecules/primaryVideo/primaryVideo'
import React, { useRef } from 'react'
import './videoSeccion.scss'

export default function VideoSeccion() {
  return (
    <div className='videoContainer'>
      <PrimaryVideo src='https://antpack.s3.us-east-2.amazonaws.com/videos/Preview.mp4' />
    </div>
  )
}
