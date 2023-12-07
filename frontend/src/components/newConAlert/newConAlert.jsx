import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";
import './newConAlert.css'
import axios from 'axios';
const NewConAlert = ({ handleClose }) => {
  
    const [host, setHost]=useState("");
    const [port, setPort]=useState("");
    const [password, setPassword]=useState("");
    const [username, setUsername]=useState("");
    const [connName, setConnName]=useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post(`http://localhost:5000/connect`, {
            host: host, 
            port:parseInt(port), 
            client_name: connName
          });
          console.log(response.data);
          handleClose()
        } catch (error) {
          console.error(error);
        }
      };
      const handleCancel = (event) => {
        event.preventDefault();
        // Add any additional logic for canceling here
        handleClose(); // Close the modal or handle cancellation as needed
      };
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
        <form onSubmit={handleSubmit}>
        <div className='itemsConn'>
          <div className='itemConn1'>
            <label><mark style={{color:'red',backgroundColor:'transparent'}}>*</mark> Host</label>
            <input type='text' placeholder='127.0.0.1' value={host} onChange={(event) => setHost(event.target.value)}/>
          </div>
          <div className='itemConn2'>
            <label><mark style={{color:'red',backgroundColor:'transparent'}}>*</mark> Port</label>
            <input type='number' placeholder='6379' value={port} onChange={(event) => setPort(event.target.value)}/>
          </div>
          <div className='itemConn3'>
            <label>Password</label>
            <input type='password' placeholder='Auth' value={password} onChange={(event) => setPassword(event.target.value)}/>
          </div>
          <div className='itemConn4'>
            <label>Username</label>
            <input type='text' placeholder='ACL in Redis > = 6.0' value={username} onChange={(event) => setUsername(event.target.value)}/>
          </div>
          <div className='itemConn5'>
            <label>Connection Name</label>
            <input type='text' placeholder='Connection name' value={connName} onChange={(event) => setConnName(event.target.value)}/>
          </div>
          <div className='itemConn6'>
            <label>Separator</label>
            <input type='text' placeholder=':'/>
          </div>
        </div>
        <div className='butnReq'>
          <button className='cacelBtn' type='button' onClick={handleCancel}>Cancel</button>
          <button className='okBtn' type='submit'>OK</button>
        </div>
        </form>
      </motion.div>
      </div>
  )
}

export default NewConAlert