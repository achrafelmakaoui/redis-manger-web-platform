import React, { useEffect } from 'react'
import './Dash.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus,faPlus,faGear,faClock,faHouseLaptop,faTerminal,faList } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import NewConnAlert from '../newConAlert/newConAlert'
import SettingAlert from '../settingAlert/SettingAlert'
import LogAlert from '../LogAlert/LogAlert'
import FstDesign from '../firstpagedesign/FstDesign'
import '../connections/Conn.css'
import NewKeyAlertt from '../NewKeyAlert/NewKeyAlert'
import RedisDash from '../RedisDet/RedisDash'
import DropDownContent from '../DropDown/DrowDopn'
import Cli from '../CLI/Cli'
import axios from 'axios';
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Dash = () => {
  const [Alert,setAlert]=useState(false);
  const [Alert2,setAlert2]=useState(false);
  const [Alert3,setAlert3]=useState(false);
  // const [ConnDet,setConnDet] = useState(false);
  const [NewKeyAlert,setNewKeyAlert]=useState(false);
  const [FstDesignPage,setFstDesignPage]=useState(true);
  const [RedisPage,setRedisPage]=useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [Clii, setCli] = useState(false);
  const [connections, setconnections] = useState([]);
  const [connections2, setconnections2] = useState([]);
  const [connDetStates, setConnDetStates] = useState(connections.map(() => false));
  const location = useLocation();
  const connName = location.pathname.split("/")[2];

  useEffect(() => {
    const getConnections = async () => {
    let url = "http://192.168.1.102:5000/connections";
    
    try {
        const res = await axios.get(url);
        setconnections(res.data);
    } catch (err) {
        console.log(err);
    }
    };
    getConnections();
  },[connections]);

  // const handelConnect = ()=>{
  //   try {
  //     const result = axios.post(`http://192.168.1.102:5000/connect`, {
  //       host:'127.0.0.1', 
  //       port:'6379', 
  //       client_name: connName
  //     });
  //     console.log(result.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  const handelConnect = async () => {
    try {
      const response = await axios.post(`http://192.168.1.102:5000/connect`, {
        host:'127.0.0.1', 
        port:6379, 
        client_name: connName
      });
      console.log(response.data);
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

  const handelClickConn = (index) => {
    setConnDetStates((prevState) => {
      const newState = Array(prevState.length).fill(false);
      newState[index] = !prevState[index];
      return newState;
    });
    // Use the state for the specific connection index
    if (!connDetStates[index]) {
      setFstDesignPage(false);
      setRedisPage(true);
      setCli(false);
    } else {
      setFstDesignPage(true); // Adjust this based on your logic
      setRedisPage(false);
      setCli(false);
    }
    // Other logic...
  };
  
  // new key
  const  newKeyHandelClick = () =>{
      setNewKeyAlert(true)
  }
  const handleClickXMarkNewKey = ()=>{
      setNewKeyAlert(false)
  } 
  // new connection
  const  handelClick = () =>{
    setAlert(true)
  }
  const handleClickXMark = ()=>{
    setAlert(false)
  }
  // setting
  const  handelClick2 = () =>{
    setAlert2(true)
  }
  const handleClickSettingXMark = ()=>{
    setAlert2(false)
  }
  // log
  const  handelClick3 = () =>{
    setAlert3(true)
  }
  const handleClickLogXMark = ()=>{
    setAlert3(false)
  }
  

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
            <Link to={`/Dashboard/${connections.client_name}`}>
              <div className='lstMap' index={index}>
                  <div className='connName'>
                      <h4 onClick={handelConnect}>{connections.client_name}</h4>
                  </div>
                  <div className='connTaches'>
                      <FontAwesomeIcon icon={faHouseLaptop} className='first' onClick={handelClickConn} />
                      <FontAwesomeIcon icon={faTerminal} className='second' onClick={handelClickCli} />
                      <FontAwesomeIcon icon={faList} className='third' onClick={() => setShowDropDown(true)} />
                  </div>
              </div>
            </Link>
            {connDetStates[index] && (
              <div className='ConnDet'>
                  <div className='ConnDetRow1'>
                      <div className='ConnDetItem1'>
                          <select>
                              <option>--select db--</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                          </select>
                      </div>
                      <div className='ConnDetItem2'>
                          <button onClick={newKeyHandelClick}><FontAwesomeIcon icon={faPlus} className='CirclePlus' />New Key</button>
                      </div>
                  </div>
                  <div className='ConnDetRow2'>
                      <input type='search' className='searchKey' placeholder='Enter to search' />
                  </div>
                  <div className='ConnDetRow3'>
                      <h4>DATA</h4>
                  </div>
                  <div className='ConnDetRow4'>
                      <button className='LoadData'>Load More</button>
                      <button className='AllData'>Load All</button>
                  </div>
              </div>
              )}
              </React.Fragment>
        ))}
        {showDropDown && <DropDownContent onClose={() => setShowDropDown(false)} />}
        {NewKeyAlert && <NewKeyAlertt handleClose={handleClickXMarkNewKey}/>}
        </div>
      </div>
      {Clii && <Cli text='Redis Magnet'/>}
      {RedisPage && <RedisDash/>}
      {FstDesignPage && <FstDesign handelClick={handelClick}/>}
      {Alert && <NewConnAlert handleClose={handleClickXMark} oneNewConnection={connections=>setconnections(currentConnection=>[connections,currentConnection])}/>}
      {Alert2 && <SettingAlert handleClose={handleClickSettingXMark}/>}
      {Alert3 && <LogAlert handleClose={handleClickLogXMark}/>}
    </div>
  )
}

export default Dash