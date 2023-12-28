import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faQuestion, faXmark } from '@fortawesome/free-solid-svg-icons'
import './DelKeyAlert.css'
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

const DelKeyAlert = ({ handleClose }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const currentKeyName = location.pathname.split("/")[3];
    // const currentConnName = location.pathname.split("/")[2];

    const handelDelKey = async () => {
        const currentKeyName = location.pathname.split("/")[3];
        try {
            const response = await axios.delete(`http://192.168.1.105:5000/keys`, {
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    key: currentKeyName,
                },
            });
            console.log(response);
            handleClose();
            navigate('/Dashboard');
        } catch (error) {
            console.error(error);
        }
    };
  return (
    <div className='DelKeymotionDiv'>
        <motion.div
        className="delkeycontainer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{type: "spring",stiffness: 260,damping: 20}}
      >
        <div className='delkeycoLgFrst'>
          <div className='delkeyconnTit'>
            <FontAwesomeIcon icon={faQuestion} className='faQuestion'/>
            <h4>Confirm To Delete " {currentKeyName} " ?</h4>
          </div>
          <div className='delKeyxMarkIcon'>
            <FontAwesomeIcon icon={faXmark} className='delKeyxMark' onClick={handleClose}/>
          </div>
        </div>
        <div className='butnReq'>
          <button className='cacelBtn' onClick={handleClose}>Cancel</button>
          <button className='okBtn' onClick={handelDelKey}>OK</button>
        </div>
      </motion.div>
      </div>
  )
}

export default DelKeyAlert