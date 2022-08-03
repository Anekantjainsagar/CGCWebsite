import React from 'react'
import logo from '../Assets/logo.png'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <>
        <div className='Footer'>
            <p>Career Guidance Cell 2022</p>
            <img src={logo} alt="logo" className='logoStyle' />
            <div className='icons'>
                <a href='https://www.instagram.com/cgc_sati/' target='blank'><AiOutlineInstagram color='black' style={{cursor:'pointer'}} size={35} /></a>
                <a href='/'><AiFillLinkedin color='black' style={{cursor:'pointer'}} size={33} /></a>
            </div>
        </div>
    </>
  )
}

export default Footer