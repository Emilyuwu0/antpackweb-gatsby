import { StaticImage } from "gatsby-plugin-image";

import './heroProyectSec.scss'

export default function HeroProyectSec({ data, enterHoverText, leaveHoverText }: any) {
  return (
    <div data-scroll-section
    >
      {
        data
          ?
          <div className="wrapper" style={{ backgroundImage: 'url(../../../assets/images/sliderImages/mubicoScreen.jpg)' }} data-scroll>
            <StaticImage
              src='../../../assets/images/sliderImages/mubicoScreen.jpg'
              alt=""
              style={{ position: 'absolute' }}
              className='heroImage'
            />
            <div className="heroContainer">
              <div
                onMouseEnter={enterHoverText}
                onMouseLeave={leaveHoverText}
                style={{ display: 'inline-block', flexDirection: 'column' }}
              >
                <p data-scroll data-scroll-repeat data-scroll-class='text_anim' className="heroParagraph">{data.paragraph}</p> <br />
                <h1 data-scroll data-scroll-repeat data-scroll-class='text_anim' className="heroTitle">{data.title}</h1>
              </div>
            </div>
          </div>
          : null
      }
    </div>
  )
}
