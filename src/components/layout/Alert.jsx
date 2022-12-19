import React, { useContext } from 'react'
import AlertContext from '../../Context/Alert/AlertContext'
import { FaExclamation } from 'react-icons/fa'

function Alert() {
    const {alert} = useContext(AlertContext)
  return (
    (alert !==null &&(
        (alert.type === 'error'&&(
            <div> 
                
                <FaExclamation className='text-warning inline pl-2 text-2xl  my-2' />
                <strong className='mx-1 text-danger '> {alert.msg}</strong>
                
            </div>
            
        ))
        
    ))
    
  )
  
}

export default Alert