import React from 'react'
import { useEffect,useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import GithubContext from '../../Context/Github/GithubContext'
import { FaUserFriends,FaUsers,FaBuilding,FaLink } from 'react-icons/fa'
import { getUserAndRepos } from '../../Context/Github/GithubAction'
import Repos from '../repo_list/Repos'

function User() {

    const {dispatch,
        user:{login,avatar_url,name,bio,html_url,followers,following,company,blog,public_repos,public_gists},
        repos
        } = useContext(GithubContext)

    const params = useParams()
    
    useEffect( ()=>{
        const getUserData = async() =>{

           const userData = await getUserAndRepos(params.login)
           dispatch({
            type: 'GET_USER_AND_REPOS',
            payload: userData
           })
         }

         getUserData()
    },[])
   

  return (
    <>
        <div className='w-full grid grid-cols-2' >

                <div className='mx-3 my-2'>
                    <Link to='/' style={{textDecoration:"underline", color:'blue'}}> back to home </Link>

                    <div className='text-success h1 py-2'>
                        {login } 
                            <a href={html_url} target='_blank' rel="noreferrer" className='btn btn-outline text-primary w-13 ml-5 my-2'>
                                Visit Profile 
                            </a>
                        <img src={avatar_url} alt="avatar"  width={300} height={200} />
                    </div>
                </div>

            <div className='container grid grid-rows-5 h-15'>
                <div className='py-3 border-bottom'>
                    <p className='text-black'> {name} </p>
                   <p className='text-secondary py-2'>  {bio} </p>
                 <FaBuilding  className='inline' /> {company}
                </div>
                
                <div className='py-1 border-bottom'>
                   <FaLink className='inline pr-1' / > 
                    <p className='text-primary inline'> 
                        {blog} 
                    </p> 
                    <p className='text-success py-2'>
                        Public Gists: {public_gists}
                    </p>
                    
                    <p className='text-success py-2'>
                        Public repositeries: {public_repos}
                    </p>
                    
                </div>

                <p style={{color:'purple'}}>
                     <FaUserFriends className='inline w-5 mx-1' /> Followers 
                    <p className='m-3'> {followers}</p>
                </p>
                <p style={{color:'purple'}} className='border-bottom'>
                     <FaUsers className='inline w-5 mx-1' /> Followers 
                    <p className='m-3'> {following}</p>
                </p>
              
            </div>
        </div>

        <strong>Latest Reposeteries</strong>
         <Repos repos={repos}/>  
    </>
  )
}

export default User