import React from 'react'
// import { Link } from 'react-router-dom'

const Title = () => {
  const refreshPage = () => {
    window.location.reload(false)
  }

  return (
    <div className='title'>
      <h1 onClick={refreshPage}>High Spirits</h1>
    </div>
  )
}

export default Title
