import React, { useRef, useEffect } from 'react';
import './Intro.css';
import Lottie from 'lottie-react';
import Animation from '../assets/animation_lo96y3fm.json';
import Looding from '../assets/qX9H4WHxr9.json';
import DarkAnimation from '../assets/anmdrkQ44Xwbf6vp.json';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import { gsap, Power2 } from 'gsap';

const Intro = () => {
  const animationRef = useRef(null);
  const loodingRef = useRef(null);
  const DarkAnimationRef = useRef(null);
  const navigate = useNavigate();
  const { theme } = useTheme();
  
  const hero = useRef();
  const slider = useRef();
  
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        // This code will run after the GSAP animation is complete
        if (animationRef.current && loodingRef.current) {
          animationRef.current.setSpeed(10);
          loodingRef.current.setSpeed(2.3);
        }
        if (theme === 'dark' && DarkAnimationRef.current) {
          DarkAnimationRef.current.setSpeed(10);
        }
  
        // Set a timeout to add the 'rocketContent' class after a delay
        setTimeout(() => {
          document.body.classList.add('rocketContent');
        });
      },
    });
  
    tl.fromTo(hero.current, 1, { height: '0%' }, { height: '100%', ease: Power2.easeInOut })
      .fromTo(hero.current, 1.2, { width: '100%' }, { width: '80%', ease: Power2.easeInOut })
      .fromTo(slider.current, 1.3, { x: '-100%', opacity: 1 }, { x: '0%', ease: Power2.easeInOut }, '-=1.2');
  }, [theme, DarkAnimationRef, animationRef, loodingRef]);
  
  // Set timeout for the loading animation
  setTimeout(() => {
    document.body.classList.add('loodingOpacity');
    loodingRef.current.pause();
  }, 5200);
  
  // Set timeout for navigating to '/Dashboard'
  setTimeout(() => {
    document.body.classList.remove('rocketContent');
    navigate('/Dashboard');
  }, 5500);
  

  
  return (
    <div className='introBg' ref={slider}>
      <div className='introDiv' >
        <h1 text='RedisMagnet'>RedisMagnet</h1>
        {theme === 'light' ? (
          <Lottie lottieRef={animationRef} animationData={Animation} className='lottieAnm' />
        ) : (
          <Lottie lottieRef={DarkAnimationRef} animationData={DarkAnimation} className='darkModeAnimation' />
        )}
        <Lottie lottieRef={loodingRef} animationData={Looding} className='Looding' />
      </div>
    </div>
  );
};

export default Intro;
