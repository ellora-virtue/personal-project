import React from 'react'
import request from 'superagent'

// Cocktail API end point
const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php'
const cocktail = 'margarita'

const imgStyle = {
  width: '400px',
  marginTop: '20px',
  marginBottom: '20px'
}

// strDrink, strIngredient1, strIngredient2, strIngredient3, strIngredient4,strInstructions, strDrinkThumb

class Cocktails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      image: '',
      ingredients: [],
      instructions: ''
    }
  }

  componentDidMount () {
    request.get(apiUrl)
      .query({ s: cocktail })
      .then(res => {
        // console.log(res.body)
        const x = res.body.drinks[0]
        const { strDrink, strInstructions, strDrinkThumb } = x
        const ingredients = [[x.strIngredient1, x.strMeasure1], [x.strIngredient2, x.strMeasure2], [x.strIngredient3, x.strMeasure3], [x.strIngredient4, x.strMeasure4], [x.strIngredient5, x.strMeasure5]]
        // console.log(ingredients)
        this.setState({
          name: strDrink,
          image: strDrinkThumb,
          instructions: strInstructions,
          ingredients: ingredients
        })
      })
  }

  render () {
    return (
      <>
        <h1>Classic cocktails</h1>
        <div><h2>{this.state.name}</h2></div>
        <div className='container'>
          <img src={this.state.image} style={imgStyle} alt={`image of a ${this.state.name}`} />
          <div className='innerCont'>
            <div className='ingredients'>
              <span id='title'>Ingredients: </span>
              {console.log(this.state.ingredients)}
              <ul>
                {this.state.ingredients.map((ingredient, idx) => {
                  return (
                    <li key={idx}>
                      {ingredient[1]}  {ingredient[0]}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className='instructions'>
              <span id='title'>Instructions: </span>
              <div>{this.state.instructions}</div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Cocktails
