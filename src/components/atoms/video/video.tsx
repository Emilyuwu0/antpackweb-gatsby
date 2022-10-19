import React, { useRef } from 'react'

interface videoProps {
  src: string
  src2?: string
  src3?: string
  ref?: any
}

export default function Video({ src, src2, src3, ref }: videoProps) {

  return (
    <>
      <video ref={ref} className='video' loop autoPlay muted>
        <source src={src} />
        <source src={src2} />
        Your browser does not support the video tag.
      </video>
    </>
  )
}
