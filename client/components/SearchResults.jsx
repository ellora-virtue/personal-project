import React from 'react'
import Cocktails from './Cocktails'
import { Link } from 'react-router-dom'

class SearchResults extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      drinks: props.drinks,
      cocktail: null
    }
  }

  refreshPage = () => {
    window.location.reload(false)
  }

  renderRecipe = () => {
    // if (name === this.state.drinks.strDrink) {
    console.log(name)
    // }
  }

  render () {
    return (
      <div className='search-results'>
        <h1 id='results-title'>Search results</h1>
        
        <ul>
          {this.state.drinks.map((drink, idx) => {
            const { strDrinkThumb: image, strDrink: name, strIngredient1, strIngredient2, strIngredient3 } = drink
            return (
              <li key={idx}>
                <div className='result'>
                  <img src={image} alt={`${name}`} />
                  <div className='inner-result'>
                    <Link to={`/cocktail/${name}`}>
                      <h2 onClick={this.renderRecipe}>{name}</h2>
                    </Link>
                    <p>Ingredients: {strIngredient1}, {strIngredient2}, {strIngredient3}...</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
        <div className='cocktail'>
          <button onClick={this.refreshPage}>
            BACK TO SEARCH
          </button>
        </div>
      </div>
    )
  }
}

export default SearchResults
