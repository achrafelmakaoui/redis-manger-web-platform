import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";
import './NewKeyAlert.css'

const NewKeyAlert = ({ handleClose }) => {
  
  
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
            <input type='text' placeholder='Entre Key'/>
          </div>
          <div className='newkeyitemConn2'>
            <label>Key Type</label>
            <select>
                <option value="">--select Type--</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </select>
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

export default NewKeyAlert