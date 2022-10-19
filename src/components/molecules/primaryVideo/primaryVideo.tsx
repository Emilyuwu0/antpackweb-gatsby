import VideoMutedButton from '@/components/atoms/videoMutedButton/videoMutedButton';
import React, { useRef } from 'react'
import './primaryVideo.scss'

interface primaryVideoProps {
  src: string
  src2?: string
  src3?: string
  ref?: any
}

export default function PrimaryVideo({ src, src2 }: primaryVideoProps) {
  const first = useRef<any>(null)
  return (
    <div className='primaryVideoContainer'>
      <video ref={first} className='video' loop autoPlay muted>
        {src && <source src={src} />}
        {src2 && <source src={src2} />}
        Your browser does not support the video tag.
      </video>
      <VideoMutedButton text='mute' onclick={() => {
        let myVideo: any = first.current;
        if (myVideo) {
          if (myVideo?.muted) {
            myVideo.muted = false
          } else {
            myVideo.muted = true
          }
        }
      }} />
    </div>
  )
}
