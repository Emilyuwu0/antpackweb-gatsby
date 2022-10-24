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
            <Link to=''>
              <Title level='h3' text='Our craft' />
            </Link>
          </li>
          <li>
            <Link to=''>
              <Title level='h3' text='Services' />
            </Link>
          </li>
          <li>
            <Link to=''>
              <Title level='h3' text='Company' />
            </Link>
          </li>
          <li>
            <Link to=''>
              <Title level='h3' text='Contact' />
            </Link>
          </li>
        </ul>
        <LogoAntpackBlack />
      </div>
      <div className='seccion2'>
        <div>
          <div className='InfoText'>
            <Title level='h4' text='BOGOTÁ' />
            <p>+57 601 310 7911 <br />
              Calle 94 #14-45 OF 403</p>
          </div>
          <div className='InfoText'>
            <Title level='h4' text='BOGOTÁ' />
            <p>+57 601 310 7911 <br />
              Calle 94 #14-45 OF 403</p>
          </div>
          <div className='InfoText'>
            <Title level='h4' text='BOGOTÁ' />
            <p>+57 601 310 7911 <br />
              Calle 94 #14-45 OF 403</p>
          </div>
          <div className='InfoText'>
            <Title level='h4' text='BOGOTÁ' />
            <p>+57 601 310 7911 <br />
              Calle 94 #14-45 OF 403</p>
          </div>
        </div>

        <div className='linksContainer'>
          <div>
            <Link to='https://www.facebook.com'>
              <Linkedin />
            </Link>

            <Link to='https://www.facebook.com'>
              <Intagram />
            </Link>

            <Link to='https://www.facebook.com'>
              <Be />
            </Link>

            <Link to='https://www.facebook.com'>
              <Whatsapp />
            </Link>
          </div>

          <div>
            <Link to='https://www.facebook.com'>Terms & Privacy</Link>
          </div>

        </div>
      </div>
    </div>
  )
}
