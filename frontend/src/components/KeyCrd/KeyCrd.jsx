import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faCheck } from '@fortawesome/free-solid-svg-icons'
import './Keycrd.css'
import { useLocation } from "react-router-dom";
import axios from 'axios';
import DelKeyAlert from './DelKeyAlert/DelKeyAlert';
import Alert from './Alert/Alert';

const Keycrd = ({ handleClose }) => {
    const [key,setkey]=useState('')
    const [Alertkey,setAlertkey]=useState(false)
    const [SuccAlert,setSuccAlert]=useState(false);
    
    const location = useLocation();
    const currentKeyName = location.pathname.split("/")[3]
    useEffect(() => {
        const handelGetKey = async () => {
            const currentKeyName = location.pathname.split("/")[3];
            try {
                const response = await axios.get(`http://localhost:5000/key_value/${currentKeyName}`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    
                });
                console.log(response.data);
                setkey(response.data.value);
            } catch (error) {
                console.error(error);
            }
        };
        handelGetKey();
    }, [location.pathname]);

  const handleSubmit = async () => {
    const currentKeyName = location.pathname.split("/")[3];
        try {
          const response = await axios.post(`http://localhost:5000/keys`, {
            key: currentKeyName, 
            value:key
          });
          console.log(response.data);
          setkey(response.data.value);
          setSuccAlert(true);
          setTimeout(() => {
            setSuccAlert(false);
          }, 5000);
        } catch (error) {
          console.error(error);
        }
      };

    const handelDelKey = () => {
        setAlertkey(true);
    };
    const handleClickXMarkDelKey = () => {
        setAlertkey(false);
    }
    const handleClickXMarkAlert = () => {
        setSuccAlert(false);
    } 
    return (
        <div className='KeyCrd'>
            <div className='keyTitle'>
                <h2>Key '{currentKeyName}'</h2>
            </div>
            <div className='keyCrudOper'>
                <div className='keyUpNameOp'>
                    <button>String</button>
                    <input type='text' value={currentKeyName} disabled/>
                    <FontAwesomeIcon icon={faCheck} className='ExecUpdKeyName'/>
                </div>
                <div className='keyExpOp'>
                    <button>TTL</button>
                    <input type='text' placeholder='-1' disabled/>
                    <FontAwesomeIcon icon={faCheck} className='ExecUpdKeyTTL' />
                </div>
                <div className='keyDelOp'>
                    <FontAwesomeIcon icon={faTrashCan} className='faKeyTrashCan' onClick={handelDelKey} />
                </div>
            </div>
            <div className='keyValue'>
                <textarea cols="30" rows="22" value={key} onChange={(e)=> setkey(e.target.value)}></textarea>
            </div>
            <div className='keyOkButton'>
                <button className='SaveBtn' onClick={handleSubmit}>Save</button>
            </div>
            {Alertkey && <DelKeyAlert handleClose={handleClickXMarkDelKey} handleClose2={handleClose}/>}
            {SuccAlert && <Alert handleClose={handleClickXMarkAlert}/>}
        </div>
    )
}

export default Keycrd