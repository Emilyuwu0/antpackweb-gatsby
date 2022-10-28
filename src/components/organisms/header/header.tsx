import Icon from '@/components/atoms/icon/icon'
import React, { useEffect, useRef, useState } from 'react'
import './header.scss'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'gatsby';
import Title from '@/components/atoms/title/title';

interface headerProps {
  color: string
}

export default function Header({ color }: headerProps) {
  gsap.registerPlugin(ScrollTrigger);
  const [isOpen, setisOpen] = useState(false)

  useEffect(() => {

  }, [])


  return (
    <div className='headerContainer'>
      {
        color === 'white' ?
          <div onClick={() => setisOpen(!isOpen)} className='menuAnim'>
            <Icon type='menu' />
          </div>
          : color === 'black' ?
            <div onClick={() => setisOpen(!isOpen)} className='menuAnim2'>
              <Icon type='menu2' />
            </div>
            : <></>
      }
      <div className={`navigation-menu ${isOpen ? "backdrop" : "" || !isOpen ? "hidden" : ""}`}>
        <div className={`${isOpen ? "backdrop2" : "" || !isOpen ? "hidden2" : ""}`}>
          <div className={`${isOpen ? "content" : "" || !isOpen ? "hidden2" : ""}`}>
            {
              isOpen ?
                <>
                  <div onClick={() => setisOpen(!isOpen)} className='close'>
                    <Title level='h1' text='X' />
                  </div>
                  <ul>
                    <li>
                      <Link onClick={() => setisOpen(false)} to='#ourCraft'>
                        <Title level='h3' text='Our craft' />
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => setisOpen(false)} to='#services'>
                        <Title level='h3' text='Services' />
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => setisOpen(false)} to='#company'>
                        <Title level='h3' text='Company' />
                      </Link>
                    </li>
                    <li>
                      <Link onClick={() => setisOpen(false)} to='#contact'>
                        <Title level='h3' text='Contact' />
                      </Link>
                    </li>
                  </ul>
                </>
                :
                <></>
            }
          </div>
        </div>
      </div>
    </div >
  )
}
