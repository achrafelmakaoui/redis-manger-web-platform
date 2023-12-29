import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";
import './AlertEditConn.css'
import axios from 'axios';
import { useLocation } from "react-router-dom";

const AlertEditConn = ({ handleClose }) => {
    const [host, setHost]=useState("");
    const [port, setPort]=useState("");
    const [password, setPassword]=useState("");
    const [username, setUsername]=useState("");
    const [connName, setConnName]=useState("");
    const [connection, setconnection]=useState({});
    // const [FiltredConnection, setFiltredConnection]=useState({});
    const location = useLocation();
    const client_name=location.pathname.split("/")[2]

    useEffect(() => {
      const getConnections = async () => {  
        let url = "http://192.168.1.102:5000/connections";
        try {
            const res = await axios.get(url);
            setconnection(res.data);
            // Filter connections based on client_name
            const filteredConnections = res.data.filter(conn => conn.client_name === client_name);
    
            // Assuming res.data is an array and you want the first item
            if (filteredConnections.length > 0) {
              const firstConnection = filteredConnections[0];
              setHost(firstConnection.host);
              setPort(firstConnection.port.toString());
              setPassword(firstConnection.password);
              setUsername(firstConnection.username);
              setConnName(firstConnection.client_name);
            }
        } catch (err) {
            console.log(err);
        }
      };
      getConnections();
    }, [client_name]);
    
    console.log(connection)

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.put(`http://192.168.1.102:5000/connections`, {
            client_name:client_name,
            new_client: {
              host: host,
              port: parseInt(port),
              client_name: connName,
            }
          });
          console.log(response.data);
          handleClose()
        } catch (error) {
          console.error(error);
        }
      };
      const handleCancel = (event) => {
        event.preventDefault();
        handleClose();
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
            <h3>Edit Connection</h3>
          </div>
          <div className='xMarkIcon'>
            <FontAwesomeIcon icon={faXmark} className='xMark' onClick={handleClose}/>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
        <div className='itemsConn'>
          <div className='itemConn1'>
            <label><mark style={{color:'red',backgroundColor:'transparent'}}>*</mark> Host</label>
            <input type='text' placeholder={host} value={host} onChange={(event) => setHost(event.target.value)}/>
          </div>
          <div className='itemConn2'>
            <label><mark style={{color:'red',backgroundColor:'transparent'}}>*</mark> Port</label>
            <input type='number' placeholder={port} value={port} onChange={(event) => setPort(event.target.value)}/>
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
            <input type='text' placeholder={connName} value={connName} onChange={(event) => setConnName(event.target.value)}/>
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

export default AlertEditConn