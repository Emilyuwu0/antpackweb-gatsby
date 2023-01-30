import Icon from '@/components/atoms/icon/icon'
import React, { useEffect, useRef, useState } from 'react'
import { AnchorLink } from "gatsby-plugin-anchor-links";
import './header.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { Link } from 'gatsby';

import Title from '@/components/atoms/title/title';
import LenguageIcon from '../../../assets/icons/language.svg'
import LenguageIconBlack from '../../../assets/icons/languageBlack.svg'

import { useTranslation } from 'react-i18next'

interface headerProps {
  color: string,
  lenguage: string,
  setLenguage: any
}

export default function Header({ color, lenguage, setLenguage }: headerProps) {
  gsap.registerPlugin(ScrollTrigger);
  const [isOpen, setisOpen] = useState('')

  const [t, i18n] = useTranslation('global')

  useEffect(() => {
    if (lenguage === 'es') {
      i18n.changeLanguage('es')
    } else if (lenguage === 'en') {
      i18n.changeLanguage('en')
    }
  }, [])


  return (
    <div className='headerContainer'>
      <div className='lenguageButtons'>
        {
          color === 'white' ?
            <div className='menuAnim'>
              <LenguageIcon />
            </div>
            : color === 'black' ?
              <div className='menuAnim2'>
                <LenguageIconBlack />
              </div>
              : <></>
        }
        {
          i18n.language === 'es'
            ?
            <button style={{ color: (color === 'white' ? 'white' : 'black') }} onClick={() => {
              setLenguage('en')
              i18n.changeLanguage('en')
            }}>EN</button>
            : i18n.language === 'en'
              ?
              <button style={{ color: (color === 'white' ? 'white' : 'black') }} onClick={() => {
                setLenguage('es')
                i18n.changeLanguage('es')
              }}>ES</button>
              : <></>
        }
      </div>
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
