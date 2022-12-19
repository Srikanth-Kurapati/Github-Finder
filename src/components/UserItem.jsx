import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

function UserItem({user:{login,avatar_url}}) {

  return (
    <div className='card text-center'>
    <img
      src={avatar_url}
      alt='avatar'
      className='round-img mx-5 my-2'
      style={{ width: '400px' }}
    />
    <h3 className='h3 mx-5'>{login}</h3>

    <div>
      <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1'>
        More
      </Link>
    </div>
  </div>
);
  
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired
  };
  

export default UserItem

// {user.login}