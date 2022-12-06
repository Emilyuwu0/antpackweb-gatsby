import Icon from '@/components/atoms/icon/icon'
import React, { useEffect, useRef, useState } from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import './header.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { Link } from 'gatsby';
import Title from '@/components/atoms/title/title';

interface headerProps {
  color: string
}

export default function Header({ color }: headerProps) {
  gsap.registerPlugin(ScrollTrigger);
  const [isOpen, setisOpen] = useState('')

  useEffect(() => {

  }, [])


  return (
    <div className='headerContainer'>
      {
        color === 'white' ?
          <div onClick={() => setisOpen('show')} className='menuAnim'>
            <Icon type='menu' />
          </div>
          : color === 'black' ?
            <div onClick={() => setisOpen('show')} className='menuAnim2'>
              <Icon type='menu2' />
            </div>
            : <></>
      }
      <div style={{ display: 'none' }} className={`${isOpen === 'show' ? "backdrop" : "" || isOpen === 'hidden' ? "hidden" : ""}`}>
        <div className={`${isOpen === 'show' ? "backdrop2" : "" || isOpen === 'hidden' ? "hidden2" : ""}`}>
          <div className='content'>
            <div onClick={() => setisOpen('hidden')} className='close'>
              <Title level='h1' text='X' />
            </div>
            <ul>
              <li>
                <OutboundLink onClick={() => setisOpen('hidden')} href='#ourCraft'>
                  <Title level='h3' text='Our craft' />
                </OutboundLink>
              </li>
              <li>
                <OutboundLink onClick={() => setisOpen('hidden')} href='#services'>
                  <Title level='h3' text='Services' />
                </OutboundLink>
              </li>
              <li>
                <OutboundLink onClick={() => setisOpen('hidden')} href='#company'>
                  <Title level='h3' text='Company' />
                </OutboundLink>
              </li>
              <li>
                <OutboundLink onClick={() => setisOpen('hidden')} href='#contact'>
                  <Title level='h3' text='Contact' />
                </OutboundLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div >
  )
}
