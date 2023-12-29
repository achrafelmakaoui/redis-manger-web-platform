import React, { useEffect, useState } from 'react'
import './RedisDash.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer,faDatabase,faChartColumn} from '@fortawesome/free-solid-svg-icons'
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     Title,
//     Tooltip,
//     Legend,
//   } from 'chart.js';
// import { Bar } from 'react-chartjs-2';
import { faTrashCan,faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import AlertEditConn from '../AlertEditConn/AlertEditConn';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

const RedisDash = () => {
  const [EditAlert,setEditAlert]=useState(false);
  const [Data,setData]=useState(null);
  const [DbState,setDbState]=useState({});
  const navigate=useNavigate();

  useEffect(() => {
    const getData = async () => {  
      let url = "http://192.168.1.102:5000/monitor";
      try {
          const res = await axios.get(url);
          setData(res.data);
          console.log(res.data)
      } catch (err) {
          console.log(err);
      }
    };
    getData();
  },[]);
  useEffect(() => {
    const getDbState = async () => {  
      let url = "http://192.168.1.102:5000/dbs_stats";
      try {
          const res = await axios.get(url);
          setDbState(res.data);
          console.log(res.data)
      } catch (err) {
          console.log(err);
      }
    };
    getDbState();
  },[DbState]);

    const location = useLocation();
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
    
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart',
        },
      },
      scales: {
        x: {
          beginAtZero: true, 
          title: {
            display: true,
            text: 'List Of Dbs',
          },
        },
        y: {
          beginAtZero: true, 
          title: {
            display: true,
            text: 'Number of Keys',
          },
          ticks: {
            stepSize: 1, 
          },
        },
      },
    };
      
    const labels = ['DB0', 'DB1', 'DB2', 'DB3', 'DB4', 'DB5', 'DB6', 'DB7', 'DB8', 'DB9', 'DB10', 'DB11', 'DB12', 'DB13', 'DB14', 'DB15'];

      const data = {
        labels,
        datasets: [
          {
            label: 'Keys',
            data: [
              DbState.db0 ? DbState.db0.keys || 0 : 0,
              DbState.db1 ? DbState.db1.keys || 0 : 0,
              DbState.db2 ? DbState.db2.keys || 0 : 0,
              DbState.db3 ? DbState.db3.keys || 0 : 0,
              DbState.db4 ? DbState.db4.keys || 0 : 0,
              DbState.db5 ? DbState.db5.keys || 0 : 0,
              DbState.db6 ? DbState.db6.keys || 0 : 0,
              DbState.db7 ? DbState.db7.keys || 0 : 0,
              DbState.db8 ? DbState.db8.keys || 0 : 0,
              DbState.db9 ? DbState.db9.keys || 0 : 0,
              DbState.db10 ? DbState.db10.keys || 0 : 0,
              DbState.db11 ? DbState.db11.keys || 0 : 0,
              DbState.db12 ? DbState.db12.keys || 0 : 0,
              DbState.db13 ? DbState.db13.keys || 0 : 0,
              DbState.db14 ? DbState.db14.keys || 0 : 0,
              DbState.db15 ? DbState.db15.keys || 0 : 0,
            ],
            borderColor: 'rgb(52, 52, 203)',
            backgroundColor: 'rgb(52, 52, 203)',
          },
          {
            label: 'Expires',
            data: [
              DbState.db0 ? DbState.db0.expires || 0 : 0,
              DbState.db1 ? DbState.db1.expires || 0 : 0,
              DbState.db2 ? DbState.db2.expires || 0 : 0,
              DbState.db3 ? DbState.db3.expires || 0 : 0,
              DbState.db4 ? DbState.db4.expires || 0 : 0,
              DbState.db5 ? DbState.db5.expires || 0 : 0,
              DbState.db6 ? DbState.db6.expires || 0 : 0,
              DbState.db7 ? DbState.db7.expires || 0 : 0,
              DbState.db8 ? DbState.db8.expires || 0 : 0,
              DbState.db9 ? DbState.db9.expires || 0 : 0,
              DbState.db10 ? DbState.db10.expires || 0 : 0,
              DbState.db11 ? DbState.db11.expires || 0 : 0,
              DbState.db12 ? DbState.db12.expires || 0 : 0,
              DbState.db13 ? DbState.db13.expires || 0 : 0,
              DbState.db14 ? DbState.db14.expires || 0 : 0,
              DbState.db15 ? DbState.db15.expires || 0 : 0,
            ],
            borderColor: 'rgba(232, 69, 69, 0.624)',
            backgroundColor: 'rgba(232, 69, 69, 0.624)',
          },
          {
            label: 'Avg TTL',
            data: [
              DbState.db0 ? DbState.db0.avg_ttl || 0 : 0,
              DbState.db1 ? DbState.db1.avg_ttl || 0 : 0,
              DbState.db2 ? DbState.db2.avg_ttl || 0 : 0,
              DbState.db3 ? DbState.db3.avg_ttl || 0 : 0,
              DbState.db4 ? DbState.db4.avg_ttl || 0 : 0,
              DbState.db5 ? DbState.db5.avg_ttl || 0 : 0,
              DbState.db6 ? DbState.db6.avg_ttl || 0 : 0,
              DbState.db7 ? DbState.db7.avg_ttl || 0 : 0,
              DbState.db8 ? DbState.db8.avg_ttl || 0 : 0,
              DbState.db9 ? DbState.db9.avg_ttl || 0 : 0,
              DbState.db10 ? DbState.db10.avg_ttl || 0 : 0,
              DbState.db11 ? DbState.db11.avg_ttl || 0 : 0,
              DbState.db12 ? DbState.db12.avg_ttl || 0 : 0,
              DbState.db13 ? DbState.db13.avg_ttl || 0 : 0,
              DbState.db14 ? DbState.db14.avg_ttl || 0 : 0,
              DbState.db15 ? DbState.db15.avg_ttl || 0 : 0,
            ],
            backgroundColor: 'rgb(7,216,7)',
            borderColor: 'rgb(7,216,7)',
          },
        ],
      };
      const handelDelConnection = async () => {
        try {
          const response = await axios.delete(`http://localhost:5000/connections`, {
            data: { client_name: location.pathname.split("/")[2] }
          });
          console.log(response.data);
          navigate('/')
        } catch (error) {
          console.error(error);
        }
      }; 
      const handelShowEditAlert =  () => {
          setEditAlert(true);
      }
      const handleClickEditXMark = () => {
        setEditAlert(false)
      }
      
      
  return (
    <>
    <div className='RedisDash'>
        <div className="editDel">
          <div className='editCon'>
            <button onClick={handelShowEditAlert}><FontAwesomeIcon icon={faPenToSquare} className='faCirclePlus'/>Edit connection</button>
          </div>
          <div className='delCon'>
              <button onClick={handelDelConnection}><FontAwesomeIcon icon={faTrashCan} className='faClock' />Delete connection</button>
          </div>
        </div>
        <div className='RedisDashRow1'>
        {Data && (
              <>
            <div className='Row1Card1'>
                <div className='Card1Header'>
                    <h3><FontAwesomeIcon icon={faServer} className='faServer'/>Server</h3>
                </div>
                <div className='Card1Contenet'>
                    <div className='Card1ContFt'>
                        <span className='A1'>Redis Version:</span>
                        <span className='A1C'>{Data.redis_version}</span>
                    </div>                    
                    <div className='Card1ContSd'>
                        <span className='A1'>OS:</span>
                        <span className='A1C'>{Data.os}</span>
                    </div>                    
                    <div className='Card1ContTh'>
                        <span className='A1'>Process ID:</span>
                        <span className='A1C'>{Data.process_id}</span>
                    </div>
                </div>
            </div>
            <div className='Row1Card2'>
                <div className='Card2Header'>
                    <h3><FontAwesomeIcon icon={faDatabase} className='faDatabase' />Memory</h3>
                </div>
                <div className='Card2Contenet'>
                    <div className='Card1ContFt'>
                        <span className='A1'>Used Memory:</span>
                        <span className='A1C'>{Data.used_memory}</span>
                    </div>                    
                    <div className='Card1ContSd'>
                        <span className='A1'>Used Memory Peak:</span>
                        <span className='A1C'>{Data.used_memory_peak}</span>
                    </div>                    
                    <div className='Card1ContTh'>
                        <span className='A1'>Used Memory Lua:</span>
                        <span className='A1C'>{Data.used_memory_lua}</span>
                    </div>
                </div>
            </div>
            <div className='Row1Card3'>
                <div className='Card3Header'>
                    <h3><FontAwesomeIcon icon={faChartColumn} className='faChartColumn' />Stats</h3>
                </div>
                <div className='Card3Contenet'>
                    <div className='Card1ContFt'>
                        <span className='A1'>Connected Clients:</span>
                        <span className='A1C'>{Data.connected_clients}</span>
                    </div>                    
                    <div className='Card1ContSd'>
                        <span className='A1'>Total Connections:</span>
                        <span className='A1C'>{Data.total_connections_received}</span>
                    </div>                    
                    <div className='Card1ContTh'>
                        <span className='A1'>Total Commands:</span>
                        <span className='A1C'>{Data.total_commands_processed}</span>
                    </div>
                </div>
            </div>
            </>
        )}
        </div>
        <div style={{ height:'400px' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
            {/* <Bar data={data} options={options} /> */}
            <Line options={options} data={data} />
        </div> 
    </div>
    {EditAlert && <><AlertEditConn handleClose={handleClickEditXMark}/></>}
    </>
  )
}

export default RedisDash