import Title from '@/components/atoms/title/title'
import { Link } from 'gatsby'
import React from 'react'
import Linkedin from '../../../assets/icons/Linkedin.svg'
import Whatsapp from '../../../assets/icons/whatsappIco.svg'
import Intagram from '../../../assets/icons/instagram.svg'
import Be from '../../../assets/icons/be.svg'

import LogoAntpackBlack from '../../../assets/icons/LogoAntpackBlack.svg'

import './footer.scss'

export default function Footer() {
  return (
    <div className='footerContainer'>
      <div className='seccion1'>
        <ul>
          <li>
            <Link to='#ourCraft'>
              <Title level='h3' text='Our craft' />
            </Link>
          </li>
          <li>
            <Link to='#services'>
              <Title level='h3' text='Services' />
            </Link>
          </li>
          <li>
            <Link to='#company'>
              <Title level='h3' text='Company' />
            </Link>
          </li>
          <li>
            <Link to='#contact'>
              <Title level='h3' text='Contact' />
            </Link>
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
            <p> <a href="tel:+57(601)4813202">+57 (601)4813202</a>
              <br />
              Calle 100 #13-21 OF. 701</p>
          </div>

          <div className='InfoText'>
            <Title level='h4' text='ANTPACK' />
            <p>
              <a href='mailto:hello@antpack.co'>hello@antpack.co</a>
            </p>
          </div>
        </div>

        <hr />

        <div className='linksContainer'>
          <div>
            <a target={'_blank'} href='https://www.facebook.com/AntPackCo/'>
              <Linkedin />
            </a>

            <a target={'_blank'} href='https://www.instagram.com/ant.pack/'>
              <Intagram />
            </a>

            <a target={'_blank'} href='https://www.behance.net/antpack'>
              <Be />
            </a>

            <a target={'_blank'} href='https://api.whatsapp.com/send?phone=573214444727&text=Hello'>
              <Whatsapp />
            </a>
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
