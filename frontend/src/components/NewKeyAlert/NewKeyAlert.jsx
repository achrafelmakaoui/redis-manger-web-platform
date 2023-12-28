import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";
import './NewKeyAlert.css'
import axios from 'axios';

const NewKeyAlert = ({ handleClose }) => {
  
  const [Key, setKey]=useState("");
  const [Value, setValue]=useState("");

  const handleSubmit = async () => {
        try {
          const response = await axios.post(`http://192.168.1.105:5000/keys`, {
            key: Key, 
            value:Value
          });
          console.log(response.data);
          handleClose()
        } catch (error) {
          console.error(error);
        }
      };
  return (
    <div className='NewKeymotionDiv'>
        <motion.div
        className="newkeycontainer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{type: "spring",stiffness: 260,damping: 20}}
      >
        <div className='newkeycoLgFrst'>
          <div className='newkeyconnTit'>
            <h3>New Key</h3>
          </div>
          <div className='newKeyxMarkIcon'>
            <FontAwesomeIcon icon={faXmark} className='newKeyxMark' onClick={handleClose}/>
          </div>
        </div>
        <div className='newkeyitemsConn'>
          <div className='newkeyitemConn1'>
            <label>Key Name</label>
            <input type='text' placeholder='Entre Key' value={Key} onChange={(event) => setKey(event.target.value)}/>
          </div>
          <div className='newkeyitemConn2'>
            <label>Value</label>
            <input type='text' placeholder='Entre Value' value={Value} onChange={(event) => setValue(event.target.value)}/>
          </div>
        </div>
        <div className='butnReq'>
          <button className='cacelBtn' onClick={handleClose}>Cancel</button>
          <button className='okBtn' onClick={handleSubmit}>OK</button>
        </div>
      </motion.div>
      </div>
  )
}

export default NewKeyAlert