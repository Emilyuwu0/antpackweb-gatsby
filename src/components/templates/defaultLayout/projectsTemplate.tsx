import HeroProyectSec from '@/components/organisms/heroProyectSec/heroProyectSec'
import React, { useEffect, useRef, useState } from 'react'

import './projectsTemplate.scss'

const data = {
  paragraph: 'Hola mundo',
  title: 'test'
}

export default function ProjectsTemplate() {
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


  //backgroun change color

  const bgChange = (color: string) => {
    const contain = containerRef.current
    gsap.to(contain.querySelector('.proj_section_4'), {
      backgroundColor: color,
      duration: 2
    })
  }

  const pointerChangeScroll = (show: boolean) => {
    const contain = containerRef.current
    if (show) {
      console.log('entro')
      gsap.to(contain.querySelector('.cursor-dot-outline'), {
        backgroundImage: 'url(/images/dragIcon.svg)',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
      })
    } else {
      console.log('salio')
      gsap.to(contain.querySelector('.cursor-dot-outline'), {
        backgroundImage: 'none',
      })
    }
  }
  return (
    <div className='wrapper' ref={containerRef}>
      <div ref={dotOutline} className={'cursor-dot-outline'}></div>
      <div ref={dot} className={'cursor-dot'}></div>
      <HeroProyectSec data={data}
        enterHoverText={() => {
          onPositionTitle.current = true
          toggleCursorTitles()
        }
        }

        leaveHoverText={() => {
          onPositionTitle.current = false
          toggleCursorTitles()
        }} />

    </div>
  )
}
