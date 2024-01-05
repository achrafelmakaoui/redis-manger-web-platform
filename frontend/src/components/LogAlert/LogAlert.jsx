import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";
import './LogAlert.css'
import axios from 'axios';


const LogAlert = ({handleClose}) => {
    const [logs,setLogs]=useState([]);
    useEffect(() => {
      const getLogs = async () => {
        let url = "http://localhost:5000/logs";
        try {
          const res = await axios.get(url);
          console.log(res.data);

          const formattedLogs = res.data.map((logEntry, index) => {
            const logParts = logEntry.split(' - ');

            if (logParts.length) {
              const time = logParts[0];
              const connName = logParts[1];
              const dbAndCommand = logParts[2].split(' ');
              const command = dbAndCommand[0];
              const db = dbAndCommand.slice(1).join(' ');

              console.log(`Log Entry ${index + 1}:`);
              console.log("Time:", time);
              console.log("Connection Name:", connName);
              console.log("Command:", command);
              console.log("DB:", db);

              return { time, connName, command, db };
            } else {
              console.error(`Invalid log entry format for entry ${index + 1}:`, logEntry);
              return null;
            }
          });

        const filteredLogs = formattedLogs.filter(log => log !== null);

        setLogs(filteredLogs);
      } catch (err) {
        console.error(err);
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
                    <span className='Time'>21:52:30</span>
                    <span className='Separatore1'>-</span>
                    <span className='ConnName'>[Test]</span>
                    <span className='Separatore2'>-</span>
                    <span className='Req'>client</span>
                    <span className='ReqDec'>set name test</span>
                    <span className='Ping'>[1.85ms]</span>
               </div>
               {logs.map((log,index)=>(
                    <div className='LogData'>
                         <span className='Time'>{log.time}</span>
                         <span className='Separatore1'>-</span>
                         <span className='ConnName'>[{log.connName}]</span>
                         <span className='Separatore2'>-</span>
                         <span className='Req'>{log.command}</span>
                         <span className='ReqDec'>{log.db}</span>
                         <span className='Ping'>[1.85ms]</span>
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
          <button className='cacelBtn' onClick={handleClose}>Cancel</button>
          <button className='clearBtn'>Clear</button>
        </div>
      </motion.div>
      </div>
  )
}

export default LogAlert