import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";
import './newConAlert.css'
const newConAlert = ({ handleClose }) => {
  
  
  return (
    <div className='motionDiv'>
        <motion.div
        className="container"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{type: "spring",stiffness: 260,damping: 20}}
      >
        <div className='coLgFrst'>
          <div className='connTit'>
            <h3>New Connection</h3>
          </div>
          <div className='xMarkIcon'>
            <FontAwesomeIcon icon={faXmark} className='xMark' onClick={handleClose}/>
          </div>
        </div>
        <div className='itemsConn'>
          <div className='itemConn1'>
            <label><mark style={{color:'red',backgroundColor:'transparent'}}>*</mark> Host</label>
            <input type='text' placeholder='127.0.0.1'/>
          </div>
          <div className='itemConn2'>
            <label><mark style={{color:'red',backgroundColor:'transparent'}}>*</mark> Port</label>
            <input type='number' placeholder='6379'/>
          </div>
          <div className='itemConn3'>
            <label>Password</label>
            <input type='password' placeholder='Auth'/>
          </div>
          <div className='itemConn4'>
            <label>Username</label>
            <input type='text' placeholder='ACL in Redis > = 6.0'/>
          </div>
          <div className='itemConn5'>
            <label>Connection Name</label>
            <input type='text' placeholder='Connection name'/>
          </div>
          <div className='itemConn6'>
            <label>Separator</label>
            <input type='text' placeholder=':'/>
          </div>
        </div>
        <div className='butnReq'>
          <button className='cacelBtn'>Cancel</button>
          <button className='okBtn'>OK</button>
        </div>
      </motion.div>
      </div>
  )
}

export default newConAlert