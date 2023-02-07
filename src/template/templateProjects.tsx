import { graphql, Link } from 'gatsby';

import DragComponentProject from '@/components/organisms/DragComponentProject/DragComponentProject';
import Footer from '@/components/organisms/footer/footer';
import Header from '@/components/organisms/header/header';
import HeroProyectSec from '@/components/organisms/heroProyectSec/heroProyectSec'
import { getImage, StaticImage } from 'gatsby-plugin-image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef, useState } from 'react'
import Marquee from 'react-fast-marquee';

import ProjectsTemplate from '@/components/templates/defaultLayout/projectsTemplate'

import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next'

import projectsES from '../translations/es/projects.json'
import projectsEN from '../translations/en/projects.json'

import Arrow from '../assets/icons/arrow.svg'

const HtmlToReactParser = require('html-to-react').Parser;


import './projectsTemplate.scss'


interface projectsProps {
  data: any,
  projectInfo: any,
}

export default function Projects({ data, projectInfo }: projectsProps) {

  const [lenguage, setLenguage] = useState('en')

  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const backgroundHeader = getImage(
    markdownRemark.frontmatter.backgroundHeaderProject?.childImageSharp,
  );

  const htmlToReactParser = new HtmlToReactParser();

  const data2 = {
    header: {
      colorText: '#fff',
      paragraph: frontmatter.subtitle,
      title: frontmatter.title,
      img: frontmatter.backgroundHeaderProject.publicURL
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


  i18next.init({
    interpolation: { escapeValue: false },
    lng: lenguage,
    resources: {
      es: {
        projects: projectsES
      },
      en: {
        projects: projectsEN
      },
    }
  })

  return (
    <I18nextProvider i18n={i18next}>
      <ProjectsTemplate projectInfo={data2} />
    </I18nextProvider>
  )
}

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        subtitle
        subtitleSectionTwo
        titleSectionTwo
        descriptionSectionTwo
        complementarySectionTwo
        complementarySectionListItemOne
        complementarySectionListItemTwo
        complementarySectionListItemThree
        complementarySectionListItemFour
        complementarySectionListItemFive
        complementarySectionListItemSix
        subtitleSectionThree
        titleSectionThree
        descriptionSectionThree
        subtitleSectionFour
        titleSectionFour
        backgroundHeaderProject {
          childImageSharp {
            id
          }
          size
          name
          publicURL
          relativePath
        }
      }
    }
  }
`;
