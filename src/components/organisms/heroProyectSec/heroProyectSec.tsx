import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "react-i18next";
const HtmlToReactParser = require('html-to-react').Parser;

import './heroProyectSec.scss'

export default function HeroProyectSec({ data, enterHoverText, leaveHoverText }: any) {
  const [t] = useTranslation('projects')
  const htmlToReactParser = new HtmlToReactParser
  console.log('aqiuiii', data)
  return (
    <div data-scroll-section
    >
      {
        data
          ?
          <div className="wrapper" style={{ backgroundImage: 'url(../../../assets/images/sliderImages/mubicoScreen.jpg)' }} data-scroll>

            <div
              className="heroImage"
              style={{
                background: `url(${data.img})`,
                backgroundRepeat: 'no - repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: '100%',
                position: 'absolute'
              }}
            >
            </div>
            <div className="heroContainer">
              <div
                onMouseEnter={enterHoverText}
                onMouseLeave={leaveHoverText}
                style={{ display: 'inline-block', flexDirection: 'column', color: data?.colorText }}
              >
                <p data-scroll data-scroll-repeat data-scroll-class='text_anim' className="heroParagraph">{htmlToReactParser.parse(t(data.paragraph))}</p> <br />
                <h1 data-scroll data-scroll-repeat data-scroll-class='text_anim' className="heroTitle">{htmlToReactParser.parse(t(data.title))}</h1>
              </div>
            </div>
          </div>
          : null
      }
    </div >
  )
}
