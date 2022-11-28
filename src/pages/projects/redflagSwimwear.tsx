import Footer from '@/components/organisms/footer/footer'
import Header from '@/components/organisms/header/header'
import HeroProyectSec from '@/components/organisms/heroProyectSec/heroProyectSec'
import ProjectsTemplate from '@/components/templates/defaultLayout/projectsTemplate'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'

const data = {
  header: {
    colorText: '#fff',
    paragraph: 'website design',
    title: 'redflag <br/> swimwear',
    img: <StaticImage
      src='../../assets/images/projects/Banner_principalRF.png'
      alt=""
      style={{ position: 'absolute' }}
      className='heroImage'
    />
  },
  section_1: {
    subtitle: 'overview',
    title: 'challenge',
    paragraph: `REDFLAG wanted to expand their brand presence into other cities, and countries. <br/> <br/>
      The brand needed a robust e-Commerce platform which could provide fulfillment solutions for their national 
      and international markets.`,
    data: [
      {
        title: 'SERVICES PROVIDED',
        elements: [
          { title: 'Consulting' },
          { title: 'Web design' },
          { title: 'Web development' }
        ]
      },
      {
        title: 'TECHNOLOGIES',
        elements: [
          { title: 'Wordpress' },
          { title: 'MySQL' }
        ]
      },
      {
        title: 'YEAR',
        elements: [
          { title: '2020' }
        ]
      }
    ]
  },
  section_2: {
    img: '/images/section_2_img.png'
  },
  section_3: {
    subtitle: 'overview',
    title: 'STRATEGY',
    content: '<p>Develop the shopping platform in Shopify. Configure real-time reporting for in-site analytics.</p>' +
      '<p>Automate the fulfillment operations with on demand quotes from shipping providers.</p>' +
      '<p>Easily track returns and refunds.</p>'
  },
  section_4: {
    subtitle: 'overview',
    title: 'PLATFORM',
    img: <StaticImage
      src='../../assets/images/projects/Web-redflag.png'
      alt=""
      className="image"
      style={{ height: '200vh' }}
    />,
    background_color: '#E9213E',
    background_color_hover: 'blue'
  },
  section_5: {
    img: <StaticImage
      src='../../assets/images/projects/redflagBanner3.png'
      alt=""
      style={{ position: 'absolute' }}
      className='img'
    />,
    content: `80% of international sales take place on the site. E-mail marketing campaigns for subscribers increase <br/>
       recurring purchases by 2x. Simple product and inventory management.`
  },
  section_6: [
    { title: '80%', subtitle: 'International sales' },
    { title: '2x', subtitle: 'Marketing campaings' },
  ],
  section_7: {
    background_color: '#000000',
    data: [
      {
        img: <StaticImage
          src='../../assets/images/projects/mobile1redflag_.png'
          alt=""
          className='page'
        />
      },
      {
        img: <StaticImage
          src='../../assets/images/projects/mobile2redflag_.png'
          alt=""
          className='page'
        />
      },
      {
        img: <StaticImage
          src='../../assets/images/projects/mobile3redflag_.png'
          alt=""
          className='page'
        />
      },
      {
        img: <StaticImage
          src='../../assets/images/projects/mobile4redflag_.png'
          alt=""
          className='page'
        />
      },
      {
        img: <StaticImage
          src='../../assets/images/projects/mobile5redflag_.png'
          alt=""
          className='page'
        />
      },
      {
        img: <StaticImage
          src='../../assets/images/projects/mobile6redflag_.png'
          alt=""
          className='page'
        />
      },
      {
        img: <StaticImage
          src='../../assets/images/projects/mobile7redflag_.png'
          alt=""
          className='page'
        />
      },
      {
        img: <StaticImage
          src='../../assets/images/projects/mobile8redflag_.png'
          alt=""
          className='page'
        />
      },
    ]
  },
  section_8: {
    title: 'Next project',
    subtitle: 'Captiva',
    img: <StaticImage
      src='../../assets/images/projects/BannerPrincipalCap.png'
      alt=""
      style={{ position: 'absolute' }}
      className='img'
    />,
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br />
      tempor incididunt ut labore et dolore magna aliqua.`,
    background_color: '#FFF100',
    link: '#',
    arrowColor: 'white'
  }
}

export default function redflagSwimwear() {
  return (
    <>
      <ProjectsTemplate projectInfo={data} />
    </>
  )
}
