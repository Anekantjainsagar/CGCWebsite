import React from 'react'
import directorImg from '../Assets/director.jpg'
import { msg } from './msg'

const DirectorMsg = () => {

    console.log(msg.slice(0,50))

  return (
    <>
        <div className='directorPage'>
            <div className='imgContainer'><img src={directorImg} alt="Director" className='directorImg' /></div>
            <div className='content'>
                <p className='title'>Director's Message</p>
                <p className='msg'>{msg.slice(0,201)+"....."}</p>
                <p className='msgReadMore'>Read More...</p>
                <p className='name'>Dr. Rajindra Kumar Pandit</p>
            </div>
        </div>    
    </>
  )
}

export default DirectorMsg