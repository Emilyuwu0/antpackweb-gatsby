import React from 'react';
import './projects.scss';
/* import Img from '../../assets/backgrounds/red_flag.png'; */

export default function index() {
  const viewsProject = [
    {
      background: ``,
      subtitle: `Website Design`,
      title: `RedFlag swimwear`,
      subtitleSectionTwo: `overview`,
      titleSectionTwo: `Challenge`,
      descriptionSectionTwo: `REDFLAG wanted to expand their brand presence into other cities, and countries. 
       `,
      complementarySectionTwo: `SERVICES PROVIDED`,
      backgroundSectionTwo: `overview`,
      subtitleSectionThree: `overview`,
      titleSectionThree: `Strategy`,
      descriptionSectionThree: `Develop the shopping platform in Shopify. Configure real-time reporting for in-site analytics. 
      `,

      subtitleSectionFour: `overview`,
      titleSectionFour: `Platform`,
    },
  ];

  return (
    <div className="containerGeneral">
      {viewsProject.map((data: any, index: number) => {
        return (
          <>
            <div className="containerSections">
              <span className="subtitlePageProduct colorWhiteText">
                {' '}
                {data.subtitle}{' '}
              </span>
              <span className="titlePageProduct colorWhiteText">
                {' '}
                {data.title}{' '}
              </span>
            </div>
            <div>
              <div className="gridColumns">
                <span>Back</span>
                <span>Scroll</span>
                <span>Next</span>
              </div>
            </div>
            <div>
              <div className="gridTwoColumns">
                {' '}
                <div className="columns">
                  {' '}
                  <span className="subtitlePageProduct ">
                    {data.subtitleSectionTwo}
                  </span>
                  <span className="titleSubtitlePageProduct">
                    {data.titleSectionTwo}
                  </span>
                  <span className="descriptionTitle divContainerTwo">
                    {data.descriptionSectionTwo}
                  </span>
                </div>
                <div className="complementaryText">
                  <span>{data.complementarySectionTwo}.</span>
                </div>
              </div>
            </div>
            <div className="divContainerImgAlone">img</div>
            <div className="divContainerThree">
              <span className="subtitlePageProduct">
                {data.subtitleSectionThree}
              </span>
              <span className="titleSubtitlePageProduct">
                {data.titleSectionThree}
              </span>
              <span className="descriptionTitle divContainerThree">
                {data.descriptionSectionThree}
              </span>
            </div>
            <div className="gridTwoColumns divContainerFour colorWhiteText">
              <div>
                <span className="subtitlePageProduct">
                  {' '}
                  {data.subtitleSectionFour}
                </span>
                <span className="titleSubtitlePageProduct">
                  {' '}
                  {data.titleSectionFour}{' '}
                </span>
              </div>
              <div>2</div>
            </div>
          </>
        );
      })}
    </div>
  );
}
