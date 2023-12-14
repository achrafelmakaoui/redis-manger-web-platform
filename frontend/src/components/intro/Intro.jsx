import React, { useRef, useEffect } from 'react';
import './Intro.css';
import Lottie from 'lottie-react';
import Animation from '../assets/animation_lo96y3fm.json';
import Looding from '../assets/qX9H4WHxr9.json';
import DarkAnimation from '../assets/anmdrkQ44Xwbf6vp.json';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../ThemeContext';

const Intro = () => {
  const animationRef = useRef(null);
  const loodingRef = useRef(null);
  const DarkAnimationRef = useRef(null);
  const navigate = useNavigate();
  const { theme } = useTheme();

  useEffect(() => {
    if (animationRef.current && loodingRef.current) {
      animationRef.current.setSpeed(10);
      loodingRef.current.setSpeed(2.3);
    }
    if (theme === 'dark' && DarkAnimationRef.current) {
      DarkAnimationRef.current.setSpeed(10);
    }
    setTimeout(() => {
      document.body.classList.add('rocketContent');
    });
  }, [theme, DarkAnimationRef]);
  

  setTimeout(() => {
    document.body.classList.add('loodingOpacity');
    loodingRef.current.pause();
    
  },[4000]);

  setTimeout(() => {
    document.body.classList.remove('rocketContent');
    navigate('/Dashboard');
  },[5000]);

  
  return (
    <div className='introBg'>
      <div className='introDiv'>
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
