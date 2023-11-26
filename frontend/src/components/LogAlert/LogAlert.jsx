import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";
import './LogAlert.css'


const LogAlert = ({handleClose}) => {
   
  return (
    <div className='LogMotionDiv'>
        <motion.div
        className="LogContainer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{type: "spring",stiffness: 260,damping: 20}}
      >
        <div className='LogColFst'>
          <div className='LogTit'>
            <h3>Log</h3>
          </div>
          <div className='LogxMarkIcon'>
            <FontAwesomeIcon icon={faXmark} className='LogxMark' onClick={handleClose}/>
          </div>
        </div>
        <div className='LogItems'>
            <div className='LogCli'>
               <div className='LogData'>
                    <span className='Time'>21:15:02</span>
                    <span className='Separatore1'>-</span>
                    <span className='ConnName'>[Test]</span>
                    <span className='Separatore2'>-</span>
                    <span className='Req'>client</span>
                    <span className='ReqDec'>set name test</span>
                    <span className='Ping'>[1.85ms]</span>
               </div>
               <div className='LogData'>
                    <span className='Time'>21:15:02</span>
                    <span className='Separatore1'>-</span>
                    <span className='ConnName'>[Test]</span>
                    <span className='Separatore2'>-</span>
                    <span className='Req'>client</span>
                    <span className='ReqDec'>set name test</span>
                    <span className='Ping'>[1.85ms]</span>
               </div>
               <div className='LogData'>
                    <span className='Time'>21:15:02</span>
                    <span className='Separatore1'>-</span>
                    <span className='ConnName'>[Test]</span>
                    <span className='Separatore2'>-</span>
                    <span className='Req'>client</span>
                    <span className='ReqDec'>set name test</span>
                    <span className='Ping'>[1.85ms]</span>
               </div>
               <div className='LogData'>
                    <span className='Time'>21:15:02</span>
                    <span className='Separatore1'>-</span>
                    <span className='ConnName'>[Test]</span>
                    <span className='Separatore2'>-</span>
                    <span className='Req'>client</span>
                    <span className='ReqDec'>set name test</span>
                    <span className='Ping'>[1.85ms]</span>
               </div>
               <div className='LogData'>
                    <span className='Time'>21:15:02</span>
                    <span className='Separatore1'>-</span>
                    <span className='ConnName'>[Test]</span>
                    <span className='Separatore2'>-</span>
                    <span className='Req'>client</span>
                    <span className='ReqDec'>set name test</span>
                    <span className='Ping'>[1.85ms]</span>
               </div>
               <div className='LogData'>
                    <span className='Time'>21:15:02</span>
                    <span className='Separatore1'>-</span>
                    <span className='ConnName'>[Test]</span>
                    <span className='Separatore2'>-</span>
                    <span className='Req'>client</span>
                    <span className='ReqDec'>set name test</span>
                    <span className='Ping'>[1.85ms]</span>
               </div>
               <div className='LogData'>
                    <span className='Time'>21:15:02</span>
                    <span className='Separatore1'>-</span>
                    <span className='ConnName'>[Test]</span>
                    <span className='Separatore2'>-</span>
                    <span className='Req'>client</span>
                    <span className='ReqDec'>set name test</span>
                    <span className='Ping'>[1.85ms]</span>
               </div>
               <div className='LogData'>
                    <span className='Time'>21:15:02</span>
                    <span className='Separatore1'>-</span>
                    <span className='ConnName'>[Test]</span>
                    <span className='Separatore2'>-</span>
                    <span className='Req'>client</span>
                    <span className='ReqDec'>set name test</span>
                    <span className='Ping'>[1.85ms]</span>
               </div>
               <div className='LogData'>
                    <span className='Time'>21:15:02</span>
                    <span className='Separatore1'>-</span>
                    <span className='ConnName'>[Test]</span>
                    <span className='Separatore2'>-</span>
                    <span className='Req'>client</span>
                    <span className='ReqDec'>set name test</span>
                    <span className='Ping'>[1.85ms]</span>
               </div>
               <div className='LogData'>
                    <span className='Time'>21:15:02</span>
                    <span className='Separatore1'>-</span>
                    <span className='ConnName'>[Test]</span>
                    <span className='Separatore2'>-</span>
                    <span className='Req'>client</span>
                    <span className='ReqDec'>set name test</span>
                    <span className='Ping'>[1.85ms]</span>
               </div>
               <div className='LogData'>
                    <span className='Time'>21:15:02</span>
                    <span className='Separatore1'>-</span>
                    <span className='ConnName'>[Test]</span>
                    <span className='Separatore2'>-</span>
                    <span className='Req'>client</span>
                    <span className='ReqDec'>set name test</span>
                    <span className='Ping'>[1.85ms]</span>
               </div>
               <div className='LogData'>
                    <span className='Time'>21:15:02</span>
                    <span className='Separatore1'>-</span>
                    <span className='ConnName'>[Test]</span>
                    <span className='Separatore2'>-</span>
                    <span className='Req'>client</span>
                    <span className='ReqDec'>set name test</span>
                    <span className='Ping'>[1.85ms]</span>
               </div>
               <div className='LogData'>
                    <span className='Time'>21:15:02</span>
                    <span className='Separatore1'>-</span>
                    <span className='ConnName'>[Test]</span>
                    <span className='Separatore2'>-</span>
                    <span className='Req'>client</span>
                    <span className='ReqDec'>set name test</span>
                    <span className='Ping'>[1.85ms]</span>
               </div>
               <div className='LogData'>
                    <span className='Time'>21:15:02</span>
                    <span className='Separatore1'>-</span>
                    <span className='ConnName'>[Test]</span>
                    <span className='Separatore2'>-</span>
                    <span className='Req'>client</span>
                    <span className='ReqDec'>set name test</span>
                    <span className='Ping'>[1.85ms]</span>
               </div>
               <div className='LogData'>
                    <span className='Time'>21:15:02</span>
                    <span className='Separatore1'>-</span>
                    <span className='ConnName'>[Test]</span>
                    <span className='Separatore2'>-</span>
                    <span className='Req'>client</span>
                    <span className='ReqDec'>set name test</span>
                    <span className='Ping'>[1.85ms]</span>
               </div>
               <div className='LogData'>
                    <span className='Time'>21:15:02</span>
                    <span className='Separatore1'>-</span>
                    <span className='ConnName'>[Test]</span>
                    <span className='Separatore2'>-</span>
                    <span className='Req'>client</span>
                    <span className='ReqDec'>set name test</span>
                    <span className='Ping'>[1.85ms]</span>
               </div>
               <div className='LogData'>
                    <span className='Time'>21:15:02</span>
                    <span className='Separatore1'>-</span>
                    <span className='ConnName'>[Test]</span>
                    <span className='Separatore2'>-</span>
                    <span className='Req'>client</span>
                    <span className='ReqDec'>set name test</span>
                    <span className='Ping'>[1.85ms]</span>
               </div>
               <div className='LogData'>
                    <span className='Time'>21:15:02</span>
                    <span className='Separatore1'>-</span>
                    <span className='ConnName'>[Test]</span>
                    <span className='Separatore2'>-</span>
                    <span className='Req'>client</span>
                    <span className='ReqDec'>set name test</span>
                    <span className='Ping'>[1.85ms]</span>
               </div>
               <div className='LogData'>
                    <span className='Time'>21:15:02</span>
                    <span className='Separatore1'>-</span>
                    <span className='ConnName'>[Test]</span>
                    <span className='Separatore2'>-</span>
                    <span className='Req'>client</span>
                    <span className='ReqDec'>set name test</span>
                    <span className='Ping'>[1.85ms]</span>
               </div>
            </div>
            <div className='LogGest'>
                <input type='search' placeholder='Keyword Search' className='InpSear'/>
                <input type='checkbox' className='OnlyBox'/>
                <label>Only Write</label>
            </div>
        </div>
        <div className='butnReq'>
          <button className='cacelBtn'>Cancel</button>
          <button className='clearBtn'>Clear</button>
        </div>
      </motion.div>
      </div>
  )
}

export default LogAlert