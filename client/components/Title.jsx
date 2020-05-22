import React from 'react'
import { Link } from 'react-router-dom'

const Title = () => {
  return (
    <div className='title'>
      <Link to='/'>
        <h1>High Spirits</h1>
      </Link>
    </div>
  )
}

export default Title
