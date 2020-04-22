import React from 'react'
// import { Route } from 'react-router-dom'

import Cocktails from './Cocktails'

const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

class Search extends React.Component {
  state = {
    query: '',
    drinks: [],
    cocktail: null
  }

  updateQuery = event => {
    this.setState({
      query: event.target.value
    })
  }

  searchCocktails = () => {
    fetch(`${apiUrl}${this.state.query}`)
      .then(res => res.json())
      .then(json => {
        if (json.drinks.length > 0) {
          const cocktail = json.drinks[0]
          this.setState({ cocktail: cocktail, drinks: json.drinks })
        }
      })
      .catch(error => console.log(error.message))
  }

  handleKeyPress = () => {
    if (event.key === 'Enter') {
      this.searchCocktails()
    }
  }

  randomCocktail = () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
      .then(res => res.json())
      .then(json => {
        if (json.drinks.length > 0) {
          const cocktail = json.drinks[0]
          this.setState({ cocktail: cocktail, drinks: json.drinks })
        }
      })
      .catch(error => console.log(error.message))
  }

  render () {
    return (
      <div className='searchContainer'>
        <h1>What's your favourite cocktail?</h1>
        <div className='search'>
          <input className='input'
            onKeyPress={this.handleKeyPress}
            onChange={this.updateQuery}
          /><br></br>
          <button className='button' onClick={this.searchCocktails}>
            GO
          </button>
        </div>
        <div className='random'>
          <h3>Or...</h3>
          <button onClick={this.randomCocktail}>
            GET RANDOM COCKTAIL
          </button>
        </div>
        <Cocktails cocktail={this.state.cocktail} drinks={this.state.drinks} />
        {/* <Route exact path={`/${this.state.cocktail}`} component={Cocktails} cocktail={this.state.cocktail} drinks={this.state.drinks} /> */}
      </div>
    )
  }
}

export default Search
