import {Component} from 'react'

import './index.css'

import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  update = value => {
    this.setState({searchInput: value})
  }

  onChanging = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {suggestionsList} = this.props
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
            className="logo"
            alt="google logo"
          />
        </div>
        <div className="search-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            className="icon"
            alt="search icon"
          />
          <input
            type="search"
            placeholder="search google"
            value={searchInput}
            onChange={this.onChanging}
          />
        </div>
        <ul className="suggestion-list">
          {searchResults.map(each => (
            <SuggestionItem
              suggestionsList={suggestionsList}
              update={this.update}
              key={each.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default GoogleSuggestions
