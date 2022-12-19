import React, { useContext } from 'react'
import { useState } from 'react'
import GithubContext from '../../Context/Github/GithubContext'
import AlertContext from '../../Context/Alert/AlertContext'
import { searchUsers } from '../../Context/Github/GithubAction'

function SearchUser() {
    const [text,setText] = useState('')
    const{users,dispatch} = useContext(GithubContext)
    const{setAlert} = useContext(AlertContext)

    const handleChange = (e) => setText(e.target.value)

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(text === ''){
            setAlert("please enter something","error")
        }
        else{
           const users = await searchUsers(text) 
            setText('') 
            
            dispatch({
                type:"GET_USERS",
                payload: users
            })
        }
    }  

    const clearResults = () => dispatch({type:"CLEAR_RESULTS"})
  
    return (
    <div className=''>
        
            <div className='relative'>
                <form onSubmit={handleSubmit}>

                    <input 
                        type="text" 
                        className='w-80 bg-white text-black border' placeholder='Search' 
                        value={text}
                        onChange = {handleChange}
                    /> 

                    <button className="btn-primary px-3  ml-1 mr-3" type='submit'>
                        Go  
                    </button>  
                </form>

                {users.length > 0 &&(<div>
                    <button onClick={clearResults} className="btn btn-warning">
                        Clear
                    </button>
                </div>)}
            

               
               
            </div>
        
    </div>
  )
}

export default SearchUser