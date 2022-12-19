import React from 'react'
import { FaSadTear, FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Home from './Home'

function NotFound() {
  return (
    <div  style={{marginLeft:"33%"}}>
        <h1 className='h1 text-danger'  >
            OOPS!  
        </h1>
        <FaSadTear className='mx-4 h3 text-warning'/> 
        <p className='h3'>
            no data found.. Please check the URL address
        </p>
        <Link to='/' element={<Home/>} className='text-primary'>
        <FaHome className='h1 mx-4 text-success'/> Go Home 
        </Link>
    </div>
  )
}

export default NotFound