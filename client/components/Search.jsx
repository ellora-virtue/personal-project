import React from 'react'
import swal from '@sweetalert/with-react'

import Cocktails from './Cocktails'
import SearchResults from './SearchResults'

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
        if (json.drinks === null) {
          swal({
            title: 'Oh no!',
            text: 'Sorry, we couldn\'t find that cocktail.',
            icon: 'warning',
            button: 'Try again?',
            className: 'alert'
          })
        } else if (json.drinks.length > 0) {
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

  refreshPage = () => {
    window.location.reload(false)
  }

  render () {
    if (this.state.cocktail === null) {
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
        </div>
      )
    } else if (this.state.drinks.length === 1) {
      return (
        <Cocktails cocktail={this.state.cocktail} drinks={this.state.drinks} />
      )
    } else {
      return (
        <div>
          <SearchResults drinks={this.state.drinks} />
        </div>
        // <div className='cocktail'>
        //   <Cocktails cocktail={this.state.cocktail} drinks={this.state.drinks} />
        //   <button onClick={this.refreshPage}>
        //     BACK TO SEARCH
        //   </button>
        //   <button onClick={this.randomCocktail}>
        //     GET RANDOM COCKTAIL
        //   </button>
        // </div>
      )
    }
  }
}

export default Search
