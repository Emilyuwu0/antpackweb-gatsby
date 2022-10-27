import Icon from '@/components/atoms/icon/icon'
import React, { useEffect, useRef, useState } from 'react'
import './header.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

interface headerProps {
  color: string
}

export default function Header({ color }: headerProps) {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className='headerContainer'>
      {
        color === 'white' ?
          <div className='menuAnim'>
            <Icon type='menu' />
          </div>
          : color === 'black' ?
            <div className='menuAnim2'>
              <Icon type='menu2' />
            </div>
            : <></>
      }
    </div>
  )
}
