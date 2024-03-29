import React from 'react'
import { useContext } from 'react'
import UserItem from '../UserItem'
import GithubContext from '../../Context/Github/GithubContext'


function UserResults() {

  const{users} = useContext(GithubContext)
 

  return (
   <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2' >
    {users.map((user)=>(
     <h3> <UserItem key={user.id} user={user}/></h3>
    ))
    }
    
   </div>
  )
}

export default UserResults