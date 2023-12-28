import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";
import './LogAlert.css'
import axios from 'axios';


const LogAlert = ({handleClose}) => {
     const [logs,setLogs]=useState([])
     // useEffect(() => {
     //      const getLogs = async () => {  
     //        let url = "http://192.168.1.105:5000/logs";
     //        try {
     //            const res = await axios.get(url);
     //            setLogs(res.data);
     //            console.log(res.data)
     //        } catch (err) {
     //            console.log(err);
     //        }
     //      };
     //      getLogs();
     //    },[]);
     // const logRegex = /^(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2},\d{3}) - (\w+) - (\w+\[\d+\]) - (\w+)$/;
     const logRegex = /^(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2},\d{3}) - ([\w\s-]+) - (\w+\[\d+\]|\w+) - (\w+)$/;

     useEffect(() => {
     const getLogs = async () => {  
          let url = "http://192.168.1.105:5000/logs";
          try {
               const res = await axios.get(url);
               setLogs(res.data);
               console.log(res.data);

               // Apply the regular expression to each log entry
               res.data.forEach(logEntry => {
                    const match = logEntry.match(logRegex);

                    if (match) {
                         const [, time, command, db, connName] = match;
                         console.log("Time:", time);
                         console.log("Command:", command);
                         console.log("DB:", db);
                         console.log("connName:", connName);
                    } else {
                         console.error("Invalid log entry format:", logEntry);
                    }
               });
          } catch (err) {
               console.log(err);
          }
     };

     getLogs();
     }, []);

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
               {logs.map((log,index)=>(
                    <div className='LogData'>
                         <span className='Time'>{log}</span>
                    </div>
               ))}
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