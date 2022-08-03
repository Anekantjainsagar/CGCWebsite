import React,{useState} from 'react'
import directorImg from '../Assets/director.jpg'
import { msg } from './msg'
import { GiCancel } from 'react-icons/gi';

const DirectorMsg = () => {

    console.log(msg.slice(0,50))
    const [displayMsg, setDisplayMsg] = useState(false)

  return (
    <>
        <div className='directorPage'>
            <div className='imgContainer'><img src={directorImg} alt="Director" className='directorImg' /></div>
            <div className='content'>
                <p className='title'>Director's Message</p>
                <p className='msg'>{msg.slice(0,201)+"....."}</p>
                <p className='msgReadMore' onClick={()=>setDisplayMsg(!displayMsg)}>Read More...</p>
                <p className='name'>Dr. Rajindra Kumar Pandit</p>
            </div>
            <div className='Model' style={(displayMsg)?{display:'block'}:{display:"none"}}>
              <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <p className='title'>Director's message</p>
                <GiCancel onClick={()=>{setDisplayMsg(!displayMsg)}} style={{cursor:'pointer'}} size={30}/>
              </div>
              <p className='msg'>{msg}</p>
              <p className='name'>Dr. Rajindra Kumar Pandit<br/>Director, Samrat Ashok Technological Institute, Vidisha </p>
            </div>
        </div>    
    </>
  )
}

export default DirectorMsg