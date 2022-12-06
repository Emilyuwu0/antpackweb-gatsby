import Title from '@/components/atoms/title/title'
import { Link } from 'gatsby'
import React from 'react'
import Linkedin from '../../../assets/icons/Linkedin.svg'
import Whatsapp from '../../../assets/icons/whatsappIco.svg'
import Intagram from '../../../assets/icons/instagram.svg'
import Be from '../../../assets/icons/be.svg'
import { OutboundLink } from "gatsby-plugin-google-gtag"

import LogoAntpackBlack from '../../../assets/icons/LogoAntpackBlack.svg'

import './footer.scss'

export default function Footer() {
  return (
    <div className='footerContainer'>
      <div className='seccion1'>
        <ul>
          <li>
            <OutboundLink href='#ourCraft'>
              <Title level='h3' text='Our craft' />
            </OutboundLink>
          </li>
          <li>
            <OutboundLink href='#services'>
              <Title level='h3' text='Services' />
            </OutboundLink>
          </li>
          <li>
            <OutboundLink href='#company'>
              <Title level='h3' text='Company' />
            </OutboundLink>
          </li>
          <li>
            <OutboundLink href='#contact'>
              <Title level='h3' text='Contact' />
            </OutboundLink>
          </li>
        </ul>
        <div className='logo'>
          <LogoAntpackBlack />
        </div>
      </div>
      <div className='seccion2'>
        <div className='infoSec'>
          <div className='InfoText'>
            <Title level='h4' text='BOGOTÁ' />
            <p> <OutboundLink href="tel:+57(601)4813202">+57 (601)4813202</OutboundLink>
              <br />
              Calle 100 #13-21 OF. 701</p>
          </div>

          <div className='InfoText'>
            <Title level='h4' text='ANTPACK' />
            <p>
              <OutboundLink href='mailto:hello@antpack.co'>hello@antpack.co</OutboundLink>
            </p>
          </div>
        </div>

        <hr />

        <div className='linksContainer'>
          <div>
            <OutboundLink target={'_blank'} href='https://co.linkedin.com/company/antpack'>
              <Linkedin />
            </OutboundLink>

            <OutboundLink target={'_blank'} href='https://www.instagram.com/ant.pack/'>
              <Intagram />
            </OutboundLink>

            <OutboundLink target={'_blank'} href='https://www.behance.net/antpack'>
              <Be />
            </OutboundLink>

            <OutboundLink target={'_blank'} href='https://api.whatsapp.com/send?phone=573214444727&text=Hello'>
              <Whatsapp />
            </OutboundLink>
          </div>

          {/* <div className='terms'>
            <Link to='https://www.facebook.com'>Terms & Privacy</Link>
          </div> */}

        </div>
        <div className='logo'>
          <LogoAntpackBlack />
        </div>
      </div>
    </div>
  )
}
