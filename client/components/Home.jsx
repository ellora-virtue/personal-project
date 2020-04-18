import React from 'react'
// import request from 'superagent'

class Home extends React.Component {
  render () {
    return (
      <>
        <h1>{`What's your favourite cocktail?`}</h1>
        <form>
          <input type='text' name='cocktail'></input><br></br>
          <input type='submit' value='GO'></input>
        </form>
      </>
    )
  }
}

export default Home
