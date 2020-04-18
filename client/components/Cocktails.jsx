import React from 'react'
import request from 'superagent'

// Cocktail API end point
const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php'
const cocktail = 'margarita'

// Our server's end point
// const apiUrl = 'http://localhost:3000/api/v1/cocktails'

const imgStyle = {
  width: '400px',
  marginTop: '20px',
  marginBottom: '20px'
}

// strDrink, strIngredient1, strIngredient2, strIngredient3, strIngredient4,strInstructions, strDrinkThumb

class Cocktails extends React.Component {
  state = {
    name: '',
    image: '',
    instructions: ''
  }

  componentDidMount () {
    request.get(apiUrl)
      .query({ s: cocktail })
      .then(res => {
        // console.log(res.body)
        const { strDrink, strInstructions, strDrinkThumb } = res.body.drinks[0]
        // console.log(response.body.drinks[0])
        this.setState({
          name: strDrink,
          image: strDrinkThumb,
          instructions: strInstructions
        })
      })
  }

  render () {
    return (
      <>
        <h1>Classic cocktails</h1>
        <div><h2>{this.state.name}</h2></div>
        <img src={this.state.image} style={imgStyle} alt={`image of a ${this.state.name}`} />
        <div className='instructions'>
          <span id='title'>Instructions: </span>
          <div>{this.state.instructions}</div>
        </div>
      </>
    )
  }
}

export default Cocktails
