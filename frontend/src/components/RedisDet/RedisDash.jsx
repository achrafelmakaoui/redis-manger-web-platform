import React from 'react'
import './RedisDash.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faServer,faDatabase,faChartColumn} from '@fortawesome/free-solid-svg-icons'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
  

const RedisDash = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
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
            color:'gray',
            text: 'Key Statistics Bar Chart',
          },
        },
      };
      
      const labels = ['DB0', 'DB2', 'DB3', 'DB4', 'DB5', 'DB6', 'DB7', 'DB8', 'DB9', 'DB10', 'DB11', 'DB12'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Keys',
            data: [10, 20, 15, 25, 30, 18, 22, 17, 28, 14, 23, 19], // Replace with actual values for DB0
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Expires',
            data: [5, 15, 10, 20, 25, 13, 18, 14, 21, 12, 19, 16], // Replace with actual values for DB2
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
          {
            label: 'Avg TTL',
            data: [8, 18, 12, 22, 27, 15, 20, 16, 25, 11, 20, 17], // Replace with actual values for DB3
            backgroundColor: 'rgba(53, 235, 77, 0.5)',
          },
        ],
      };
      

  return (
    <>
    <div className='RedisDash'>
        <div className='RedisDashHed'>
            <h2>Redis Magnet Info</h2>
        </div>
        <div className='RedisDashRow1'>
            <div className='Row1Card1'>
                <div className='Card1Header'>
                    <h3><FontAwesomeIcon icon={faServer} className='faServer'/>Server</h3>
                </div>
                <div className='Card1Contenet'>
                    <div className='Card1ContFt'>
                        <span className='A1'>Redis Version:</span>
                        <span className='A1C'>7.2.2</span>
                    </div>                    
                    <div className='Card1ContSd'>
                        <span className='A1'>OS:</span>
                        <span className='A1C'>Windows</span>
                    </div>                    
                    <div className='Card1ContTh'>
                        <span className='A1'>Process ID:</span>
                        <span className='A1C'>4128</span>
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
                        <span className='A1C'>485.59KB</span>
                    </div>                    
                    <div className='Card1ContSd'>
                        <span className='A1'>Used Memory Peak:</span>
                        <span className='A1C'>696.19KB</span>
                    </div>                    
                    <div className='Card1ContTh'>
                        <span className='A1'>Used Memory Lua:</span>
                        <span className='A1C'>31KB</span>
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
                        <span className='A1C'>2</span>
                    </div>                    
                    <div className='Card1ContSd'>
                        <span className='A1'>Total Connections:</span>
                        <span className='A1C'>2</span>
                    </div>                    
                    <div className='Card1ContTh'>
                        <span className='A1'>Total Commands:</span>
                        <span className='A1C'>5</span>
                    </div>
                </div>
            </div>
        </div>
        <div style={{ height:'400px' ,display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Bar data={data} options={options} />
        </div> 
    </div>
    </>
  )
}

export default RedisDash