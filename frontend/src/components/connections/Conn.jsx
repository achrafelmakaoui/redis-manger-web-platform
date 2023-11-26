// import React, { useState } from 'react'
// import './Conn.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHouseLaptop,faTerminal,faList,faCirclePlus } from '@fortawesome/free-solid-svg-icons'
// import NewKeyAlertt from '../NewKeyAlert/NewKeyAlert'

// const Conn = () => {
//     const [ConnDet,setConnDet] = useState(false);
//     const [ConnDet2,setConnDet2] = useState(false);
//     const [NewKeyAlert,setNewKeyAlert]=useState(false);
    
//     const handelClick = () => {
//         setConnDet(prevState => !prevState);
//     };
//     const  handelClick3 = () =>{
//         setConnDet2(prevState => !prevState);
//     }
//   // new key

//     const  handelClick2 = () =>{
//         setNewKeyAlert(true)
//     }
//     const handleClickXMark = ()=>{
//         setNewKeyAlert(false)
//     }
//   return (
//     <div className='listConn'>
//         <div className='lstMap' onClick={handelClick}>
//             <div className='connName'>
//                 <h4>Magnet</h4>
//             </div>
//             <div className='connTaches'>
//                 <FontAwesomeIcon icon={faHouseLaptop} className='first'/>
//                 <FontAwesomeIcon icon={faTerminal} className='second'/>
//                 <FontAwesomeIcon icon={faList} className='third'/>
//             </div>
//         </div>
//         {ConnDet && 
//         <div className='ConnDet'>
//             <div className='ConnDetRow1'>
//                 <div className='ConnDetItem1'>
//                     <select>
//                         <option>--select db--</option>
//                         <option>1</option>
//                         <option>2</option>
//                         <option>3</option>
//                         <option>4</option>
//                     </select>
//                 </div>
//                 <div className='ConnDetItem2'>
//                     <button onClick={handelClick2}><FontAwesomeIcon icon={faCirclePlus} className='CirclePlus'/>New Key</button>
//                 </div>
//             </div>
//             <div className='ConnDetRow2'>
//                 <input type='search' className='searchKey' placeholder='Entre to search'/>
//             </div>
//             <div className='ConnDetRow3'><h4>DATA</h4></div>
//             <div className='ConnDetRow4'>
//                 <button className='LoadData'>Load More</button>
//                 <button className='AllData'>Load All</button>
//             </div>
//         </div>
//         }
//         {NewKeyAlert && <NewKeyAlertt handleClose={handleClickXMark}/> }
//         <div className='lstMap' onClick={handelClick3}>
//             <div className='connName'>
//                 <h4>Pulse</h4>
//             </div>
//             <div className='connTaches'>
//                 <FontAwesomeIcon icon={faHouseLaptop} className='first'/>
//                 <FontAwesomeIcon icon={faTerminal} className='second'/>
//                 <FontAwesomeIcon icon={faList} className='third'/>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Conn