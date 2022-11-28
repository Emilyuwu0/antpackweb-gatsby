import { StaticImage } from "gatsby-plugin-image";
const HtmlToReactParser = require('html-to-react').Parser;

import './heroProyectSec.scss'

export default function HeroProyectSec({ data, enterHoverText, leaveHoverText }: any) {
  const htmlToReactParser = new HtmlToReactParser
  return (
    <div data-scroll-section
    >
      {
        data
          ?
          <div className="wrapper" style={{ backgroundImage: 'url(../../../assets/images/sliderImages/mubicoScreen.jpg)' }} data-scroll>
            {data.img}
            <div className="heroContainer">
              <div
                onMouseEnter={enterHoverText}
                onMouseLeave={leaveHoverText}
                style={{ display: 'inline-block', flexDirection: 'column', color: data?.colorText }}
              >
                <p data-scroll data-scroll-repeat data-scroll-class='text_anim' className="heroParagraph">{htmlToReactParser.parse(data.paragraph)}</p> <br />
                <h1 data-scroll data-scroll-repeat data-scroll-class='text_anim' className="heroTitle">{htmlToReactParser.parse(data.title)}</h1>
              </div>
            </div>
          </div>
          : null
      }
    </div>
  )
}
