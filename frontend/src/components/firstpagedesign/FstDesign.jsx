import React, { useEffect } from 'react'
import ImgBg from '../images/3d-hands-fun-and-wild-handshake-of-white-skin-hands-1-2.png'
import Html from '../images/html-5-v1.png'
import Css from '../images/css3.png'
import ReactJs from '../images/react-v1.png'
import Flask from '../images/flask.png'
import Redux from '../images/redux.png'
import Redis from '../images/redis.png'
import Lottie from 'lottie-react';
import Ariel from '../assets/card_ariel.json';
import Cooding from '../assets/wired-outline-742-code.json';
import { useRef } from 'react'
import './FstDesign.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle} from '@fortawesome/free-solid-svg-icons'


const FstDesign = ({handelClick}) => {
    const ArielRef = useRef(null);
    const CoodingRef = useRef(null);

    useEffect(() => {
      if (ArielRef.current && CoodingRef.current) {
        ArielRef.current.setSpeed(1); // Update Lottie speed to 20 
        CoodingRef.current.setSpeed(1); // Update Lottie speed to 20 
      }
    }, []);

  return (
    <div className='fstDesign'>
        <div className='stLayout'>
            <div className='cardDes'>
            <div className='cardDesDesc'>
                <div className='cardDesDescTit'>
                <h3>Welcome Back <span class="wave">👋</span> To Your</h3>
                </div>
                <div className='cardDesDescSecTit'>
                <h2>Redis Magnet Management</h2>
                <Lottie lottieRef={ArielRef} animationData={Ariel} className='Ariel' />
                </div>
                <div className='cardBtn'>
                <button onClick={handelClick}>Start Connecting</button>
                </div>
            </div>
            <div className='cardDesVuis'>
                <img src={ImgBg} alt='hand'/>
            </div>
            </div>
        </div>
        <div className='fstDesignChild'>
            <div className='RedisCliDes'>
                <div className='cliTop'>
                    <FontAwesomeIcon icon={faCircle} className='circleIcon'/>
                    <FontAwesomeIcon icon={faCircle} className='circleIcon'/>
                    <FontAwesomeIcon icon={faCircle} className='circleIcon'/>
                </div>
                <div className='RedisMagnetCli'>
                    <br/>
                    <span className='animRead'>
                            redisMagnet&gt; PING<br/>
                            "PONG"<br/>
                            redisMagnet&gt; HSET user:1 name antirez vocation artist<br/>
                            (integer) 2<br/>
                            redisMagnet&gt; SET e 2.71<br/>
                            "OK"<br/>
                            redisMagnet&gt; INCRBYFLOAT e 0.43<br/>
                            "3.14"<br/>
                            redisMagnet&gt; RENAME e pi<br/>
                            "OK"<br/>
                            redisMagnet&gt; <span className='heartbeat'>!</span>
                    </span>
                </div>
            </div>
            <div className='toolUses'>
                <div className='topIcon'>
                    <Lottie lottieRef={CoodingRef} animationData={Cooding} className='Cooding' />
                </div>
                <div className='toolsDiv'>
                    <div className='frontTools'>
                        <div className='html'>
                            <img src={Html} alt='Html'/>
                            {/* <img src="https://skillicons.dev/icons?i=html" alt="skill-icon"/> */}
                        </div>
                        <div className='react'>
                            <img src={ReactJs} alt='ReactJs'/>
                            {/* <img src="https://skillicons.dev/icons?i=react" alt="skill-icon"/> */}
                        </div>
                        <div className='css'>
                            <img src={Css} alt='css'/>
                            {/* <img src="https://skillicons.dev/icons?i=css" alt="skill-icon"/> */}
                        </div>
                    </div>
                    <div className='backTools'>
                        <div className='flask'>
                            <img src={Flask} alt='flask'/>
                            {/* <img src="https://skillicons.dev/icons?i=flask" alt="skill-icon"/> */}

                        </div>
                        <div className='redis'>
                            <img src={Redis} alt='redis'/>
                            {/* <img src="https://skillicons.dev/icons?i=redis" alt="skill-icon"/> */}

                        </div>
                        <div className='redux'>
                            <img src={Redux} alt='redux'/>
                            {/* <img src="https://skillicons.dev/icons?i=redux" alt="skill-icon"/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>       
    </div>
  )
}

export default FstDesign