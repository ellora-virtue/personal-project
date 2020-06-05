import React from 'react'
import Cocktails from './Cocktails'
// import { Link } from 'react-router-dom'

class SearchResults extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      drinks: props.drinks,
      cocktail: null,
      // cocktailIdx: null,
      renderRecipe: false
    }
  }

  refreshPage = () => {
    window.location.reload(false)
  }

  handleClick = () => {
    const selected = document.getElementById('selectedCocktail').value
    // console.log(typeof this.state.drinks[0].idDrink)
    const selectedCocktail = this.state.drinks.find(drink => Number(drink.idDrink) === selected)
    this.setState({
      drinks: this.state.drinks,
      cocktail: selectedCocktail,
      renderRecipe: true
    })
  }

  render () {
    console.log(this.state)
    if (this.state.renderRecipe === true) {
      return (
        <Cocktails cocktail={this.state.cocktail} drinks={this.state.drinks} />
      )
    } else {
      return (
        <div className='search-results'>
          <h1 id='results-title'>Search results</h1>
          <ul>
            {this.state.drinks.map((drink) => {
              const { strDrinkThumb: image, strDrink: name, strIngredient1, strIngredient2, strIngredient3, idDrink: idx } = drink
              return (
                <li id='selectedCocktail' value={idx} key={idx}>
                  <div className='result'>
                    <img onClick={this.handleClick} src={image} alt={`${name}`} />
                    <div className='inner-result'>
                      <h2 onClick={this.handleClick}>{name}</h2>
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
}

export default SearchResults
