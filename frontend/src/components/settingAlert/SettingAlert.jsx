import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { motion } from "framer-motion";
import './SettingAlert.css'
import { ReactComponent as Sun } from "../images/Sun.svg";
import { ReactComponent as Moon } from "../images/Moon.svg";
import { useTheme } from '../ThemeContext';

const SettingAlert = ({handleClose}) => {
    const { theme, toggleTheme } = useTheme();
  return (
    <div className='settingMotionDiv'>
        <motion.div
        className="settingContainer"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{type: "spring",stiffness: 260,damping: 20}}
      >
        <div className='settingColFst'>
          <div className='settingTit'>
            <h3>Setting</h3>
          </div>
          <div className='settingxMarkIcon'>
            <FontAwesomeIcon icon={faXmark} className='settingxMark' onClick={handleClose}/>
          </div>
        </div>
        <div className='settingItems'>
            <div className='settingAppearance'>
                <div className='settingAppTit'>
                    <h4>Appearance</h4>
                </div>
                <div className='AppItems'>
                    <div className='AppItems1'>
                        <label>Dark Mode</label>
                        <div className='dark_mode'>
                            <input
                                className='dark_mode_input'
                                type='checkbox'
                                id='darkmode-toggle'
                                onChange={toggleTheme}
                                checked={theme === 'dark'}
                            />
                            <label className='dark_mode_label' for='darkmode-toggle'>
                                <Sun />
                                <Moon />
                            </label>
                        </div>
                    </div>
                    <div className='AppItems2'>
                        <label>Select Language</label>
                        <select>
                            <option value="">--select Language--</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                    <div className='AppItems3'>
                        <label>Font Family</label>
                        <select>
                            <option value="">--Font Family--</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className='settingVersion'>
                <div className='settingVersionTit'>
                    <h4>Version</h4>
                    <button disabled>Beta</button>
                </div>
                <div className='settingVersionLinks'>
                    <a href='/#' onClick={()=>{window.open('https://google.com','_blank')}}>Clear Cache</a>
                    <a href='/#' onClick={()=>{window.open('https://google.com','_blank')}}>Check Update</a>
                    <a href='/#' onClick={()=>{window.open('https://google.com','_blank')}}>Manual Download</a>
                    <a href='/#' onClick={()=>{window.open('https://google.com','_blank')}}>Project Home</a>
                </div>
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

export default SettingAlert