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

  renderRecipe = () => {
    // if (name === this.state.drinks.strDrink) {
      console.log(name)
    // }
  }

  render () {
    return (
      <div className='search-results'>
        <ul>
          {this.state.drinks.map((drink, idx) => {
            const { strDrinkThumb: image, strDrink: name, strAlcoholic: alcoholic } = drink
            return (
              <li key={idx}>
                <img src={image} alt={`${name}`} />
                <Link to={`/cocktail/${name}`}>
                  <h3 onClick={this.renderRecipe}>{name}</h3>
                </Link>
                <p>({alcoholic})</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default SearchResults
