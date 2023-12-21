import React, { useEffect } from 'react'
import './Dash.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus,faPlus,faGear,faClock,faHouseLaptop,faTerminal } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import NewConnAlert from '../newConAlert/newConAlert'
import SettingAlert from '../settingAlert/SettingAlert'
import LogAlert from '../LogAlert/LogAlert'
import FstDesign from '../firstpagedesign/FstDesign'
import '../connections/Conn.css'
import NewKeyAlertt from '../NewKeyAlert/NewKeyAlert'
import RedisDash from '../RedisDet/RedisDash'
import Cli from '../CLI/Cli'
import axios from 'axios';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Dash = () => {
  const [Alert,setAlert]=useState(false);
  const [Alert2,setAlert2]=useState(false);
  const [Alert3,setAlert3]=useState(false);
  const [NewKeyAlert,setNewKeyAlert]=useState(false);
  const [FstDesignPage,setFstDesignPage]=useState(true);
  const [RedisPage,setRedisPage]=useState(false);
  const [Clii, setCli] = useState(false);
  const [connections, setconnections] = useState([]);
  const [connDetStates, setConnDetStates] = useState(Array(connections.length).fill(false));
  // const [connDetStates, setConnDetStates] = useState(true);
  const [selectedDb, setSelectedDb] = useState();
  const [keys, setKeys] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const getConnections = async () => {  
      let url = "http://localhost:5000/connections";
      try {
          const res = await axios.get(url);
          setconnections(res.data);
      } catch (err) {
          console.log(err);
      }
    };
    getConnections();
  },[connections]);


  const handelConnect = async () => {
    try {
      const response = await axios.post(`http://localhost:5000/connect`, {
        host:'127.0.0.1', 
        port:6379, 
        client_name: location.pathname.split("/")[2]
      });
      console.log(response.data);
      handelChooseDb();
    } catch (error) {
      console.error(error);
    }
  };
  const handelChooseDb = async (e) => {
    try {
      setSelectedDb(e.target.value)
      const response = await axios.post(`http://localhost:5000/change_db`, {
        db: parseInt(e.target.value),
      });
      setKeys(response.data.response);
      console.log(response.data);
      console.log(keys);
    } catch (error) {
      console.error(error);
    }
  };
  
  const handelClickCli = ()=>{
    setCli(true);
    setFstDesignPage(false);
    setRedisPage(false);
  }
  // open conn

  // const handelClickConn = () => {
  //   if (!connDetStates) {
  //     setFstDesignPage(false);
  //     setRedisPage(true);
  //     setCli(false);
  //     newKeyHandelClick(true)

  //   } else {
  //     newKeyHandelClick(true)
  //     setFstDesignPage(false);
  //     setRedisPage(false);
  //     setCli(false);
  //   }
  // };
  
  // new key
  const  newKeyHandelClick = () => {
      setNewKeyAlert(true)
  }
  const handleClickXMarkNewKey = () => {
      setNewKeyAlert(false)
  } 
  // new connection
  const  handelClick = () => {
    setAlert(true)
  }
  const handleClickXMark = () => {
    setAlert(false)
  }
  // setting
  const  handelClick2 = () => {
    setAlert2(true)
  }
  const handleClickSettingXMark = () => {
    setAlert2(false)
  }
  // log
  const  handelClick3 = () => {
    setAlert3(true)
  }
  const handleClickLogXMark = () => {
    setAlert3(false)
  }
  const handleConnectionClick = (index) => {
    handelConnect()
    const newConnDetStates = [...connDetStates];
    newConnDetStates[index] = !newConnDetStates[index];
    setConnDetStates(newConnDetStates);
  };

  return (
    <div className='ConPg'>
      <div className='fullCon'>
        <div className="connection">
          <div className='newCon'>
            <button onClick={handelClick}><FontAwesomeIcon icon={faCirclePlus} className='faCirclePlus'/> New connection</button>
          </div>
          <div className='setting'>
            <button onClick={handelClick2}><FontAwesomeIcon icon={faGear} className='faGear'/></button>
          </div>
          <div className='Log'>
            <button onClick={handelClick3}><FontAwesomeIcon icon={faClock} className='faClock' /></button>
          </div>
        </div>
        <div className='listConn'>
        {connections.map((connections, index) => (
           <React.Fragment key={index}>
              <div className='lstMap' index={index}>
                  <div className='connName'>
                      <Link to={`/Dashboard/${connections.client_name}`}>
                        <h4 onClick={handelConnect}>{connections.client_name}</h4>
                      </Link>
                  </div>
                  <div className='connTaches'>
                      <Link to={`/Dashboard/${connections.client_name}`} onClick={() => handleConnectionClick(index)}>
                          <FontAwesomeIcon icon={faHouseLaptop} id={connections.client_name} className='first'/>
                      </Link>
                      <Link to={`/Dashboard/${connections.client_name}`}>
                          <FontAwesomeIcon icon={faTerminal} className='second' onClick={handelClickCli} />
                      </Link>
                  </div>
              </div>
            {connDetStates[index] && (
              <div className='ConnDet'>
                  <div className='ConnDetRow1'>
                      <div className='ConnDetItem1'>
                          <select value={selectedDb} onChange={(e) => handelChooseDb(e)}>
                              <option value=''>--Choose DB--</option>
                              <option value='0'>DB0</option>
                              <option value='1'>DB1</option>
                              <option value='2'>DB2</option>
                              <option value='3'>DB3</option>
                              <option value='4'>DB4</option>
                              <option value='5'>DB5</option>
                              <option value='6'>DB6</option>
                              <option value='7'>DB7</option>
                              <option value='8'>DB8</option>
                              <option value='9'>DB9</option>
                              <option value='10'>DB10</option>
                              <option value='11'>DB11</option>
                              <option value='12'>DB12</option>
                              <option value='13'>DB13</option>
                              <option value='14'>DB14</option>
                              <option value='15'>DB15</option>
                          </select>
                      </div>
                      <div className='ConnDetItem2'>
                          <button onClick={newKeyHandelClick}><FontAwesomeIcon icon={faPlus} className='CirclePlus'/>New Key</button>
                      </div>
                  </div>
                  <div className='ConnDetRow2'>
                      <input type='search' className='searchKey' placeholder='Enter to search' />
                  </div>
                  <div className='ConnDetRow3'>
                    {keys.slice(-5).map((key, index) => (
                      <h4 key={index}>{key.replace(/^b'|'$/g, '')}</h4>
                    ))}

                  </div>
                  <div className='ConnDetRow4'>
                      <button className='LoadData'>Load More</button>
                      <button className='AllData'>Load All</button>
                  </div>
              </div>
              )}
              </React.Fragment>
        ))}
        </div>
      </div>
      {Clii && <Cli text='Redis Magnet'/>}
      {NewKeyAlert && <NewKeyAlertt handleClose={handleClickXMarkNewKey}/>}
      {RedisPage && <RedisDash/>}
      {FstDesignPage && <FstDesign handelClick={handelClick}/>}
      {Alert && <NewConnAlert handleClose={handleClickXMark} oneNewConnection={connections=>setconnections(currentConnection=>[connections,currentConnection])}/>}
      {Alert2 && <SettingAlert handleClose={handleClickSettingXMark}/>}
      {Alert3 && <LogAlert handleClose={handleClickLogXMark}/>}
    </div>
  )
}

export default Dash