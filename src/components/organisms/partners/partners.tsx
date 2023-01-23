import './partners.scss'

import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Marquee from 'react-fast-marquee'

export default function Partners() {
  return (
    <div className='partnersContainer'>
      <div className='partnersWrapper'>
        <div className='titleContainer'>
          <h3>partners</h3>
        </div>

        <div className='logosContainer'>
          <Marquee
            direction={'right'}
            speed={10}
            loop={0}
            style={{ height: '100px', width: '100%' }}
            gradient={false}
            className='partnersMarque'
          >
            <div className='partnerLogo'>
              <a href="">
                <StaticImage
                  src='../../../assets/images/partnersImages/AccreditedAgency1.png'
                  alt=''
                  quality={100}
                />
              </a>
            </div>

            <div className='partnerLogo'>
              <StaticImage
                src='../../../assets/images/partnersImages/awsCertified.png'
                alt=''
                quality={100}
              />
            </div>

            <div className='partnerLogo'>
              <StaticImage
                src='../../../assets/images/partnersImages/googleDev.png'
                alt=''
                quality={100}
              />
            </div>

            <div className='partnerLogo'>
              <StaticImage
                src='../../../assets/images/partnersImages/mercadoPago.png'
                alt=''
                quality={100}
              />
            </div>

            <div className='partnerLogo'>
              <StaticImage
                src='../../../assets/images/partnersImages/scrumAliance.png'
                alt=''
                quality={100}
              />
            </div>

            <div className='partnerLogo'>
              <StaticImage
                src='../../../assets/images/partnersImages/shopifyPlusPartner.png'
                alt=''
                quality={100}
              />
            </div>

            <div className='partnerLogo'>
              <StaticImage
                src='../../../assets/images/partnersImages/theEyePartner.png'
                alt=''
                quality={100}
              />
            </div>

            <div className='partnerLogo'>
              <StaticImage
                src='../../../assets/images/partnersImages/vmware.png'
                alt=''
                quality={100}
              />
            </div>

            <div className='partnerLogo'>
              <StaticImage
                src='../../../assets/images/partnersImages/vtexPartner.png'
                alt=''
                quality={100}
              />
            </div>
          </Marquee>
        </div>

      </div>

    </div>
  )
}
