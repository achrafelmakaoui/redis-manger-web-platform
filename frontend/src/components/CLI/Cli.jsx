import React,{useState} from 'react'
import './Cli.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle} from '@fortawesome/free-solid-svg-icons'
import CLiT from '../images/cliT.png'
// import axios from 'axios'
const Cli = () => {
    const [CommandCli,setCommandCli]=useState('');
    const [Command,setCommand]=useState([]);

    
    const value='>';
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Modify the command before sending
            const modifiedCommand = Command === 'MAGNET' ? 'PING' : Command;
    
            const response = await fetch('http://192.168.1.102:5000/command', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    command: modifiedCommand,
                }),
            });
    
            // Assuming your response structure is something like { result: '...', error: '...' }
            const { result, error } = await response.json();
    
            if (error) {
                // Handle the error appropriately, such as displaying an error message
                console.error(error);
                setCommandCli(`Error: ${error}`);
            } else {
                // Modify the result received from the server
                const modifiedResult = result === 'True' ? 'MAGNETED' : result;
    
                // Set the modified successful result in the state
                setCommandCli(modifiedResult);
                console.log(modifiedResult);
            }
        } catch (error) {
            console.error(error);
        }
    };
    
    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     try {
    //         const response = await fetch('http://192.168.1.102:5000/command', {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //             },
    //             body: JSON.stringify({
    //                 command: Command,
    //             }),
    //         });
    
    //         // Assuming your response structure is something like { result: '...', error: '...' }
    //         const { result, error } = await response.json();
    
    //         if (error) {
    //             // Handle the error appropriately, such as displaying an error message
    //             console.error(error);
    //             setCommandCli(`Error: ${error}`);
    //         } else {
    //             // Set the successful result in the state
    //             setCommandCli(result);
    //             console.log(result);
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    

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
                    <span>{Command}</span><br/>
                    <span className='res'>{CommandCli}</span><br/>
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