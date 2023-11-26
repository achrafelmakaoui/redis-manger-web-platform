import React,{useState} from 'react'
import './Cli.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle} from '@fortawesome/free-solid-svg-icons'
import CLiT from '../images/cliT.png'
const Cli = () => {
    const [CommandCli,setCommandCli]=useState();
    const [CliRes,setCliRes]=useState();

    const handleCommandChange = (event)=>{
        setCommandCli(event.target.value)
    }
    const handelSubmit =(e)=>{
        e.preventDefault();
        if(CommandCli==='Magnet'){
            setCliRes('Magneted')
        }
    }
    const value='>';
  return (
        <div className='Cli'>
            <div className='RedisCli'>
                <div className='cliDots'>
                    <FontAwesomeIcon icon={faCircle} className='circleIcon'/>
                    <FontAwesomeIcon icon={faCircle} className='circleIcon'/>
                    <FontAwesomeIcon icon={faCircle} className='circleIcon'/>
                </div>
                <div className='RedisMagnetCliInterface'>
                    <img src={CLiT} alt='CliT'/>
                    <p><span>Redis Magnet CLI:</span> A streamlined command-line interface for efficient Redis database management. Execute a range of commands with ease, from basic key-value operations to advanced data manipulations. Simplify your Redis experience with Redis Magnet CLI – where simplicity meets versatility in the command line.</p>
                </div>
                <div className='CliCommand'>
                    <span>redis-magnet/cli{value}</span>
                    <span>Magnet</span><br/>
                    <span className='res'>Magneted</span><br/>
                </div>
                <div className='CliCommand'>
                    <span>redis-magnet/cli{value}</span>
                    <span>{CommandCli}</span><br/>
                    <span className='res'>{CliRes}</span><br/>
                </div>
            </div>
            <div className='ContCliInput'>
                <div className='CliInput'>
                    <form onSubmit={handelSubmit}>
                        <input type='text' className='CliInputCommand' placeholder='Type your command and Press enter to Excute' value={CommandCli} onChange={handleCommandChange}/>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Cli