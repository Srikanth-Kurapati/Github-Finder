import PropTypes from 'prop-types'
import { FaLink,FaEye,FaStar, FaInfo } from 'react-icons/fa'
function RepoItem({repo}) {
    const{
        name,
        html_url,
        stargazers_count,
        watchers_count,
        open_issues_count

         } = repo

    return (
    <div className='bg-light border m-1 p-3'>
        <FaLink className='inline text-danger' /> 
        <a href={html_url} target="_blank" className='h2 m-2'>
          {name}
        </a>

      <div className='py-2'>
        <FaEye className='inline text-secondary'/>
            <p className='text-success inline mr-5'> {watchers_count}</p>

            <FaStar className='inline text-secondary' />
            <p className='text-warning inline mr-5'> {stargazers_count}</p>

            <FaInfo className='inline text-secondary' />
            <p className='text-info inline my-2 mr-5'> {open_issues_count}</p>

      </div>

    </div>
    )
}

RepoItem.prototypes= {
    repo: PropTypes.string.isRequired
}

export default RepoItem