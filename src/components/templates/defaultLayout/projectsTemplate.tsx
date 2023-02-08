import DragComponentProject from '@/components/organisms/DragComponentProject/DragComponentProject';
import Footer from '@/components/organisms/footer/footer';
import Header from '@/components/organisms/header/header';
import HeroProyectSec from '@/components/organisms/heroProyectSec/heroProyectSec'
import { StaticImage } from 'gatsby-plugin-image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react'
import Marquee from 'react-fast-marquee';
import { useTranslation } from 'react-i18next';

import Arrow from '../../../assets/icons/arrow.svg'

const HtmlToReactParser = require('html-to-react').Parser;


import './projectsTemplate.scss'


interface projectsTemplateProps {
  projectInfo: any,
}

export default function ProjectsTemplate({ projectInfo }: projectsTemplateProps) {
  const [lenguage, setLenguage] = useState('en')

  const [t] = useTranslation('projects')

  const htmlToReactParser = new HtmlToReactParser();

  gsap.registerPlugin(ScrollTrigger);

  const containerRef = useRef<any>(null);

  // setInterval(() => {
  //     console.log(scroll)
  // }, 100)


  const delay = 18;

  const dot = useRef<any>(null);
  const dotOutline = useRef<any>(null);

  const [showcursor, setshowcursor] = useState(false)

  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);
  const onPositionTitle = useRef(false);

  const endX = useRef<any>(containerRef.current);
  const endY = useRef<any>(containerRef.current);
  const _x = useRef(0);
  const _y = useRef(0);

  const requestRef = useRef<any>(null);


  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      dot.current.style.opacity = 1;
      dotOutline.current.style.opacity = 1;
    } else {
      dot.current.style.opacity = 0;
      dotOutline.current.style.opacity = 0;
    }
  };

  const toggleCursorSize = () => {
    if (cursorEnlarged.current) {
      dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
      dotOutline.current.style.transform = 'translate(-50%, -50%) scale(3)';

    } else {
      dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
      dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  };

  const toggleCursorTitles = () => {
    if (onPositionTitle.current) {
      dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
      dot.current.style.background = 'transparent';
      dotOutline.current.style.background = 'transparent';
      dotOutline.current.style.border = 'solid 1px #FFF100';
      dotOutline.current.style.transform = 'translate(-50%, -50%) scale(2)';

    } else {
      dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
      dot.current.style.background = '#FFF100';
      dotOutline.current.style.border = 'none';
      dotOutline.current.style.background = '#FFF100';
      dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)';
    }
  };

  const mouseOverEvent = () => {
    cursorEnlarged.current = true;
    toggleCursorSize();
  };

  const mouseOutEvent = () => {
    cursorEnlarged.current = false;
    toggleCursorSize();
  };

  const mouseEnterEvent = () => {
    cursorVisible.current = true;
    toggleCursorVisibility();
  };

  const mouseLeaveEvent = () => {
    cursorVisible.current = false;
    toggleCursorVisibility();
  };

  const mouseMoveEvent = (e: any) => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    endX.current = e.pageX;
    endY.current = e.pageY;

    dot.current.style.top = endY.current + 'px';
    dot.current.style.left = endX.current + 'px';
  };

  const animateDotOutline = () => {
    _x.current += (endX.current - _x.current) / delay;
    _y.current += (endY.current - _y.current) / delay;

    dotOutline.current.style.top = _y.current + 'px';
    dotOutline.current.style.left = _x.current + 'px';

    requestRef.current = requestAnimationFrame(animateDotOutline);
  };


  useEffect(() => {
    const wrapper: any = containerRef.current;

    wrapper.addEventListener('mousedown', mouseOverEvent);
    wrapper.addEventListener('mouseup', mouseOutEvent);
    wrapper.addEventListener('mousemove', mouseMoveEvent);
    wrapper.addEventListener('mouseenter', mouseEnterEvent);
    wrapper.addEventListener('mouseleave', mouseLeaveEvent);

    if (dot.current && dotOutline.current) {
      animateDotOutline();
    }

    return () => {
      wrapper.removeEventListener('mousedown', mouseOverEvent);
      wrapper.removeEventListener('mouseup', mouseOutEvent);
      wrapper.removeEventListener('mousemove', mouseMoveEvent);
      wrapper.removeEventListener('mouseenter', mouseEnterEvent);
      wrapper.removeEventListener('mouseleave', mouseLeaveEvent);

      cancelAnimationFrame(requestRef.current);
    };
  }, []);


  useEffect(() => {

    const animation = () => {
      gsap.fromTo('.parallaxImageSec2', {
        y: -300,
      }, {
        y: 300,
        duration: 5,
        scrollTrigger: {
          trigger: '.parallaxImageSec2',
          start: "top",
          end: "bottom",
          scrub: true,
          markers: true,
        }
      })

      gsap.fromTo('.titles', {
        y: 0,
      }, {
        y: 1500,
        scrollTrigger: {
          trigger: '.projSection4',
          start: "top",
          end: "bottom",
          scrub: true,
          markers: true,
        }
      })
    }

    requestAnimationFrame(animation)
  }, [])



  //backgroun change color

  const bgChange = (color: string) => {
    const contain = containerRef.current
    gsap.to(contain.querySelector('.projSection4'), {
      backgroundColor: color,
      duration: 2
    })
  }

  const pointerChangeScroll = (show: boolean) => {
    const contain = containerRef.current
    if (show) {
      console.log('entro')
      gsap.to(contain.querySelector('.cursor-dot-outline'), {
        // backgroundImage: 'url(../../../assets/images/dragIcon.svg)',
        // backgroundPosition: 'center',
        // backgroundSize: 'contain',
      })
    } else {
      console.log('salio')
      gsap.to(contain.querySelector('.cursor-dot-outline'), {
        backgroundImage: 'none',
      })
    }
  }
  return (
    <>
      <Header lenguage={lenguage} setLenguage={setLenguage} color='black' />
      <div className='wrapper' ref={containerRef}>
        <div ref={dotOutline} className={'cursor-dot-outline'}></div>
        <div ref={dot} className={'cursor-dot'}></div>

        <HeroProyectSec data={projectInfo.header}
          enterHoverText={() => {
            onPositionTitle.current = true
            toggleCursorTitles()
          }
          }

          leaveHoverText={() => {
            onPositionTitle.current = false
            toggleCursorTitles()
          }} />

        <div className="projSection1">
          <div className='projectsNavbar'>
            <button>BACK</button>
            <button>SCROLL</button>
            <button>NEXT</button>
          </div>
          <div className='content'>
            <div
              onMouseEnter={() => {
                onPositionTitle.current = true
                toggleCursorTitles()
              }}
              onMouseLeave={() => {
                onPositionTitle.current = false
                toggleCursorTitles()
              }}
            >
              <h2 >{htmlToReactParser.parse(projectInfo?.section_1.subtitle)}</h2>
              <h1 >{htmlToReactParser.parse(projectInfo?.section_1.title)}</h1>
            </div>

            <p>{htmlToReactParser.parse(projectInfo?.section_1.paragraph)}</p>
          </div>
          <div className='infoContent'>
            {
              projectInfo?.section_1.data.map((item: any) => {
                return (
                  <>
                    <h3 >{item.title}</h3>
                    <ul>
                      {
                        item.elements.map((elem: any) => {
                          return (
                            <>
                              <li >{elem.title}</li>
                            </>
                          )
                        })
                      }
                    </ul>
                  </>
                )
              })
            }
          </div>
        </div>

        <div className="projSection2">
          <StaticImage
            src='../../../assets/images/sliderImages/mubicoScreen.jpg'
            alt=""
            className="parallaxImageSec2"
          />
        </div>

        <div className="projSection3">
          <div>
            <div>
              <div className='content'>
                <div
                  onMouseEnter={() => {
                    onPositionTitle.current = true
                    toggleCursorTitles()
                  }}
                  onMouseLeave={() => {
                    onPositionTitle.current = false
                    toggleCursorTitles()
                  }}
                >
                  <h2 >{projectInfo?.section_3.subtitle}</h2>
                  <h1 >{projectInfo?.section_3.title}</h1>
                </div>
                <p>
                  {htmlToReactParser.parse(projectInfo?.section_3.content)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="projSection4"
          style={{ backgroundColor: projectInfo?.section_4.background_color }}
          onMouseEnter={() => {
            bgChange(projectInfo?.section_4.background_color_hover || '')
          }}
          onMouseLeave={() => {
            bgChange(projectInfo?.section_4.background_color || '')
          }}>
          {
            projectInfo?.section_4.scrollImage
              ?
              <>
                <div className="content">
                  <div
                    onMouseEnter={() => {
                      onPositionTitle.current = true
                      toggleCursorTitles()
                    }}
                    onMouseLeave={() => {
                      onPositionTitle.current = false
                      toggleCursorTitles()
                    }}
                    className='titles'>
                    <h2  >{projectInfo?.section_4.subtitle}</h2>
                    <h1 >{projectInfo?.section_4.title}</h1>
                  </div>
                </div>

                <div className="page">
                  <div className='scrollImages' style={{ display: 'flex' }}>
                    {/* <PhonesSliders over={mouseOverEvent} out={mouseOutEvent} enterPointer={() => pointerChangeScroll(true)} leavePointer={() => pointerChangeScroll(false)} data={projectInfo.section_4.images}></PhonesSliders> */}
                    {/* {
                                    projectInfo.section_4.images.map((item: any) => {
                                        return (
                                        <>
                                        <CardMedia component="img" image={item?.img} className="page" alt="AntPack" />                           
                                        </>
                                        )
                                        })
                                    } */}

                  </div>
                </div>
              </>
              :
              <>
                <div id='sec4_fixed_title' className="content">
                  <div data-scroll data-scroll-sticky data-scroll-offset='0, 700' data-scroll-target="#sec4" className='titles'>
                    <div
                      onMouseEnter={() => {
                        onPositionTitle.current = true
                        toggleCursorTitles()
                      }}
                      onMouseLeave={() => {
                        onPositionTitle.current = false
                        toggleCursorTitles()
                      }}
                    >
                      <h2  >{projectInfo?.section_4.subtitle}</h2>
                      <h1 >{projectInfo?.section_4.title}</h1>

                    </div>
                  </div>
                </div>
                <div className="page">

                  <div onMouseEnter={() => pointerChangeScroll(true)} onMouseLeave={() => pointerChangeScroll(false)} className='bg'>
                    {projectInfo?.section_4.img}
                  </div>
                </div>
              </>
          }
        </div>


        <div className="resultsSection"
          onMouseEnter={() => {
            onPositionTitle.current = true
            toggleCursorTitles()
          }}
          onMouseLeave={() => {
            onPositionTitle.current = false
            toggleCursorTitles()
          }}
        >
          <Marquee
            speed={100}
            className='sliderText'
            gradient={false}
            delay={-20}
            style={{ cursor: 'none' }}
          >
            <div className="ctnTitle">
              <label className='text1'>
                Results Results Results
              </label>
              <label className='text2'>
                Results &nbsp; Results &nbsp; Results &nbsp;
              </label>
            </div>
          </Marquee>

          <Marquee
            speed={50}
            className='sliderTextMobile'
            gradient={false}
            delay={-20}
          >
            <div className="ctn-title">
              <label className='text-2'>
                Result  Result  Result  &nbsp;
              </label>
            </div>
          </Marquee>
        </div>

        <div className="projSection5">
          <div>
            {projectInfo?.section_5.img}
          </div>
          <div>
            <p>
              {htmlToReactParser.parse(projectInfo?.section_5.content)}
            </p>
          </div>
        </div>

        <div className="projSection6">
          {
            projectInfo?.section_6.map((item: any) => {
              return (
                <>
                  <div className='content'>
                    <h1 >{item.title}</h1>
                    <h2 >{item.subtitle}</h2>
                  </div>
                </>
              )
            })
          }
        </div>

        <div onMouseEnter={() => pointerChangeScroll(true)} onMouseLeave={() => pointerChangeScroll(false)} className="projSection7">
          <DragComponentProject over={mouseOverEvent} out={mouseOutEvent} data={projectInfo?.section_7}></DragComponentProject>
        </div>


        <div className="projSection8" style={{ backgroundColor: projectInfo?.section_8.background_color, color: projectInfo?.section_8.color }}>

          <div>
            <h1 >{projectInfo?.section_8.title}</h1>
            <div className='content'>
              <h2  >{projectInfo?.section_8.subtitle}</h2>
              <p style={{ color: projectInfo?.section_8.color }}> {htmlToReactParser.parse(projectInfo?.section_8.content)}</p>
              <a href={projectInfo?.section_8.link}>

                <div style={{ background: projectInfo?.section_8.arrowBg, fill: projectInfo?.section_8.arrowColor }} className='icon'>
                  <Arrow />
                </div>
              </a>
            </div>
          </div>
          <div>
            {projectInfo?.section_8.img}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
