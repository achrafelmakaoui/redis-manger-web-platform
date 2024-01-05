import React from 'react'
import './Alertt.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const Alert = ({ handleClose }) => {
  return (
    <div className='AlertDes'>
        <div className='AlertContent'>
            <div className='CircleIconAlert'>
                <FontAwesomeIcon icon={faCircleCheck} className='succIcon' />
            </div>
            <div className='TextAlert'>
                <h2>Key Updated!</h2>
                <h4>Your Key has been successfully updated.</h4>
            </div>
            <div className='CloseAlertIcon'>
                <svg fill="#767676" height="16" width="16" viewBox="0 0 384 512" onClick={handleClose}>
                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                </svg>
            </div>
        </div>
        <span className='progress-bar'></span>
    </div>
  )
}

export default Alert