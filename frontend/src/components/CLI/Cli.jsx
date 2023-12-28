import React,{useEffect, useState} from 'react'
import './Cli.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle} from '@fortawesome/free-solid-svg-icons'
import CLiT from '../images/cliT.png'
import { useDispatch , useSelector } from "react-redux";
import { addCommand } from "../redux/cliRedux";
import { clearCli } from "../redux/cliRedux";

const Cli = () => {
    const dispatch =useDispatch();
    const [setCommandCli]=useState('');
    const [Command,setCommand]=useState([]);
    const cmd = useSelector((state) => state.cli.cmdInput);
    const value='>';

    useEffect(() => {
        const handleKeyDown = (event) => {
          if (event.ctrlKey && event.key === 'l') {
            dispatch(clearCli());
          }
        };
      
        document.addEventListener('keydown', handleKeyDown);
      
        return () => {
          document.removeEventListener('keydown', handleKeyDown);
        };
      }, [dispatch]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const modifiedCommand = Command === 'MAGNET' ? 'PING' : Command;
    
            const response = await fetch('http://192.168.1.105:5000/command', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    command: modifiedCommand,
                }),
            });
    
            const { result, error } = await response.json();
    
            if (error) {
                console.error(error);
                setCommandCli(`Error: ${error}`);
            } else {
                const modifiedResult = result === 'True' ? 'MAGNETED' : result;
    
                setCommandCli(modifiedResult);
                console.log(modifiedResult);
                dispatch(addCommand({Command, modifiedResult}));
                setCommand([])
            }
        } catch (error) {
            console.error(error);
            event.target.reset();
        }
    }; 

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
            {cmd.map((cli, index) => (  
                <div className='CliCommand'>
                    <span>redis-magnet/cli{value}</span>
                    <span>{cli.Command}</span><br/>
                    <span className='res'>{cli.modifiedResult}</span><br/>
                </div>
            ))}
            <div className='CliCommand'>
                    <span>redis-magnet/cli{value}</span>
                    <span>{Command}</span><br/>
                </div>
            </div>
            <div className='ContCliInput'>
                <div className='CliInput'>
                    <form onSubmit={handleSubmit}>
                        <input type='text' className='CliInputCommand' placeholder='Type your command and Press enter to Excute' value={Command} onChange={(event)=>setCommand(event.target.value)}/>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default Cli