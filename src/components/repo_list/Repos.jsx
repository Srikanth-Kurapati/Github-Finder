import React from 'react'
import PropTypes from 'prop-types'
import { FaLink, FaEye } from 'react-icons/fa'
import RepoItem from './RepoItem'
// import RepoItem from './RepoItem'
function Repos({repos}) {
  return (
    <div>
        {repos.map((repo)=>(
            <h3> 
            <RepoItem key={repo.id} repo={repo}/>
            </h3>
        ))}
    </div>
  )
}

Repos.prototypes= {
    repos: PropTypes.array.isRequired,
}

export default Repos